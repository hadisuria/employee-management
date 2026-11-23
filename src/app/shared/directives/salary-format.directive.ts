import { DecimalPipe } from '@angular/common';
import { Directive, ElementRef, inject } from '@angular/core';
import { AbstractControl, NgControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const SALARY_LOCALE = 'id-ID';
const MAX_INTEGER_DIGITS = 15;
const MAX_DECIMAL_DIGITS = 2;
const VALID_SALARY_INPUT_REGEX = /^(?:\d{1,3}(?:\.\d{3})*|\d+)(?:,\d{1,2})?$/;

const salaryDecimalPipe = new DecimalPipe(SALARY_LOCALE);

/** Formats a numeric salary for editable input display using `.` thousands and `,` decimals. */
export function formatSalaryDisplay(value: number | null | undefined): string {
  if (value == null || !Number.isFinite(value)) {
    return '';
  }
  return salaryDecimalPipe.transform(value, '1.0-2', SALARY_LOCALE) ?? '';
}

/** Parses an `id-ID` formatted (or plain digit/comma) salary string into a non-negative number. */
export function parseSalaryInput(value: string | number | null | undefined): number | null {
  if (typeof value === 'number') {
    return Number.isFinite(value) && value >= 0 ? value : null;
  }

  const trimmed = (value ?? '').trim();
  if (!trimmed || !VALID_SALARY_INPUT_REGEX.test(trimmed)) {
    return null;
  }

  const normalized = trimmed.replace(/\./g, '').replace(',', '.');
  const parsed = Number(normalized);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
}

/** Validates formatted or numeric salary strings while delegating emptiness to `required`. */
export function salaryValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value === null || value === undefined || String(value).trim() === '') {
      return null;
    }
    return parseSalaryInput(value) === null ? { invalidSalary: true } : null;
  };
}

function countSigCharsBefore(value: string, endIndex: number): number {
  let count = 0;
  const limit = Math.min(endIndex, value.length);
  for (let i = 0; i < limit; i++) {
    if (/[0-9,]/.test(value[i])) {
      count++;
    }
  }
  return count;
}

function findCaretAfterSigChars(formatted: string, targetCount: number): number {
  if (targetCount <= 0) {
    return 0;
  }
  let seen = 0;
  for (let i = 0; i < formatted.length; i++) {
    if (/[0-9,]/.test(formatted[i])) {
      seen++;
      if (seen >= targetCount) {
        return i + 1;
      }
    }
  }
  return formatted.length;
}

/** Formats Basic Salary input live with `.` thousand separators via Angular `DecimalPipe`. */
@Directive({
  selector: 'input[appSalaryFormat]',
  host: {
    '(input)': 'onInput()',
    '(blur)': 'onBlur()',
    '(keydown)': 'onKeydown($event)',
  },
})
export class SalaryFormatDirective {
  private readonly elementRef = inject(ElementRef<HTMLInputElement>);
  private readonly ngControl = inject(NgControl, { optional: true, self: true });
  private readonly decimalPipe = new DecimalPipe(SALARY_LOCALE);

  onInput(): void {
    const el = this.elementRef.nativeElement;
    const raw = el.value;
    const selectionStart = el.selectionStart ?? raw.length;
    // Preserve cursor past `,` when typing `,` first causes `0` to be prepended.
    const leadingCommaOffset = raw.startsWith(',') && selectionStart > 0 ? 1 : 0;
    const targetSigCount = countSigCharsBefore(raw, selectionStart) + leadingCommaOffset;

    this.applyFormatted(raw, targetSigCount, false);
  }

  onKeydown(event: KeyboardEvent): void {
    const el = this.elementRef.nativeElement;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    if (start == null || end == null || start !== end) {
      return;
    }

    const oldVal = el.value;
    if (event.key === 'Backspace' && start > 1 && oldVal[start - 1] === '.') {
      event.preventDefault();
      const nextRaw = oldVal.slice(0, start - 2) + oldVal.slice(start);
      this.applyFormatted(nextRaw, countSigCharsBefore(oldVal, start - 2), true);
      return;
    }

    if (event.key === 'Delete' && start < oldVal.length - 1 && oldVal[start] === '.') {
      event.preventDefault();
      const nextRaw = oldVal.slice(0, start) + oldVal.slice(start + 2);
      this.applyFormatted(nextRaw, countSigCharsBefore(oldVal, start), true);
    }
  }

  onBlur(): void {
    const el = this.elementRef.nativeElement;
    if (!el.value.endsWith(',')) {
      return;
    }

    const cleaned = el.value === '0,' ? '0' : el.value.slice(0, -1);
    el.value = cleaned;
    const control = this.ngControl?.control;
    if (control && control.value !== cleaned) {
      control.setValue(cleaned, { emitEvent: false });
    }
  }

  private applyFormatted(raw: string, targetSigCount: number, emitEvent: boolean): void {
    const el = this.elementRef.nativeElement;
    const formatted = this.formatRawInput(raw);
    el.value = formatted;

    const caretPos = findCaretAfterSigChars(formatted, targetSigCount);
    if (typeof el.setSelectionRange === 'function') {
      el.setSelectionRange(caretPos, caretPos);
    }

    const control = this.ngControl?.control;
    if (control) {
      if (control.value !== formatted) {
        control.setValue(formatted, { emitEvent });
      }
      if (emitEvent) {
        control.markAsDirty();
      }
    }
  }

  private formatRawInput(raw: string): string {
    const cleaned = raw.replace(/[^0-9,]/g, '');
    if (!cleaned) {
      return '';
    }

    const commaIndex = cleaned.indexOf(',');
    const hasComma = commaIndex !== -1;
    const rawInt = hasComma ? cleaned.slice(0, commaIndex) : cleaned;
    const rawDec = hasComma ? cleaned.slice(commaIndex + 1).replace(/,/g, '') : '';

    let intDigits = rawInt.replace(/^0+(?=\d)/, '').slice(0, MAX_INTEGER_DIGITS);
    if (!intDigits && hasComma) {
      intDigits = '0';
    }

    const decDigits = rawDec.slice(0, MAX_DECIMAL_DIGITS);
    const formattedInt = intDigits
      ? (this.decimalPipe.transform(intDigits, '1.0-0', SALARY_LOCALE) ?? intDigits)
      : '';

    return hasComma ? `${formattedInt},${decDigits}` : formattedInt;
  }
}

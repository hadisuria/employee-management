import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

function parseCalendarDate(value: unknown): Date | null {
  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) {
      return null;
    }
    return new Date(value.getFullYear(), value.getMonth(), value.getDate());
  }

  if (typeof value !== 'string') {
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  const datePartMatch = /^(\d{4})-(\d{2})-(\d{2})/.exec(trimmed);
  if (datePartMatch) {
    const year = Number(datePartMatch[1]);
    const month = Number(datePartMatch[2]) - 1;
    const day = Number(datePartMatch[3]);
    return new Date(year, month, day);
  }

  const parsed = new Date(trimmed);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }
  return new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
}

export const MIN_EMPLOYEE_AGE = 18;

/** Returns the latest calendar birth date that satisfies the minimum age today. */
export function getMaxBirthDate(minAge = MIN_EMPLOYEE_AGE): Date {
  const now = new Date();
  return new Date(now.getFullYear() - minAge, now.getMonth(), now.getDate());
}

export function maxTodayValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }

    const selected = parseCalendarDate(value);
    if (!selected) {
      return { maxToday: true };
    }

    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    return selected.getTime() > todayStart ? { maxToday: true } : null;
  };
}

/** Validates that a birth date falls on or before the minimum-age cutoff date. */
export function minAgeValidator(minAge = MIN_EMPLOYEE_AGE): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }

    const selected = parseCalendarDate(value);
    if (!selected) {
      return null;
    }

    const maxBirthDate = getMaxBirthDate(minAge);
    return selected.getTime() > maxBirthDate.getTime()
      ? { minAge: { requiredAge: minAge } }
      : null;
  };
}

export function trimmedRequiredValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (typeof value !== 'string') {
      return value == null ? { required: true } : null;
    }
    return value.trim().length === 0 ? { required: true } : null;
  };
}

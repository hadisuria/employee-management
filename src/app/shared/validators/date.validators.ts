import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function maxTodayValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }

    const selected = new Date(value);
    if (Number.isNaN(selected.getTime())) {
      return { maxToday: true };
    }

    return selected.getTime() > Date.now() ? { maxToday: true } : null;
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

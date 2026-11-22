import { FormControl } from '@angular/forms';
import { maxTodayValidator, trimmedRequiredValidator } from './date.validators';

describe('Custom form validators', () => {
  describe('maxTodayValidator', () => {
    const validator = maxTodayValidator();

    it('allows empty values', () => {
      expect(validator(new FormControl(''))).toBeNull();
      expect(validator(new FormControl(null))).toBeNull();
    });

    it('allows past dates', () => {
      expect(validator(new FormControl('1995-05-12T08:30'))).toBeNull();
    });

    it('rejects future dates with maxToday error', () => {
      const tomorrow = new Date(Date.now() + 86_400_000).toISOString().slice(0, 16);
      expect(validator(new FormControl(tomorrow))).toEqual({ maxToday: true });
    });
  });

  describe('trimmedRequiredValidator', () => {
    const validator = trimmedRequiredValidator();

    it('rejects empty and whitespace-only strings', () => {
      expect(validator(new FormControl(''))).toEqual({ required: true });
      expect(validator(new FormControl('   \t  '))).toEqual({ required: true });
    });

    it('allows non-empty trimmed values', () => {
      expect(validator(new FormControl('  budi.santoso '))).toBeNull();
    });
  });
});

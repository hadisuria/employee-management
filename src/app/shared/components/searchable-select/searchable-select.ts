import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  forwardRef,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule, SubscriptSizing } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelect, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-searchable-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatSelectModule, MatIconModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchableSelectComponent),
      multi: true,
    },
  ],
  templateUrl: './searchable-select.html',
  styleUrl: './searchable-select.scss',
})
export class SearchableSelectComponent implements ControlValueAccessor {
  readonly options = input<readonly string[]>([]);
  readonly label = input('Group');
  readonly placeholder = input('Select option');
  readonly searchPlaceholder = input('Search...');
  readonly emptyText = input('No group found');
  readonly allowClear = input(false);
  readonly clearLabel = input('All groups');
  readonly invalid = input(false);
  readonly errorMessage = input('');
  readonly required = input(false);
  readonly subscriptSizing = input<SubscriptSizing>('fixed');
  readonly value = input<string | null>(null);

  readonly valueChange = output<string>();

  readonly searchInputRef = viewChild<ElementRef<HTMLInputElement>>('searchInput');
  readonly matSelectRef = viewChild(MatSelect);

  readonly searchTerm = signal('');
  readonly selectedValue = signal('');
  readonly isDisabled = signal(false);

  readonly errorStateMatcher: ErrorStateMatcher = {
    isErrorState: () => this.invalid(),
  };

  readonly filteredOptions = computed(() => {
    const query = this.searchTerm().trim().toLowerCase();
    const list = this.options();
    return query ? list.filter((item) => item.toLowerCase().includes(query)) : list;
  });

  private onChange: (val: string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    effect(() => {
      const external = this.value();
      if (external !== null) {
        this.selectedValue.set(external);
      }
    });

    effect(() => {
      this.invalid();
      this.matSelectRef()?.updateErrorState();
    });
  }

  writeValue(val: string | null): void {
    this.selectedValue.set(val ?? '');
  }

  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.isDisabled.set(disabled);
  }

  onOpenedChange(opened: boolean): void {
    if (opened) {
      this.searchTerm.set('');
      setTimeout(() => this.searchInputRef()?.nativeElement.focus());
    } else {
      this.searchTerm.set('');
      this.onTouched();
    }
  }

  onSelectChange(value: string): void {
    this.selectedValue.set(value);
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
  }

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value);
  }

  onSearchKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Escape' && event.key !== 'Tab') {
      event.stopPropagation();
    }
  }
}

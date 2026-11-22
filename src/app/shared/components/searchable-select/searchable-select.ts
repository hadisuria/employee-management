import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  forwardRef,
  HostListener,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-searchable-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  private readonly hostRef = inject(ElementRef<HTMLElement>);

  readonly options = input<readonly string[]>([]);
  readonly placeholder = input('Select option...');
  readonly searchPlaceholder = input('Search...');
  readonly emptyText = input('No group found');
  readonly allowClear = input(false);
  readonly clearLabel = input('All groups');
  readonly invalid = input(false);
  readonly inputId = input('searchable-select');
  readonly value = input<string | null>(null);

  readonly valueChange = output<string>();

  readonly searchInputRef = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  readonly isOpen = signal(false);
  readonly searchTerm = signal('');
  readonly selectedValue = signal('');
  readonly isDisabled = signal(false);

  readonly filteredOptions = computed(() => {
    const query = this.searchTerm().trim().toLowerCase();
    const list = this.options();
    return query ? list.filter((item) => item.toLowerCase().includes(query)) : list;
  });

  readonly displayLabel = computed(() => {
    const selected = this.selectedValue();
    return selected || this.placeholder();
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
    if (disabled) {
      this.isOpen.set(false);
    }
  }

  toggleOpen(): void {
    if (this.isDisabled()) return;

    const nextOpen = !this.isOpen();
    this.isOpen.set(nextOpen);

    if (nextOpen) {
      this.searchTerm.set('');
      setTimeout(() => this.searchInputRef()?.nativeElement.focus());
    } else {
      this.onTouched();
    }
  }

  selectOption(option: string): void {
    this.selectedValue.set(option);
    this.onChange(option);
    this.onTouched();
    this.valueChange.emit(option);
    this.searchTerm.set('');
    this.isOpen.set(false);
  }

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isOpen()) return;
    if (!this.hostRef.nativeElement.contains(event.target as Node)) {
      this.isOpen.set(false);
      this.onTouched();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (!this.isOpen()) return;
    this.isOpen.set(false);
    this.onTouched();
  }
}

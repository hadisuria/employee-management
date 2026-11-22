import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DUMMY_GROUPS } from '../../../core/data/dummy-groups';
import { SearchableSelectComponent } from './searchable-select';

@Component({
  imports: [ReactiveFormsModule, SearchableSelectComponent],
  template: `
    <app-searchable-select
      [formControl]="control"
      [options]="groups"
      placeholder="Select group..."
      searchPlaceholder="Search group..."
    />
  `,
})
class TestHostComponent {
  readonly groups = [...DUMMY_GROUPS];
  readonly control = new FormControl('', { nonNullable: true });
}

describe('SearchableSelectComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
  });

  it('filters options, shows empty state, and propagates selected value', async () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    await fixture.whenStable();

    const hostEl = fixture.nativeElement as HTMLElement;
    const trigger = hostEl.querySelector('.select-trigger') as HTMLButtonElement;
    trigger.click();
    fixture.detectChanges();

    const searchInput = hostEl.querySelector('.search-box') as HTMLInputElement;
    expect(searchInput).not.toBeNull();

    searchInput.value = 'unknown-team';
    searchInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(hostEl.querySelector('.empty-state')?.textContent?.trim()).toBe('No group found');

    searchInput.value = 'fin';
    searchInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const options = Array.from(hostEl.querySelectorAll('.option-item')) as HTMLButtonElement[];
    expect(options.length).toBe(1);
    expect(options[0].textContent?.trim()).toBe('Finance');

    options[0].click();
    fixture.detectChanges();

    expect(fixture.componentInstance.control.value).toBe('Finance');
    expect(hostEl.querySelector('.dropdown-panel')).toBeNull();
  });
});

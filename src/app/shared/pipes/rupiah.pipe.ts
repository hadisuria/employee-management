import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupiah',
})
export class RupiahPipe implements PipeTransform {
  private readonly decimalPipe = new DecimalPipe('id-ID');

  transform(value: number | null | undefined): string {
    if (value == null || Number.isNaN(value)) {
      return 'Rp. 0,00';
    }
    return `Rp. ${this.decimalPipe.transform(value, '1.2-2', 'id-ID') ?? '0,00'}`;
  }
}

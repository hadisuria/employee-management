import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupiah',
})
export class RupiahPipe implements PipeTransform {
  private readonly formatter = new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  transform(value: number | null | undefined): string {
    if (value == null || Number.isNaN(value)) {
      return 'Rp. 0,00';
    }
    return `Rp. ${this.formatter.format(value)}`;
  }
}

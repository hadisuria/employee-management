import { RupiahPipe } from './rupiah.pipe';

describe('RupiahPipe', () => {
  const pipe = new RupiahPipe();

  it('formats whole numbers with dot separators and comma decimals', () => {
    expect(pipe.transform(12500000)).toBe('Rp. 12.500.000,00');
  });

  it('formats numbers with decimal cents accurately', () => {
    expect(pipe.transform(15750000.5)).toBe('Rp. 15.750.000,50');
    expect(pipe.transform(15100000.25)).toBe('Rp. 15.100.000,25');
  });

  it('handles zero and invalid or empty inputs', () => {
    expect(pipe.transform(0)).toBe('Rp. 0,00');
    expect(pipe.transform(null)).toBe('Rp. 0,00');
    expect(pipe.transform(undefined)).toBe('Rp. 0,00');
    expect(pipe.transform(Number.NaN)).toBe('Rp. 0,00');
  });
});

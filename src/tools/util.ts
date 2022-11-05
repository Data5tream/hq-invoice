export const formatCurrency = (val: number): string =>
  (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })).format(val);

export const formatNumber = (val: number): string =>
  (new Intl.NumberFormat('de-DE', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })).format(val);

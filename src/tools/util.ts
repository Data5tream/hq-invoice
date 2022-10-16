export const formatCurrency = (val: number): string =>
  (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })).format(val);

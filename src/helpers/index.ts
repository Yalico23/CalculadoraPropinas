export function formatCurrency(quantity: number) {
    const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    });
    return formatter.format(quantity);
}

function calculateVAT() {
    var price = parseFloat(document.getElementById('price').value);
    var vatRate = parseFloat(document.getElementById('vat').value);

    if (isNaN(price) || isNaN(vatRate)) {
        alert('Please enter valid numbers for Price and VAT.');
        return;
    }

    var vatAmount = price * (vatRate / 100);
    var totalPrice = price + vatAmount;

    document.getElementById('vatAmount').textContent = totalPrice.toFixed(2);
}

// Variable Declaration
const adminFee = 50.00;
const ticketPrice = 250.00;

function calculateTotal() {


    let qty = document.getElementById("qty").value;
    let subtotal = qty * ticketPrice;
    let total = subtotal + adminFee;

    document.querySelector("input[name='subtotal']").value = subtotal.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
}

function resetForm() {
    document.getElementById("qty").value = 0;
    document.querySelector("input[name='subtotal']").value = "0.00";
    document.getElementById("total").innerText = "0.00";
}
let total = 0.00;

function updateTotal(price) {
    total += price;
    const totalElement = document.getElementById('total');
    totalElement.innerText = `$ ${total}.00`;
}

function limeClicked() {
 updateTotal(2.00);
}

function peanutsClicked() {
    updateTotal(3.00);
}

function chocolateClicked() {
    updateTotal(4.00);
}

function gummyClicked(){
    updateTotal(6.00);
}


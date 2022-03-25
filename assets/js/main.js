function myFunction() {
    let full_name = document.getElementById("full_name").value;
    document.getElementById("selected_name").innerHTML = full_name;

    let age = document.getElementById("age").value;
    document.getElementById("selected_age").innerHTML = age;

}

//costo per km e calcolo prezzo
const km_price = 0.21;
const ticket_price = km * km_price;

//formule di sconto
const minors_discount = ticket_price - (ticket_price * 20 / 100);
const over_discount = ticket_price - (ticket_price * 40 / 100);

if (age === `Sconto Minorenne`) {
    minors_discount;
    document.getElementById("full_price").innerHTML = minors_discount
} else if (age === `Sconto Over 65`) {
    over_discount;
} else if (age === `Nessuno`) {
    ticket_price
}


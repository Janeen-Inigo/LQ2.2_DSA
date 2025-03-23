let item_choice = prompt(
    "Choose an item:\nA. Pepsi Cola - Php 30.00\nB. Coca Cola - Php 35.00\nC. Apple (per kg) - Php 100.00\nD. Orange (per kg) - Php 120.00\nE. Hotdogs (per kg) - Php 180.00\n\nEnter the letter of your choice:"
).toUpperCase();

let qty = parseInt(prompt("Enter quantity to be ordered:"));
let price = 0;

switch (item_choice) {
    case 'A':
        price = 30.00;
        break;
    case 'B':
        price = 35.00;
        break;
    case 'C':
        price = 100.00;
        break;
    case 'D':
        price = 120.00;
        break;
    case 'E':
        price = 180.00;
        break;
    default:
        alert("Invalid choice! Please enter A, B, C, D, or E.");
        price = null;
}

if (price !== null) {
    let total = price * qty;
    alert(`Total cost: Php ${total.toFixed(2)}`);
}
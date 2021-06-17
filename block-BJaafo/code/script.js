function fullName(firstName='', lastName='') {
    return firstName + ' ' + lastName;
}

function totalAmount(amount=0, taxRate= 0) {
    return `${amount} + (${amount} * ${taxRate})`;
}
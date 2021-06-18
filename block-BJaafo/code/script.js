function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

let result = fullName('piyush', 'chamoli');
let expected = 'piyushchamoli'

if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
}




function totalAmount(amount=0, taxRate= 0) {
    return (amount + (amount * taxRate));
}

let result1 = totalAmount(10, 1);
let expected1 = 19;

if (result1 !== expected1) {
    throw new Error(`${result1} is not equal to ${expected1}`);
}
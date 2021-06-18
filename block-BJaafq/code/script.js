function addNumbers(numA, numB) {
    return numA + numB;
}

function multiplyNumbers(numA, numB) {
    return numA * numB;
}
let result;
let expected;
function testAdd() {
    result = addNumbers(1,1);
    expected = 21;
    expect(result).toEqual(expected);
}

test('adding 1 with 1', testAdd);

function testMultiply() {
    let result = multiplyNumbers(2,2);
    let expected = 41;
    expect(result).toEqual(expected);
}

test('multiply 2 with 2', testMultiply);

// function testNumbers() {
//     let result = 
// }

// assertions
function expect(actual) {
    return {
        toEqual: function(expected) {
            if (actual !== expected) {
                throw new Error(`${result} is not equal to ${expected}`);
            }
        }, toBeEqual: function(expected) {
            if (actual !== 'string') {
                throw new Error(`${typeof result} is not equal to ${expected}`);
            }
        }
    }
}

// testing framework
function test(message, cb) {
    try {
        cb();
        console.log('success', message);
    } catch (error) {
        console.error(error);
        console.log('failure', message);
    }
}


const numbers = [175, 50, 25];

function myFunc(total, num) {
    return total - num;
}

var res = numbers.reduce(getSum, 0);

console.log(res);
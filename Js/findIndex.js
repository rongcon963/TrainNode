const ages = [3,10,18,20];

function checkAge(age) {
    return age >= 18;
}

let res = ages.findIndex(checkAge);
console.log(res);
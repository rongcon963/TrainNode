const ages = [3,10,18,20];

function checkAge(age) {
    return age >= 18;
}

let res = ages.filter(checkAge);
console.log(res);
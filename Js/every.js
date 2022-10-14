const ages = [32, 33, 16, 40];

ages.every(checkAge)

function checkAge(age) {
  return age > 18;
}
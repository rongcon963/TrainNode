let promise = new Promise(function(resolve, reject) {
    let yes = 1;
    if(yes) {
        resolve(yes);
    } else {
        reject(Error('Invalid'));
    }
});

promise.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})

console.log(promise);
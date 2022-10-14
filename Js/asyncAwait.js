async function myFunction() {
    let myPromise = new Promise((resolve, reject) => {
        resolve('done async');
    });
    var res = await myPromise;
    console.log(res);
}

myFunction();
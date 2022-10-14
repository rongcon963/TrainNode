function doSomething() {
    console.log('something');
}

function something(callback) {
    callback();
}

something(doSomething);
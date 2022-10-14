const add = (function() {
    let counter = 0;
    return function() {
        counter += 1;
        console.log(counter);
    }
})();

add();
add();
add();
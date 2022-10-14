function do_A(doSomething) {
    doSomething();
}

function do_B(doSomething) {
    doSomething();
}

function do_C(doSomething) {
    doSomething();
}

function main() {
    do_A(function () {
        console.log('do A');
        do_B(function () {
            console.log('do B');
            do_C(function () {
                console.log('done');
            })
        })
    })
}

main();
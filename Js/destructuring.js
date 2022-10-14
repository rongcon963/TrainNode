// VD 1: structured assignment
function getArr() {
    return [1, 2, 3];
}

function getObj() {
    return {
        x: 4,
        y: 5,
        z: 6
    }
}
// var tmp1 = getArr();
// x1 = tmp1[0], y1 = tmp1[1], z1 = tmp1[2];
// console.log(x1, y1, z1);

// var tmp = getObj();
// x = tmp.x; y = tmp.y; z = tmp.z;
// console.log(x, y, z);

// VD 2: Destructuring assignment
var [a,b,c] = getArr();
var {x: d, y: e, z: f} = getObj();
console.log(a,b,c);
console.log(d,e,f);
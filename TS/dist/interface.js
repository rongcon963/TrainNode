"use strict";
var customer = {
    name: 'John',
    age: 36,
    sayHi: () => { return "Hi"; },
    getName: function (name) {
        return name;
    },
    getAge() {
        return this.age;
    }
};
console.log(customer.sayHi());
console.log(customer.getName('haha'));
console.log(customer.getAge());
var emp = {
    emId: "123",
    name: "Emp",
    age: 0,
    sayHi: function () {
        return this.emId;
    },
    getName: function (name) {
        return this.name;
    },
    getAge: function () {
        return this.age;
    }
};
console.log(emp.sayHi());
console.log(emp.getName('haha'));
console.log(emp.getAge());
class Employee {
    constructor(emId, name, age) {
        console.log(this.sayHi());
        this.emId = emId;
        this.name = name;
        this.age = age;
    }
    sayHi() {
        return "Hello";
    }
    getName(name) {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
let employee = new Employee('1', '123', 321);
console.log(employee);

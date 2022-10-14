interface IPerson {
    name: string;
    age: number;
    sayHi: () => string;
    getName(name: string): string;
    getAge(): number;
}

interface IEmployee  extends IPerson{
    emId: string;
}

var customer: IPerson = {
    name: 'John',
    age: 36,
    sayHi: () : string => { return "Hi"; },
    getName: function (name: string): string {
        return name;
    },
    getAge(): number {
        return this.age;
    }
}

console.log(customer.sayHi())
console.log(customer.getName('haha'))
console.log(customer.getAge())

var emp: IEmployee = {
    emId: "123",
    name: "Emp",
    age: 0,
    sayHi: function (): string {
        return this.emId;
    },
    getName: function (name: string): string {
        return this.name;
    },
    getAge: function (): number {
        return this.age;
    }
}

console.log(emp.sayHi())
console.log(emp.getName('haha'))
console.log(emp.getAge())

class Employee implements IEmployee {
    emId: string;
    name: string;
    age: number;

    constructor(emId: string, name: string, age: number) {
        console.log(this.sayHi());
        this.emId = emId;
        this.name = name;
        this.age = age;
    }
    sayHi(): string {
        return "Hello";
    }

    getName(name: string): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }

}

let employee = new Employee('1','123',321);
console.log(employee);

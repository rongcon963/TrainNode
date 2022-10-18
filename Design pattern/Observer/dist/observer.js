"use strict";
class createSubject {
    constructor() {
        this.observers = [];
    }
    attach(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log("Subject already exists");
        }
        console.log("Subject: Attached an observer.");
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log("Subject already detached");
        }
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }
    notify() {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    someBusinessLogic() {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));
        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}
class ConcreteObserverA {
    update(subject) {
        if (subject instanceof createSubject && subject.state < 9) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}
const subject = new createSubject();
const observer1 = new ConcreteObserverA();
subject.attach(observer1);
subject.someBusinessLogic();
subject.detach(observer1);
subject.someBusinessLogic();

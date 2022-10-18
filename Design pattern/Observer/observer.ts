interface Subject {
    attach(observer: Observer) : void;
    detach(observer: Observer) : void;
    notify() : void;
}

interface Observer {
    update(subject: Subject): void;
}

class createSubject implements Subject {

    public state!: number;

    private observers: Observer[] = [];
    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if(isExist) {
            return console.log("Subject already exists");
        }
        console.log("Subject: Attached an observer.");
        this.observers.push(observer);
    }
    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if(observerIndex === -1) {
            return console.log("Subject already detached");
        }
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }
    public notify(): void {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public someBusinessLogic(): void {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
    
}

class ConcreteObserverA implements Observer {
    public update(subject: Subject): void {
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

interface Logger {
    log(message: string): void;
  }
  
  class Counter {

//   private logger: Logger;

//   constructor(logger: Logger) {
//     // ...that we will set at the initialisation.
//     this.logger = logger;
//   }

    //Auto assign
    constructor(
      private logger: Logger,
    ) {}
  
    public state: number = 0;
  
    public increase(): void {
      this.state += 1;
      this.logger.log(`State increased. Current state is ${this.state}.`);
    }
  
    public decrease(): void {
      this.state -= 1;
      this.logger.log(`State decreased. Current state is ${this.state}.`);
    }
  }
  
  const alertLogger: Logger = {
    log: (message: string): void => {
      console.log(1)
      alert(message);
    },
  };
  
  const counter = new Counter(alertLogger);
  
  console.log(counter)
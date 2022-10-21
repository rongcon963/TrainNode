export const addFuelToRocket = <T extends { new (...args: any[]): {} }>(target: T) => {
    return class extends target {
      fuel = 100
    }
}

export const createProduct = (value: boolean) => {
    console.log('vo day')
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const start = performance.now();
            const result = originalMethod.apply(this, args);
            const finish = performance.now();
            console.log(`Execution time: ${finish - start} milliseconds`);
            return result;
        };

        return descriptor;
    };
}

// export const printMemberName = (target: any, memberName: string) => {
//     console.log(memberName);
//   };
const allowlist = ["Jon", "Jane"];

export const allowlistOnly = (target: any, memberName: string) => {
  let currentValue: any = target[memberName];

  Object.defineProperty(target, memberName, {
    set: (newValue: any) => {
      if (!allowlist.includes(newValue)) {
        return;
      }
      currentValue = newValue;
    },
    get: () => currentValue
  });
};

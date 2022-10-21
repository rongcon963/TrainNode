"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowlistOnly = exports.createProduct = exports.addFuelToRocket = void 0;
const addFuelToRocket = (target) => {
    return class extends target {
        constructor() {
            super(...arguments);
            this.fuel = 100;
        }
    };
};
exports.addFuelToRocket = addFuelToRocket;
const createProduct = (value) => {
    console.log('vo day');
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const start = performance.now();
            const result = originalMethod.apply(this, args);
            const finish = performance.now();
            console.log(`Execution time: ${finish - start} milliseconds`);
            return result;
        };
        return descriptor;
    };
};
exports.createProduct = createProduct;
// export const printMemberName = (target: any, memberName: string) => {
//     console.log(memberName);
//   };
const allowlist = ["Jon", "Jane"];
const allowlistOnly = (target, memberName) => {
    let currentValue = target[memberName];
    Object.defineProperty(target, memberName, {
        set: (newValue) => {
            if (!allowlist.includes(newValue)) {
                return;
            }
            currentValue = newValue;
        },
        get: () => currentValue
    });
};
exports.allowlistOnly = allowlistOnly;

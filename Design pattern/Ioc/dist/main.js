"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pizza_class_1 = require("./pizza.class");
const inversify_config_1 = require("./inversify.config");
const pizza = inversify_config_1.pizzaContainer.resolve(pizza_class_1.Pizza);
//# sourceMappingURL=main.js.map
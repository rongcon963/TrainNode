"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pizzaContainer = void 0;
const inversify_1 = require("inversify");
const types_1 = require("./types/types");
const dough_entity_1 = require("./entities/dough.entity");
const flour_entity_1 = require("./entities/flour.entity");
const pizzaContainer = new inversify_1.Container();
exports.pizzaContainer = pizzaContainer;
// pizzaContainer.bind<>().to();
pizzaContainer.bind(types_1.TYPES.Dough).to(dough_entity_1.DoughEntity);
pizzaContainer.bind(types_1.TYPES.Flour).to(flour_entity_1.FlourEntity);
//# sourceMappingURL=inversify.config.js.map
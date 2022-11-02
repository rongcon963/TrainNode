import { Pizza } from "./pizza.class";
import { pizzaContainer } from "./inversify.config";

const pizza: Pizza = pizzaContainer.resolve<Pizza>(Pizza);
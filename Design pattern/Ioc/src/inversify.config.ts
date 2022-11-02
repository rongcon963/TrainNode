import { Container } from "inversify";
import { TYPES } from "./types/types";
import { Dough } from "./interfaces/dough.interface";
import { DoughEntity } from "./entities/dough.entity";
import { Flour } from "./interfaces/flour.interface";
import { FlourEntity } from "./entities/flour.entity";

const pizzaContainer = new Container();

// pizzaContainer.bind<>().to();
pizzaContainer.bind<Dough>(TYPES.Dough).to(DoughEntity);
pizzaContainer.bind<Flour>(TYPES.Flour).to(FlourEntity);

export { pizzaContainer }
import { injectable, inject } from "inversify";
import { Dough } from "../interfaces/dough.interface";
import { Flour } from "../interfaces/flour.interface";
import { TYPES } from "../types/types";

@injectable()
export class DoughEntity implements Dough {

    public flour: Flour;

    public constructor(
        @inject(TYPES.Flour) flour: Flour
    ) {
        console.log('Dough class initiated');
        this.flour = flour;
    }

    public getFlour(): Flour {
        return this.flour;
    }
}
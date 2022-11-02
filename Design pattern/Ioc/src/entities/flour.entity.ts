import { injectable } from "inversify";
import { Flour } from "../interfaces/flour.interface";

@injectable()
export class FlourEntity implements Flour {

    public constructor() {
        console.log('Flour class initiated');
    }

    public get(): string {
        return 'You need nothing but flour as your first ingredient!';
    }
}
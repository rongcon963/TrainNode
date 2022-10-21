"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CatController {
    constructor() {
        this.cats = [
            { name: 'Tom' },
            { name: 'Kitty' },
        ];
    }
    index(req, res) {
        res.json({ cats: this.cats });
    }
    add(req, res) {
        this.cats.push(req.body);
        res.status(204).json();
    }
    findByName(req, res) {
        const { name } = req.params;
        const foundCat = this.cats.find((c) => c.name === name);
        if (foundCat) {
            return res.json({ cat: foundCat });
        }
        return res.status(404).json({ message: 'Cat not found!' });
    }
}
exports.default = CatController;

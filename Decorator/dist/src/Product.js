"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const Decorator_1 = require("./Decorator");
// @sealed
let Product = class Product {
    constructor(t, name, password) {
        this.type = "report";
        this.name = "Jon";
        this.title = t;
        this.name = name;
        this.password = password;
    }
    create() {
        return "Launching in 3... 2... 1... 🚀";
    }
};
__decorate([
    Decorator_1.allowlistOnly,
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, Decorator_1.createProduct)(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Product.prototype, "create", null);
Product = __decorate([
    Decorator_1.addFuelToRocket,
    __metadata("design:paramtypes", [String, String, String])
], Product);
exports.Product = Product;

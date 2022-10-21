"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_decorator_1 = __importStar(require("../utils/controller.decorator"));
const handlers_decorator_1 = require("../utils/handlers.decorator");
const myLogger = function (req, res, next) {
    console.log('LOGGED');
    return next();
};
let CatController = class CatController {
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
    findByName(name, res) {
        //const { name } = req.params;
        console.log(`findByName`);
        const foundCat = this.cats.find((c) => c.name === name);
        if (foundCat) {
            return res.json({ cat: foundCat });
        }
        return res.status(404).json({ message: 'Cat not found!' });
    }
};
__decorate([
    (0, handlers_decorator_1.Get)('/')
    // @Param()
    //   @Query()
    //   @Body body: 
    // public index(req: Request, res: Response): void {
    //   res.json({ cats: this.cats });
    // }
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CatController.prototype, "index", null);
__decorate([
    (0, handlers_decorator_1.Post)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CatController.prototype, "add", null);
__decorate([
    (0, handlers_decorator_1.Get)('/:name'),
    __param(0, (0, handlers_decorator_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], CatController.prototype, "findByName", null);
CatController = __decorate([
    (0, controller_decorator_1.default)('/cats'),
    (0, controller_decorator_1.Guards)(myLogger)
], CatController);
exports.default = CatController;

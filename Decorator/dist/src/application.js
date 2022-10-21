"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const metadata_keys_1 = require("./utils/metadata.keys");
class Application {
    constructor() {
        this._instance = (0, express_1.default)();
        this._instance.use(express_1.default.json());
        this.registerRouters();
    }
    get instance() {
        return this._instance;
    }
    registerRouters() {
        this._instance.get('/', (req, res) => {
            res.json({ message: 'Hello World!' });
        });
        const info = [];
        controllers_1.controllers.forEach((controllerClass) => {
            const controllerInstance = new controllerClass();
            const basePath = Reflect.getMetadata(metadata_keys_1.MetadataKeys.BASE_PATH, controllerClass);
            const routers = Reflect.getMetadata(metadata_keys_1.MetadataKeys.ROUTERS, controllerClass);
            const middleware = Reflect.getMetadata(metadata_keys_1.MetadataKeys.Middleware, controllerClass);
            const param = Reflect.getMetadata(metadata_keys_1.MetadataKeys.Param, controllerClass);
            const exRouter = express_1.default.Router();
            routers.forEach(({ method, path, handlerName }) => {
                exRouter[method](path, controllerInstance[String(handlerName)].bind(controllerInstance));
                info.push({
                    api: `${method.toLocaleUpperCase()} ${basePath + path}`,
                    handler: `${controllerClass.name}.${String(handlerName)}`,
                });
            });
            this._instance.use(basePath, middleware, exRouter);
        });
        console.table(info);
    }
}
exports.default = new Application();

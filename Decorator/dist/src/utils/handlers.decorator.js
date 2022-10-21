"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Patch = exports.Put = exports.Post = exports.Get = exports.Param = exports.Methods = void 0;
const metadata_keys_1 = require("./metadata.keys");
require("reflect-metadata");
var Methods;
(function (Methods) {
    Methods["GET"] = "get";
    Methods["POST"] = "post";
    Methods["PUT"] = "put";
    Methods["PATCH"] = "patch";
    Methods["DELETE"] = "delete";
})(Methods = exports.Methods || (exports.Methods = {}));
const methodDecoratorFactory = (method) => {
    return (path) => {
        return (target, propertyKey) => {
            const controllerClass = target.constructor;
            const routers = Reflect.hasMetadata(metadata_keys_1.MetadataKeys.ROUTERS, controllerClass) ?
                Reflect.getMetadata(metadata_keys_1.MetadataKeys.ROUTERS, controllerClass) : [];
            routers.push({
                method,
                path,
                handlerName: propertyKey,
            });
            Reflect.defineMetadata(metadata_keys_1.MetadataKeys.ROUTERS, routers, controllerClass);
        };
    };
};
const registered = [];
const Param = (name) => {
    return (target, propertyKey, parameterIndex) => {
        const controllerClass = target.constructor;
        console.log(target, propertyKey, parameterIndex, name);
        registered.push(name);
        console.log(registered);
        Reflect.defineMetadata(metadata_keys_1.MetadataKeys.Param, '', controllerClass);
    };
};
exports.Param = Param;
exports.Get = methodDecoratorFactory(Methods.GET);
exports.Post = methodDecoratorFactory(Methods.POST);
exports.Put = methodDecoratorFactory(Methods.PUT);
exports.Patch = methodDecoratorFactory(Methods.PATCH);
exports.Delete = methodDecoratorFactory(Methods.DELETE);

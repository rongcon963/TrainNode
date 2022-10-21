"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guards = void 0;
const metadata_keys_1 = require("./metadata.keys");
const Controller = (basePath) => {
    return (target) => {
        Reflect.defineMetadata(metadata_keys_1.MetadataKeys.BASE_PATH, basePath, target);
    };
};
const Guards = (middleware) => {
    return (target) => {
        Reflect.defineMetadata(metadata_keys_1.MetadataKeys.Middleware, middleware, target);
    };
};
exports.Guards = Guards;
exports.default = Controller;

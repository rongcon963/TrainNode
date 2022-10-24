import { MetadataKeys } from './metadata.keys';
import 'reflect-metadata';

export enum Methods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
}

export interface IRouter {
  method: Methods;
  path: string;
  handlerName: string | symbol;
}

const methodDecoratorFactory = (method: Methods) => {
  return (path: string): MethodDecorator => {
    return (target: any, propertyKey,descriptor : any) => {
      const controllerClass = target.constructor;

      const originalMethod = descriptor.value;
      descriptor.value = function (...args: any[]) {
        const list: number[] = Reflect.getOwnMetadata(MetadataKeys.Param, target, propertyKey);
        if (list) {
          for (let parameterIndex of list) {
              if (
                  parameterIndex >= arguments.length ||
                  arguments[parameterIndex] === undefined
              ) {
                  throw new Error("Missing required argument.");
              }
          }
      }
        return originalMethod.apply(this, args);
      }
      console.log(descriptor)

      const routers: IRouter[] = Reflect.hasMetadata(MetadataKeys.ROUTERS, controllerClass) ?
        Reflect.getMetadata(MetadataKeys.ROUTERS, controllerClass) : [];

      routers.push({
        method,
        path,
        handlerName: propertyKey,
      });

      Reflect.defineMetadata(MetadataKeys.ROUTERS, routers, controllerClass);
      return descriptor;
    }
  }
}
const registered : any[] = [];

export const Param = (name: string): ParameterDecorator => {
  return (target: any, propertyKey: string | symbol, parameterIndex: number) => {
    console.log(target, propertyKey, parameterIndex, name);
    const list = Reflect.getOwnMetadata(MetadataKeys.Param, target, propertyKey);
    console.log(target);
    console.log(propertyKey);
    console.log(`index: ${parameterIndex}`);
    if (list) {
        list.push(parameterIndex);
    } else {
        Reflect.defineMetadata(MetadataKeys.Param, [parameterIndex], target, propertyKey);
    }
  };
}

export const Get = methodDecoratorFactory(Methods.GET);
export const Post = methodDecoratorFactory(Methods.POST);
export const Put = methodDecoratorFactory(Methods.PUT);
export const Patch = methodDecoratorFactory(Methods.PATCH);
export const Delete = methodDecoratorFactory(Methods.DELETE);
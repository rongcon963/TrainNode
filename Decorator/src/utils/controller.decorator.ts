import { MetadataKeys } from './metadata.keys';

const Controller = (basePath: string): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(MetadataKeys.BASE_PATH, basePath, target);
  };
}
export const Guards = (middleware: any): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(MetadataKeys.Middleware, middleware, target);
  };
}
export default Controller;

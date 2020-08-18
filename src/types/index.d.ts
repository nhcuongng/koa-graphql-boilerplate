import { DefaultContext } from 'koa';
export interface CustomContext extends DefaultContext {
    custom: string
}

declare global {
    namespace NodeJS {
      interface Global {
        app: any
      }
    }
}
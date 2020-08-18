import KoaRouter from 'koa-router';
import { DefaultState } from 'koa';
import { CustomContext } from '../types';

export const AboutRouter = new KoaRouter<DefaultState, CustomContext>({
  prefix: '/about',
});

AboutRouter.get('/', async (ctx) => {
  ctx.body = ctx.custom;
});
import Koa, { DefaultState } from 'koa';
import Router from 'koa-router';
import { CustomContext } from './types';
import { AboutRouter } from './routes';

const app = new Koa<DefaultState, CustomContext>();
const router = new Router();

app.context.custom = '666';
app.use(async (ctx, next) => {
    console.log(ctx.custom);
    await next();
});

router.get('/', async (ctx) => {
    ctx.body = "Hello, Cuong";
})

app.use(AboutRouter.routes()).use(AboutRouter.allowedMethods());
app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`The server is running at port ${PORT}`);
});
import Koa from 'koa';
import Router from 'koa-router';
import koaBody from 'koa-bodyparser';
import { ApolloServer } from 'apollo-server-koa';

import { rootSchema } from './schema';
import { resolvers } from './resolvers';

/** server graphql */
const server = new ApolloServer({ 
    typeDefs: rootSchema, // dinh nghia schema (schema definition)
    resolvers, // cac resolvers domng vai tro xu ly query
    playground: true, // playgroud de thuc hien query (dev only)
})
const app = new Koa();
const router = new Router();

// koaBody is needed just for POST.
app.use(koaBody());

app.use(server.getMiddleware());

router.get('/', async (ctx) => {
    ctx.body = "Hello, Cuong";
})

app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    // click vao link nay de chay playground
    console.log(`The server is running at http://localhost:${PORT}${server.graphqlPath}`);
});
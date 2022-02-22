const Koa = require("koa");
const app = new Koa();
const { router } = require("./router");
const bodyParser = require("koa-bodyparser");

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);

console.log("Api funcionando na porta 3000");

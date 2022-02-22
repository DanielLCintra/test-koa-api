const Koa = require("koa");
const app = new Koa();
const PORT = 3000;
const { router } = require("./router");
const bodyParser = require("koa-bodyparser");

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(PORT);

console.log("Api funcionando na porta " + PORT);

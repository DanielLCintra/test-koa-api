const Router = require("@koa/router");

const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = "A api está funcionando";
});

router.get("/minha-rota", (ctx, next) => {
  ctx.body = "minha rota";
});

router.get("/users", (ctx, next) => {
  ctx.body = [
    { id: 1, nome: "Daniel", telefone: "(11)93390-6518" },
    { id: 2, nome: "Clovis", telefone: "(11)090999-6518" },
  ];
});

router.post("/users", (ctx, next) => {
  //     user.add({});
  console.log(ctx.request.body);
  ctx.body = "Usuário criado com sucesso!";

  ctx.status = 201;
});

router.put("/users/:id", (ctx, next) => {
  //     const user = users.find(id);
  //     users.update(data);
  console.log(ctx.request.body);
  ctx.status = 202;
  ctx.body = "Usuário atualizado com sucesso!";
});

router.del("/users/:id", (ctx, next) => {
  ctx.status = 200;
  ctx.body = "Usuário excluído com sucesso!";
});

router.get("/users/:id", (ctx, next) => {
  const users = [
    { id: "1", nome: "Daniel", telefone: "(11)93390-6518" },
    { id: "2", nome: "Clovis", telefone: "(11)090999-6518" },
  ];

  const user = users.find((user) => user.id === ctx.request.params.id);
  const message = "Usuário localizado";

  ctx.status = 200;
  ctx.body = { message, user };
});

module.exports = { router };

const app = require("express")();
const consign = require("consign");

consign()
  .then("./config/middlewares.js")
  .into(app);

app.listen(4000, () => {
  console.log("aplicativo escutando na porta 4000");
});

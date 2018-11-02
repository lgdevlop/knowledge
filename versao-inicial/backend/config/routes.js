modules.exports = app => {
  app.routes("/users").post(app.api.user.save);
};

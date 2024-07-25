const app = require('./src/index');

afterAll((done) => {
  if (app.settings.server) {
    app.settings.server.close();
  }
  done();
});

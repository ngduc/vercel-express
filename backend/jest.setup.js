const { server } = require('./src/index');

afterAll((done) => {
  server.close();
  done();
});

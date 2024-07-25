import request from 'supertest';
const app = require('../src/index');

it('should return an item by id', async () => {
  const rs = await request(app).get('/api/items/123').send();
  expect(rs.statusCode).toBe(200);
});

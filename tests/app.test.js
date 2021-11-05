/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../src/app.js';

describe("GET'/", () => {
  test('Return 205 for server ok', async () => {
    const result = await supertest(app).get('/');

    expect(result.status).toEqual(200);
  });
});

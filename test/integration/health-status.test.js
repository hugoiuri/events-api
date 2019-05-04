process.env.NODE_ENV = 'test';

const supertest = require('supertest');
const { assert } = require('chai');
const server = require('../../src/server');
const pkg = require('../../package.json');

let app;

describe('Health status integration tests', () => {
  before(async () => {
    app = await server.start();
  });

  after(async () => {
    await server.stop();
  });

  it('Should return 200 when call health-status', (done) => {
    supertest(app).get('/health-status')
      .set('Content-Type', 'application/json')
      .expect(200)
      .end((err) => {
        assert.isNull(err);
        done();
      });
  });

  it('Should return the correct version in check-status', (done) => {
    supertest(app).get('/health-status')
      .set('Content-Type', 'application/json')
      .expect(200)
      .end((err, result) => {
        assert.isNull(err);
        assert.equal(result.body.service, pkg.name);
        assert.equal(result.body.version, pkg.version);
        assert.equal(result.body.container, process.env.HOSTNAME);
        done();
      });
  });
});

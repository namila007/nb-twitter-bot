let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('./app');
let should = chai.should();

chai.use(chaiHttp);

/*
  * Test the /ping route
  */
  describe('/ping', () => {
      it('it should return 200', (done) => {
        chai.request(app)
            .get('/ping')
            .end((err, res) => {
                res.should.have.status(200);
              done()
            })
      })
  })

  describe('/count', () => {
    it('it should return object', (done) => {
      chai.request(app)
          .get('/ping')
          .end((err, res) => {
              res.should.have.status(200)
              res.should.be.a('object')
            done()
          })
    })
})

    


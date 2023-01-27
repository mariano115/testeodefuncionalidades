const request = require("supertest")("http://localhost:9090");
const expect = require("chai").expect;

const userMaster = {
  email: "prueba@gmail.com",
  password: "123456",
};

describe("test api productos", () => {
  describe("GET Productos", async () => {
    it.skip("get productos debe devolver un texto avisando de que se tiene que loguear", async () => {
      let response = await request.get("/productos");
      expect(response.status).to.eql(200);
      expect(response.text).to.equal("Deberas loguearte primero para acceder");
    });
    it("get productos debe devolver la lista de usuarios", async () => {
      let loginResponse = await request.get("/login").send(userMaster)
      console.log(loginResponse.header['set-cookie']);
      /* let response = await request.get("/productos");
      console.log(response.body); */
      /*console.log(response.text); */
      /* expect(response.status).to.eql(200);
        expect(response.text).to.equal("Deberas loguearte primero para acceder"); */
    });
  });
});

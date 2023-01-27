const request = require('supertest')('http://localhost:9090')
const expect = require('chai').expect


describe('test api productos', () => {
    describe('GET Productos', async () => {
        let response = await request.get('/productos')
        console.log(response)
    })
})
import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Example } from '.'

const app = () => express(apiRoot, routes)

let example

beforeEach(async () => {
  example = await Example.create({})
})

test('POST /examples 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ title: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.title).toEqual('test')
})

test('GET /examples 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /examples/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${example.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(example.id)
})

test('GET /examples/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /examples/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${example.id}`)
    .send({ title: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(example.id)
  expect(body.title).toEqual('test')
})

test('PUT /examples/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ title: 'test' })
  expect(status).toBe(404)
})

test('DELETE /examples/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${example.id}`)
  expect(status).toBe(204)
})

test('DELETE /examples/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

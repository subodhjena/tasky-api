import { success, notFound } from '../../services/response/'
import { Example } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Example.create(body)
    .then((example) => example.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Example.count(query)
    .then(count => Example.find(query, select, cursor)
      .then((examples) => ({
        count,
        rows: examples.map((example) => example.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Example.findById(params.id)
    .then(notFound(res))
    .then((example) => example ? example.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Example.findById(params.id)
    .then(notFound(res))
    .then((example) => example ? Object.assign(example, body).save() : null)
    .then((example) => example ? example.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Example.findById(params.id)
    .then(notFound(res))
    .then((example) => example ? example.remove() : null)
    .then(success(res, 204))
    .catch(next)

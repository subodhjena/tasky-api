import { Example } from '.'

let example

beforeEach(async () => {
  example = await Example.create({ title: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = example.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(example.id)
    expect(view.title).toBe(example.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = example.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(example.id)
    expect(view.title).toBe(example.title)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})

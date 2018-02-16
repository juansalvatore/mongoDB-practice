const assert = require('assert')
const User = require('../src/user') // entire collection of user data

describe('Creating records', () => {
  it('saves a user', done => {
    const joe = new User({ name: 'Joe' })

    joe.save().then(() => {
      // has joe been saved successfully?
      assert(!joe.isNew)
      done()
    })
  })
})

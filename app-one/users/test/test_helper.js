const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/users_test')
mongoose.connection.once('open', () => {}).on('error', error => {
  console.warn('Warning', error)
})

beforeEach(done => {
  mongoose.connection.collections.users.drop(() => {
    // ready to run the next test
    done()
  })
})

const {
  getAll, getOne,
  post, update ,del
} = require('./handlers');

module.exports = (app) => {
  app.get    ('/widgets',     getAll) // return all widegts
  app.get    ('/widgets/:id', getOne) // return the widget
  app.post   ('/widgets',     post)   // create a new widget
  app.patch  ('/widgets/:id', update)    // update a widget
  app.delete ('/widgets/:id', del)    // delete a widget
}

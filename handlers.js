const store = require('./store');

module.exports = {
  getAll: (req, res) => {},
  getOne: (req, res) => {
    const widget = store.findById(req.params.id);
    if (!widget) {
      return res.status(404).send('No such widget');
    }

    res.send(widget);
  },
  post: (req, res) => {
    console.log('post', req.body);
    const widget = store.add(req.body);
    res.send(widget);
  },

  update: (req, res) => {
    const widget = store.update(req.params.id, req.body);
    if (!widget) {
      return res.status(404).send('No such widget');
    }

    res.send(widget);
  },
  del: (req, res) => {
    store.delete(req.params.id);
    res.status(204).send();
  },
};

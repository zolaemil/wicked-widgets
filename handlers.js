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
    const widget = store.add(req.body);
    res.send(widget);
  },

  update: (req, res) => {
    const widget = store.update(req.params.id, req.params.body);
    if (!widget) {
      return res.status(404).send('No such widget');
    }

    res.send(widget);
  },
  del: (req, res) => {},
};

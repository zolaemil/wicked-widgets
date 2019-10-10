const store = require('./store');

module.exports = {
  getAll: (req, res) => {},
  getOne: (req, res) => {
    const widget = store.findById(req.params.id);

    res.send(widget);
  },
  post: (req, res) => {
    const widget = store.add(req.body);
    res.send(widget);
  },
  put: (req, res) => {},
  del: (req, res) => {},
};

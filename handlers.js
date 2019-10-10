const store = require('./store');

module.exports = {
  getAll: (req, res) => {},
  getOne: (req, res) => {
    const widget = store.findById(req.params.id);
    console.log(store);
    console.log(store.findById);
    console.log(widget);
    res.send(widget);
  },
  post: (req, res) => {
    // create for real!
    res.send(req.body);
  },
  put: (req, res) => {},
  del: (req, res) => {},
};

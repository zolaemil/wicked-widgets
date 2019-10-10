const fs = require('fs');
// store.json
const store = JSON.parse(fs.readFileSync('./store.json'));

module.exports = {
  findById(id) {
    return store[id];
  },
  add(obj) {
    // generate the id!!
    store[obj.id] = obj;
    fs.writeFileSync('./store.json', JSON.stringify(store, null, 2));
    return
  }
}
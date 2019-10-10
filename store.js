const fs = require('fs');
const uuid = require('uuid');

const store = JSON.parse(fs.readFileSync('./store.json'));

module.exports = {
  findById(id) {
    return store[id];
  },
  add(obj) {
    const id = uuid.v1();
    store[id] = { id, ...obj };

    fs.writeFileSync('./store.json', JSON.stringify(store, null, 2));

    return store[id];
  },
  update(id, patch) {
    const obj = store[id];

    if (!obj) retrun;

    const updatedObj = { ...obj, ...patch };
    store[id] = updatedObj;

    return updatedObj;
  }
}
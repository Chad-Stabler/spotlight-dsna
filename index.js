class Stack {
  #list = [];

  constructor(intialList) {
    if (intialList) this.#list = intialList;
  }

  push(item) {
    const list = this.#list;
    list.push(item);
    return new Stack(list);
  }
}

class Queue {}

module.exports = { Stack, Queue }

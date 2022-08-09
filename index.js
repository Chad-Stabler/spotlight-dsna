class Stack {
    #list = [];

    constructor(initialList) {
        if (initialList) this.#list = initialList;
    }

    push(item) {
        this.#list.push(item);
    }

    peek() {
        return this.#list[this.#list.length - 1];
    }

    pop() {
        this.#list.pop();
    }
}

class Queue {
    #list = [];

    constructor(initialList) {
        if (initialList) this.#list = initialList;
    }

    enqueue(item) {
        this.#list.push(item);
    }

    peek() {
        return this.#list[this.#list.length - 1];
    }
}

module.exports = { Stack, Queue };

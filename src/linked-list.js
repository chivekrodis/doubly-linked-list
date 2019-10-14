const Node = require('./node');

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  append(data) {
    let node = new Node(data);
    if (this._head === null) {
      this._head = node;
      this._tail = node;
    } else {
      node.prev = this._tail;
      this._tail.next = node;
      this._tail = node;
    }
    this.length++;
    return this;
  }

  head() {
    if (this.length !== 0) {
      return this._head.data
    } else {
      return this._head
    }
  }

  tail() {
    if (this.length !== 0) {
      return this._tail.data
    } else {
      return this._tail
    }
  }

  at(index) {
    let current = this._head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current.data;
  }

  insertAt(index, data) {
    let counter = 0;
    let current = this._head;
    let node = new Node(data);
    if (this._head === null && index === 0) {
      this._head = node;
      this._tail = node;
      this.length++;
    } else if (this._head !== null && index > 0) {
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      node.prev = current.prev;
      node.next = current;
      current.prev.next = node;
    }
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this._head = null;
    this._tail = null;
    this.length = 0;
    return this;
  }

  deleteAt(index) {
    let current = this._head;
    let counter = 0;
    if (this._head == this._tail) {
      this._head = null;
      this._tail = null;
    } else {
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      current.next.prev = current.prev;
      current.prev.next = current.next;

    }
    this.length--;
    return this;
  }

  reverse() {
    let current = this._head;
    let prev = null;
    while (current) {
      let next = current.next
      current.next = prev
      current.prev = next
      prev = current
      current = next
    }
    this._tail = this._head;
    this._head = prev;
    return this;
  }

  indexOf(data) {
    let current = this._head;
    for (let i = 0; i < this.length; i++) {
      if (current.data === data) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
}

module.exports = LinkedList;

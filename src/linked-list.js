const Node = require('./node');

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  append(data) {
   let node = new Node(data);
    // for empty list
    if (this._head === null) {
      this._head = node;
      this._tail = node;
    }
    // for non-empty list
    else {
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
    
  }

  insertAt(index, data) {
    
  }

  isEmpty() {
   
  }

  clear(item) {
    
  }

  deleteAt(index) {
    
  }

  reverse() {
   
  }

  indexOf(data) {
  }
}

module.exports = LinkedList;

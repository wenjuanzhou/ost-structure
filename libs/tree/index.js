const Node = require('./node');

class Tree {
  constructor(id, payload) {
    this._root = new Node(id, payload);
  }

  traverseDF(callback) {
    (function recurse(currentNode) {
      callback(currentNode);
      for (let i of currentNode.children.keys()) {
        recurse(currentNode.children[i]);
      }
    })(this._root);
  }

  contains(callback, traverse) {
    this[traverse] ? this[traverse](callback) : console.error('A non-existent function');
  }

  add({id, parentId, traverse, payLoad}) {
    const childNode = new Node(id, payLoad);
    let _parentNode,
      callback = function (node) {
        if (node.id === parentId) {
          _parentNode = node;
        }
      };
    this.contains(callback, traverse);
    if (_parentNode) {
      _parentNode.children.push(childNode);
      childNode.parent = _parentNode;
    } else {
      console.error('Cannot add node to a non-existent parent');
    }
  }
}

module.exports = Tree;

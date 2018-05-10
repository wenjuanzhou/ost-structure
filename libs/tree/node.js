class Node {
  constructor(id, payLoad) {
    this.id = id;
    this.parent = null;
    this.payLoad = payLoad;
    this.children = [];
  }
}

module.exports = Node;

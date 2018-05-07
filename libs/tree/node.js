class Node {
  constructor(id) {
    this.id = id;
    this.parent = null;
    this.children = [];
  }
}
module.exports = Node;
function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('ul.ranked-list');
  for (let i = 0; i < rankedList.length; i++) {
  rankedList[i].innerHTML = (i + parseInt(n)).toString()
}
};


function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}


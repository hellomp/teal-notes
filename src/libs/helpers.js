const buildTree = (arr) => {
  // Step 1: Create a mapping of id to the corresponding object
  const idToNodeMap = {}
  arr.forEach((node) => {
    idToNodeMap[node.id] = node
    node.children = [] // Initialize an empty children array for each node
  })

  // Step 2: Build the tree by connecting child nodes to their parent nodes
  const rootNodes = []
  arr.forEach((node) => {
    if (node.parent) {
      // If the node has a parent, add it as a child of its parent node
      const parentNode = idToNodeMap[node.parent]
      if (parentNode) {
        parentNode.children.push(node)
      }
    } else {
      // If the node has no parent, it is a root node
      rootNodes.push(node)
    }
  })

  return rootNodes
}

const combineArrays = (folders, files) => {
  return [
    ...files.map((item) => ({ ...item, type: 'file' })),
    ...folders.map((item) => ({ ...item, type: 'folder' }))
  ]
}

export { buildTree, combineArrays }

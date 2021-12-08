const treeWalker = document.createTreeWalker(document.body);
while (treeWalker.nextNode()) {
	const node = treeWalker.currentNode;
	if (node.nodeType === Node.TEXT_NODE) {
		node.nodeValue = node.nodeValue.replaceAll("A", "🎄");
		node.nodeValue = node.nodeValue.replaceAll("O", "🍪");
		node.nodeValue = node.nodeValue.replaceAll("I", "🕯️");
	}
}

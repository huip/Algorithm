/**
 * @file BST js 实现 (数据结构与算法javascript描述一书学习)
 * @author huip(penghui1012@gmail.com)
 *
 */

// 定义节点数据结构
function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

// 输出节点信息
function show() {
	return this.data;
}

function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.preOrder = preOrder;
	this.postOrder = postOrder;
}

// bst 数据插入
function insert(data) {
	var n = new Node(data, null, null);
	if (this.root === null) {
		this.root = n;
	} else {
		var current = this.root;
		var parent;
		console.log(data, current.data);
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current === null) {
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if (current === null) {
					parent.right = n;
					break;
				}
			}
		}
	}
}

// 中序遍历
function inOrder(node) {
	if (node !== null) {
		inOrder(node.left);
		console.log(node.show() + ' ');
		inOrder(node.right);
	}
}

// 先序遍历
function preOrder(node) {
	if (node !== null) {
		console.log(node.show() + '');
		preOrder(node.left);
		preOrder(node.right);
	}
}

// 后序遍历
function postOrder(node) {
	if (node !== null) {
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show() + '');
	}
}


// 实例化BST
var nums = new BST();

// 插入实例数据
nums.insert(23);
nums.insert(30);
nums.insert(33);
nums.insert(11);
nums.insert(54);
nums.insert(70);
nums.insert(25);
nums.insert(90);

console.log('Inorder traversal: ');
inOrder(nums.root);
console.log('Preorder traversal: ');
preOrder(nums.root);
console.log('PostOrder traversal: ');
postOrder(nums.root);
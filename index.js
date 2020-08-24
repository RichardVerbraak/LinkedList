// A Linked List is generally not used in JavaScript since Array methods do the trick as well albeit slower using things like .unshift
// Pushing onto an array is actually faster than using a Linked List
// Source: https://itnext.io/practical-data-structures-for-frontend-applications-when-to-use-linked-lists-8ef9826a745

///////////// Example of a Linked List in JS
// 1. Head starts at null
// 2. insertAtHead takes a value that is to be inserted at the head, which is 10
// 3. Sets the Node's next value to the current head, which is 0 (now 10 is inserted at head then 0)
// 4. Increment the length to keep track off if need be
//
class LinkedList {
	constructor() {
		this.head = null
		this.length = 0
	}

	insertAtHead(data) {
		const newNode = new LinkedListNode(data, this.head)
		this.head = newNode
		this.length++
	}
}

// The Node itself, which has a value and then a reference to the next value coming after that
class LinkedListNode {
	constructor(value, next) {
		this.value = value
		this.next = next
	}
}

// Initialize the LinkedList
const ll = new LinkedList()

// Add two new nodes with the method
ll.insertAtHead(10)
ll.insertAtHead(20)

console.log(ll)

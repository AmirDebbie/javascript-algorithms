// import LinkedList from '../linked-list/LinkedList';

// export default class Stack {
//   constructor() {
//     // We're going to implement Stack based on LinkedList since these
//     // structures are quite similar. Compare push/pop operations of the Stack
//     // with prepend/deleteHead operations of LinkedList.
//     this.linkedList = new LinkedList();
//   }

//   /**
//    * @return {boolean}
//    */
//   isEmpty() {
//     // The stack is empty if its linked list doesn't have a head.
//     return !this.linkedList.head;
//   }

//   /**
//    * @return {*}
//    */
//   peek() {
//     if (this.isEmpty()) {
//       // If the linked list is empty then there is nothing to peek from.
//       return null;
//     }

//     // Just read the value from the start of linked list without deleting it.
//     return this.linkedList.head.value;
//   }

//   /**
//    * @param {*} value
//    */
//   push(value) {
//     // Pushing means to lay the value on top of the stack. Therefore let's just add
//     // the new value at the start of the linked list.
//     this.linkedList.prepend(value);
//   }

//   /**
//    * @return {*}
//    */
//   pop() {
//     // Let's try to delete the first node (the head) from the linked list.
//     // If there is no head (the linked list is empty) just return null.
//     const removedHead = this.linkedList.deleteHead();
//     return removedHead ? removedHead.value : null;
//   }

//   /**
//    * @return {*[]}
//    */
//   toArray() {
//     return this.linkedList
//       .toArray()
//       .map((linkedListNode) => linkedListNode.value);
//   }

//   /**
//    * @param {function} [callback]
//    * @return {string}
//    */
//   toString(callback) {
//     return this.linkedList.toString(callback);
//   }
// }

export default class Stack {
  constructor() {
    this.data = []
  }

  push(item) {
    if(!this.data.length) {
      this.data[0] = item;
      return this.data[0];
    }
    this.data[this.data.length] = item;
    return this.data[this.data.length];
  }

  toString() {
    let s = '';
    for (let i = this.data.length - 1; i <= 0; i--) {
      if (i !== this.data.length - 1) {
        s += ',';
      }
      s += this.data(i).toString();
    }
    return s;
  }
}

// import MinHeap from '../heap/MinHeap';
// import Comparator from '../../utils/comparator/Comparator';

// // It is the same as min heap except that when comparing two elements
// // we take into account its priority instead of the element's value.
// export default class PriorityQueue extends MinHeap {
//   constructor() {
//     // Call MinHip constructor first.
//     super();

//     // Setup priorities map.
//     this.priorities = new Map();

//     // Use custom comparator for heap elements that will take element priority
//     // instead of element value into account.
//     this.compare = new Comparator(this.comparePriority.bind(this));
//   }

//   /**
//    * Add item to the priority queue.
//    * @param {*} item - item we're going to add to the queue.
//    * @param {number} [priority] - items priority.
//    * @return {PriorityQueue}
//    */
//   add(item, priority = 0) {
//     this.priorities.set(item, priority);
//     super.add(item);
//     return this;
//   }

//   /**
//    * Remove item from priority queue.
//    * @param {*} item - item we're going to remove.
//    * @param {Comparator} [customFindingComparator] - custom function for finding the item to remove
//    * @return {PriorityQueue}
//    */
//   remove(item, customFindingComparator) {
//     super.remove(item, customFindingComparator);
//     this.priorities.delete(item);
//     return this;
//   }

//   /**
//    * Change priority of the item in a queue.
//    * @param {*} item - item we're going to re-prioritize.
//    * @param {number} priority - new item's priority.
//    * @return {PriorityQueue}
//    */
//   changePriority(item, priority) {
//     this.remove(item, new Comparator(this.compareValue));
//     this.add(item, priority);
//     return this;
//   }

//   /**
//    * Find item by ite value.
//    * @param {*} item
//    * @return {Number[]}
//    */
//   findByValue(item) {
//     return this.find(item, new Comparator(this.compareValue));
//   }

//   /**
//    * Check if item already exists in a queue.
//    * @param {*} item
//    * @return {boolean}
//    */
//   hasValue(item) {
//     return this.findByValue(item).length > 0;
//   }

//   /**
//    * Compares priorities of two items.
//    * @param {*} a
//    * @param {*} b
//    * @return {number}
//    */
//   comparePriority(a, b) {
//     if (this.priorities.get(a) === this.priorities.get(b)) {
//       return 0;
//     }
//     return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1;
//   }

//   /**
//    * Compares values of two items.
//    * @param {*} a
//    * @param {*} b
//    * @return {number}
//    */
//   compareValue(a, b) {
//     if (a === b) {
//       return 0;
//     }
//     return a < b ? -1 : 1;
//   }
// }



export default class PriorityQueue {
  constructor() {
    this.data = [];
  }

  add(item, priority) {
    if (this.isEmpty()) {
      this.data.push({ item, priority });
    } else {
      let added = false;
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].priority > priority) {
          this.data.splice(i, 0, { item, priority });
          added = true;
          break;
        }
      }
      if (!added) {
        this.data.push({ item, priority });
      }
    }
  }

  peek() {
    return this.isEmpty() ? null : this.data[0].item;
  }

  poll() {
    return this.isEmpty() ? null : this.data.shift().item;
  }

  changePriority(item, priority) {
    if (!this.isEmpty()) {
      let changedItem;
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].item === item) {
          changedItem = this.data[i];
          changedItem.priority = priority;
          this.data.splice(i, 1);
          break;
        }
      }
      this.add(changedItem.item, changedItem.priority);
    }
  }

  hasValue(item) {
    if (!this.isEmpty()) {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].item === item) {
          return true
        }
      }
      return false;
    }
    return false;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  toString(callback = (x) => x) {
    return this.data.map(callback).reverse().toString();
  }
}


// without array functions
export default class PriorityQueue {
  constructor() {
    this.data = [];
  }

  add(item, priority) {
    if (this.isEmpty()) {
      this.data[0] = { item, priority };
    } else {
      let added = false;
      let newData = [];
      let j = 0;
      for (let i = 0; i < this.data.length; i++) {
        
        if (this.data[i].priority > priority && !added) {
          newData[j] = {item, priority};
          j++
          added = true;
        }
        newData[j] = (this.data[i])
        j++;
      }
      if (!added) {
        newData[newData.length] = { item, priority };
      }
      this.data = newData;
    }
  }

  peek() {
    return this.isEmpty() ? null : this.data[0].item;
  }

  poll() {
    if (this.isEmpty()) {
      return null;
    }
    let newData = [];
    const res = this.data[0].item;
    for (let i = 1; i < this.data.length; i++) {
      newData[i - 1] = this.data[i]; 
    }
    this.data = newData;
    return res;
  }

  changePriority(item, priority) {
    if (!this.isEmpty()) {
      let changedItem;
      let newData = [];
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].item === item) {
          changedItem = this.data[i];
          changedItem.priority = priority;
        } else if (changedItem) {
          newData[i - 1] = this.data[i];
        } else {
          newData[i] = this.data[i];
        }
      }
      this.data = newData;
      this.add(changedItem.item, changedItem.priority);
    }
  }

  hasValue(item) {
    if (!this.isEmpty()) {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].item === item) {
          return true
        }
      }
      return false;
    }
    return false;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  toString(callback = (x) => x) {
    return this.data.map(callback).reverse().toString();
  }
}

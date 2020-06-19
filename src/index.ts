console.log("Initial setup");

import { LinkedList } from ".//ll"
import { Stack } from "./stack"
import { Queue, priorityQueue } from "./queue"

const mylist = new LinkedList<number>()
mylist.append(1)
mylist.append(2)
mylist.append(3)

console.log(mylist.length)

const mylist1 = new LinkedList<number>().fromArray([1, 12, 10, 4, 5, 8])
console.log(mylist1.lhead)

console.log(mylist1.ltail.toString())

const temp = new LinkedList<number>()

console.log("test map")
console.log(mylist1.map(x => x + 10 + " hello ").toString())

console.log("test filter")
console.log(mylist1.filter(x => x % 2 === 0).toString())

console.log("test reduce")
console.log(mylist1.reduce((_, acc) => acc + _).toString())

console.log("test ++")
console.log(mylist1["++"](temp.fromArray([1, 2, 3])).toString())

console.log("test foreach mutable")
const testlist = new LinkedList<number>().fromArray([1, 2, 3, 4])
testlist.foreach(x => x * 5)
console.log(testlist)

console.log("test foreach immutable")
const testlistm = new LinkedList<number>().fromArray([1, 2, 3, 4])
testlistm.mForeach(x => x * 5)
console.log(testlistm.toString())

console.log("test toarray")
const a = testlistm.toArray()
console.log(a)

console.log("test remove value")
console.log(testlistm.remove(10).toString())

console.log("test remove  mutable")
console.log(testlistm.mRemove(10))

console.log("test contains")
console.log(testlistm.contains(20))
console.log(testlistm.contains(0))

const flattest = new LinkedList<string>().fromArray(["apple", "banana", "orange"])
console.log(flattest.map(x => x.toUpperCase()).toString())
const mylisttemp = flattest.map(x => new LinkedList<string>().fromArray(x.split("")).map(y => y.toUpperCase()))
console.log(mylisttemp.toString())
console.log(mylisttemp.flatten().toString())

const testing = new LinkedList<string>().fromArray(["superman", "batman", "antman"])
console.log(testing.ltop.toString())
console.log(testing.lbottom)
console.log("test flatmap")
console.log(testing.flatmap(x => new LinkedList<string>().fromArray(x.split("")).map(y => y.toUpperCase())).toString())

const objtest = new LinkedList<object>();

objtest.append({
    name: "samir",
    num: 1
})
objtest.append({
    name: "samir",
    num: 2
})
console.log(objtest)

const s = new Stack<number>()
const ss = new Stack<number>()

console.log(s.push(5).toString)
console.log(s.push(10).toString)

console.log(ss.push(15).toString)
console.log(ss.push(16).toString)

console.log(ss.pile(s).toString)
console.log(ss.unPile(1).toString)
console.log(ss.unPile(1).toString)
console.log(ss.size)
console.log(ss.map(x => x + 12))

console.log(new LinkedList<number>().fromArray([1, 2, 3, 4, 5, 10, 89]).reverse())

const y = new Stack<number>().fromLinkedList(new LinkedList<number>().fromArray([1, 2, 3, 4]))
console.log(y)
console.log(y.reverse())

console.log(new Stack<number>().fromArray([1, 2, 3]))

// test queue
// console.log("test queue")
// const queue = new priorityQueue<number>(3)
// queue.FIFO = false
// queue.pEnqueue(1)
// queue.pEnqueue(2)
// queue.pEnqueue(3)
// console.log(queue)
// queue.dequeue()
// queue.dequeue()
// console.log(queue)
// console.log(queue.front)

const testIndex = new LinkedList<any>().fromArray([1,2,"samir",4])
console.log(testIndex.at(2))
 
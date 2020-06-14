console.log("Initial setup");

import { LinkedList } from ".//ll"

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
console.log(mylist1.reduce((a, acc) => acc + a).toString())

console.log("test ++")
console.log(mylist1["++"](temp.fromArray([1, 2, 3])).toString())

console.log("test foreach immutable")
let testlist = new LinkedList<number>().fromArray([1,2,3,4])
let t = testlist.foreach(x => x * 5).toString()
console.log(t)

console.log("test foreach mutable")
let testlistm = new LinkedList<number>().fromArray([1,2,3,4])
testlistm.mforeach(x => x * 5)
console.log(testlistm.toString())

console.log("test toarray")

let a = testlistm.toArray()
console.log(a)

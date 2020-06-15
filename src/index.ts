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
console.log(mylist1.reduce((_, acc) => acc + _).toString())

console.log("test ++")
console.log(mylist1["++"](temp.fromArray([1, 2, 3])).toString())

console.log("test foreach immutable")
const testlist = new LinkedList<number>().fromArray([1, 2, 3, 4])
const t = testlist.foreach(x => x * 5).toString()
console.log(t)

console.log("test foreach mutable")
const testlistm = new LinkedList<number>().fromArray([1, 2, 3, 4])
testlistm.mforeach(x => x * 5)
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

let objtest = new LinkedList<Array<any>>();

objtest.append([
    "samir",
     1
])
objtest.append([
    "samir",
     2
])

console.log(objtest.toString())
console.log(typeof [
    "samir",
     1
])
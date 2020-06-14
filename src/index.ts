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


console.log(temp.append(mylist1.lhead)["+"](mylist1.ltail).toString())
console.log(mylist1.map(x => x + 10).toString())





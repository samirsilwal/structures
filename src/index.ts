console.log("Initial setup");

import {LinkedList} from ".//ll"

const mylist = new LinkedList<number>()
mylist.append(1)
mylist.append(2)
mylist.append(3)

console.log(mylist.length)

const mylist1 = new LinkedList<number>().fromArray([4,9,10,1])


console.log(mylist1.toString())
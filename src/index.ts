import { LinkedList } from ".//ll"
export { Stack } from "./stack"
export { Queue, priorityQueue } from "./queue"

const a = new LinkedList<number>(3,5,71, 1)
console.log(a.exists(i => i % 2 == 0))

const b = LinkedList.generator(10, i => i * 7 ).ltail
console.log(b.splitAt(3).map(item => item.reduce((x, acc) => x + acc)))
const t = new LinkedList<any>("samir", 1)
console.log(t.map(i => i * 2))
const c = new LinkedList<number>(4,2,3,4,5)
console.log(c.scanLeft(0)((a, b) => a + b))
console.log(c.scanRight(0)((a, b) => a + b))

console.log(c.dropWhile(i => i % 2 == 0))
const d = new LinkedList<number>(8,4,2,3,4,5)
console.log(d.dropUntil(i => i % 2 != 0))

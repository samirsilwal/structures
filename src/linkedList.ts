/**
 *  Module of LinkedList structure defination.
 */

export type STFunction<T, R> = (t: T) => R

export interface SNode<T> {
    value: T,
    next?: SNode<T>
}

export class LinkedList<T> {
    // private EMPTY_NODE: SNode<T> = { value: null, next: null }
    private head: SNode<T> = null
    private tail: SNode<T> = null

    private summonNode = (value: T): SNode<T> => {
        return {
            value,
            next: null
        }
    }

    private appendToEnd = (sNode: SNode<T>) => {
        this.tail = sNode
        this.tail.next = sNode
    }

    // private deleteFromHead = (value: T): boolean => {
    //     let deleted: boolean = false

    //     while (this.head && this.head.value) {
    //         deleted = true
    //         this.head = this.head.next
    //     }

    //     return deleted
    // }

    public isEmpty = () => !this.head;

    public append = (value: T): LinkedList<T> => {
        const sNode = this.summonNode(value)

        if (this.isEmpty()) {
            this.head = sNode
            this.tail = sNode
            return this
        }

        this.appendToEnd(sNode)
        return this
    }

    // public fromArray = (value: T[]): LinkedList<T> => {
    //     value.forEach(val => this.append(val));
    //     return this
    // }

    // public *items() {
    //     let sNode = this.head
    //     while (sNode) {
    //         yield sNode
    //         sNode = sNode.next
    //     }
    // }

    // public delete = (value: T): boolean => {
    //     let deleted: boolean = false;

    //     if (this.isEmpty()) return deleted;

    //     deleted = this.deleteFromHead(value)

    //     let current = this.head || this.EMPTY_NODE

    //     while (current.next) {
    //         if (current.next.value === value) {
    //             deleted = true
    //             current.next = current.next.next
    //         } else {
    //             current = current.next
    //         }
    //     }

    //     if (this.tail.value === value) {
    //         this.tail = current
    //     }

    //     return deleted
    // }

    // public find = (compare: STFunction<T, boolean>) => {
    //     if (this.isEmpty()) {
    //         return null
    //     }
    //     let node = this.head

    //     while (node) {
    //         if (compare(node.value)) {
    //             return node
    //         }
    //         node = node.next
    //     }
    //     return null
    // }

}
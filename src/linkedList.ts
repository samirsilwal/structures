/**
 *  Module of LinkedList structure defination.
 */


export interface SNode<T> {
    value: T,
    next?: SNode<T>
}

export class LinkedList<T> {
    private head: SNode<T> = null
    private tail: SNode<T> = null

    private summonNode = (value: T): SNode<T> => {
        return {
            value: value,
            next: null
        }
    }

    private appendToEnd = (sNode: SNode<T>) => {
        this.tail = sNode
        this.tail.next = sNode
    } 

    public isEmpty = () => !this.head;

    public append = (value: T): LinkedList<T> =>  {
        const sNode = this.summonNode(value)

        if (this.isEmpty()) {
            this.head = sNode
            this.tail = sNode
            return this
        }

        this.appendToEnd(sNode)
        return this
    }

    public fromArray = (value: T[]): LinkedList<T> => {
        value.forEach(val => this.append(val));
        return this
    }

    public *items() {
        let sNode = this.head
        while(sNode){
            yield sNode
            sNode = sNode.next
        }
    }
}



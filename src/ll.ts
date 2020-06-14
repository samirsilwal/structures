/**
 *  Module of LinkedList structure defination.
 */

/**
 * Interface for a Node in LinkedList
 * value: a unit member of list
 * next: pointer to next node
 */
export interface Node<T> {
    value: T,
    next?: Node<T>
}

/**
 * Generic class implementing LinkedList
 */
export class LinkedList<T> {
    // private properties
    private head: Node<T> = null;
    private tail: Node<T> = null;

    // private methods
    /**
     * Method:
     * Adds wrapped node to the end of the collection
     * Parameter:
     * node(Node): node wrapper for each collection unit
     * returns void
     */
    private appendToEnd = (node: Node<T>): void => {
        if (this.slength() === 1) {
            this.head.next = node
        } else {
            this.tail.next = node
        }
        this.tail = node
    }

    /**
     * Method:
     * returns length of the collectison
     */
    private slength = (): number => {
        let count: number = 0;
        this.iterateOver(_ => count++)
        return count
    }

    // Getters
    get length() {
        return this.slength()
    }

    /**
     * Method:
     * returns true if collection is empty
     */
    public isEmpty = (): boolean => !this.head

    /**
     * A Generic iterator function which loops over each el in collection
     * and apaplies callback to them along the traverse.
     */
    private iterateOver = (callback: any, node: Node<T> = this.head): LinkedList<T> => {
        if (!node) {
            return this
        }
        callback(node.value)
        this.iterateOver(callback, node.next)
    }

    /**
     * Method:
     * parameters:
     * value(T) => type of unit of collection
     * return a Node with the given value
     */
    public summonNode = (value: T): Node<T> => {
        return {
            value,
            next: null
        }
    }

    /**
     * Method:
     * Appends the value to the end of the collection
     * parameters:
     * value(T) => type of unit of collection
     * return a LinkedList collection of the items
     */
    public append = (value: T): LinkedList<T> => {
        const node = this.summonNode(value)

        if (this.isEmpty()) {
            this.head = node
            this.tail = node
            return this
        }

        this.appendToEnd(node)
        return this
    }

    /**
     * Method:
     * returns the typical linked list view of the collection.
     */
    public toLLString = (): string => {
        let temp = ""
        this.iterateOver(i => {
            temp =  temp + "[ " + i + " ]" + "->"
        });
        return temp + "null";
    }

    /**
     * Method:
     * returns the list view of the collection.
     */
    public toString = (): string => {
        let temp = "[ "
        this.iterateOver(i => {
            temp =  temp + i + " "
        });
        return temp + "]";
    }

    /**
     * Method:
     * converts Array to LinkedList collection.
     * parameter:
     * arr(Array<T>): Array of unit type T.
     */
    public fromArray = (arr: T[]): LinkedList<T> => {
         arr.forEach(this.append);
         return this
    }

}

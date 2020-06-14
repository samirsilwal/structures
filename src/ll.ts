/**
 *  Module of LinkedList structure defination.
 */

// Custom type definations

export type foreachFucntion<T> = (t: T) => T
export type mapFunction<T, U> = (t: T) => U
export type filterFunction<T> = (t: T) => boolean
export type reduceFunction<T> = (t: T, acc: T) => T

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
    private EMPTY_NODE: Node<T> = { value: null, next: null }

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

    /**
     * A Generic iterator function which loops over each el in collection
     * and apaplies callback to them along the traverse.
     *
     * Able to perform sideeffects
     */
    private iterateOver = (callback: any, node: Node<T> = this.head): void => {
        if (!node) {
            return
        }
        callback(node.value)
        this.iterateOver(callback, node.next)
    }

    /**
     * Method
     * parameter:
     * node(Node<T>): node of the collection
     * returns the list of collection except the head unit
     */
    private getlTail = (node: Node<T> = this.head.next): LinkedList<T> => {
        const temp: LinkedList<T> = new LinkedList<T>()
        while (node) {
            temp.append(node.value)
            node = node.next
        }
        return temp
    }

    // Getters
    get length() {
        return this.slength()
    }

    get lhead() {
        return this.head.value
    }

    get ltail() {
        return this.getlTail()
    }

    /**
     * Method:
     * returns true if collection is empty
     */
    public isEmpty = (): boolean => !this.head

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
     * parameter:
     * value(T): value to be removed
     * returns a new collection
     */
    public remove = (value: T): LinkedList<T> => {
        return this.filter(i => i !== value)
    }

    /**
     * Method:
     * parameter:
     * value(T): value to be removed
     * returns boolean as result of operation
     */
    public mRemove = (value: T): boolean => {
        let deleted: boolean = false
        if (this.head.value === value) {
            this.head = this.head.next
            deleted = true
        }

        let currentNode = this.head || this.EMPTY_NODE

        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next
                deleted = true
            } else {
                currentNode = currentNode.next
            }
        }

        if (this.tail.value === value) {
            this.tail = this.EMPTY_NODE
            deleted = true
        }

        return deleted
    }

    /**
     * Method:
     * returns the typical linked list view of the collection.
     */
    public toLLString = (): string => {
        let temp = ""
        this.iterateOver(i => {
            temp = temp + "[ " + i + " ]" + "->"
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
            temp = temp + i + " "
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

    /**
     * Method:
     * converts Array to LinkedList collection.
     * parameter:
     * arr(Array<T>): Array of unit type T.
     */
    public toArray = (): T[] => {
        const temp: T[] = [];
        this.iterateOver(_ => temp.push(_))
        return temp
    }

    /**
     * Method:
     * non-recursive implementation
     * parameter:
     * list(LinkedList<T>): list needed to be appended to the end
     * returns the transformed or mapped collection of linkedList itself.
     */
    private "++" = (list: LinkedList<T>): LinkedList<T> => {
        let node: Node<T> = list.head
        while (node) {
            this.append(node.value)
            node = node.next
        }
        return this
    }

    /**
     * Method:
     * parameter:
     * list(LinkedList<T>): list needed to be appended to the end
     * returns the transformed or mapped collection of linkedList itself.
     */
    public "+" = (list: LinkedList<T>): LinkedList<T> => {
        if (!list.tail) return this
        return this.append(list.lhead)["++"](list.ltail)
    }
    /**
     * Method:
     * Non functional implementation of map
     * parameter:
     * feature: A call back method applied for each element of the collection.
     * returns the transformed or mapped collection of linkedList itself.
     */
    private testMap<U>(callback: mapFunction<T, U>, node: Node<T> = this.head): LinkedList<U> {
        const temp: LinkedList<U> = new LinkedList<U>()
        while (node) {
            temp.append(callback(node.value))
            node = node.next
        }
        return temp
    }

    // TODO: implement filter and reduce.....
    // make these methods functional

    /**
     * Method:
     * parameter:
     * feature: A call back method applied for each element of the collection.
     * returns the transformed or mapped collection of linkedList itself.
     */
    public map<U>(callback: mapFunction<T, U>, acc: LinkedList<U> = new LinkedList<U>()): LinkedList<U> {
        if (!this.tail) {
            return acc
        }
        return this.ltail.map(callback, acc["+"](new LinkedList<U>().append(callback(this.lhead))))
    }

    /**
     * Method:
     * parameter:
     * feature: A predicate callback method applied for each element of the collection.
     * returns the filterd collection of linkedList itself which passes the predicate.
     */
    public filter(callback: filterFunction<T>, acc: LinkedList<T> = new LinkedList<T>()): LinkedList<T> {
        if (!this.tail) return acc;
        return callback(this.lhead) ? this.ltail.filter(callback, acc["+"](new LinkedList<T>().append(this.lhead))) : this.ltail.filter(callback, acc)
    }

    /**
     * Method:
     * parameter:
     * feature: A predicate callback method applied for each element of the collection.
     * returns the reduced collection of linkedList itself which passes the predicate.
     */
    public reduce(callback: reduceFunction<T>, acc: T = null): T {
        if (!this.tail) return acc;
        return this.ltail.reduce(callback, callback(this.lhead, acc))
    }

    /**
     * Method:
     * converts Array to LinkedList collection.
     * parameter:
     * arr(Array<T>): Array of unit type T.
     */
    public foreach = (callback: foreachFucntion<T>, acc: LinkedList<T> = new LinkedList<T>()): LinkedList<T> => {
        if (!this.tail) return acc
        return this.ltail.foreach(callback, acc["+"](new LinkedList<T>().append(callback(this.lhead))))
    }

    /**
     * Method:
     * converts Array to LinkedList collection.
     * parameter:
     * arr(Array<T>): Array of unit type T.
     */
    public mforeach = (callback: foreachFucntion<T>, node: Node<T> = this.head): void => {
        if (!node) return
        node.value = callback(node.value)
        this.mforeach(callback, node.next)
    }

    /**
     * Method:
     * checks if collection contains the item
     * parameter:
     * value(T): find if value exist in the collection
     * returns boolean as per result.
     */
    public contains = (value: T): boolean => {
        return this.filter(_ => _ === value).length > 0 ? true : false
    }

    /**
     * Method:
     * returns the first item found as per predicate
     * parameter:
     * predicate: function to filter the collection
     * returns value if found else null
     */
    public find = (predicate: filterFunction<T>): T => {
        return this.filter(predicate).length > 0 ? this.lhead : null
    }
}

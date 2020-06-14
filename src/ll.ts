/**
 *  Module of LinkedList structure defination.
 */

// Custom type definations

export type mapFunction<T, U> = (t: T) => U
export type filterFunction<T> = (t: T) => boolean

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

    /**
     * A Generic iterator function which loops over each el in collection
     * and apaplies callback to them along the traverse.
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
        let temp: LinkedList<T> = new LinkedList<T>()
        while(node){
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

    /**
     * Method:
     * parameter:
     * feature: A call back method applied for each element of the collection.
     * returns the transformed or mapped collection of linkedList itself.
     */
    public map<U>(callback: mapFunction<T, U>, node: Node<T> = this.head): LinkedList<U>{
        let temp: LinkedList<U> = new LinkedList<U>()
        while(node){
            temp.append(callback(node.value))
            node = node.next
        }
        return temp
    }

    // TODO: implement filter and reduce.....
    // make these methods functional

    public testmap<U>(callback: mapFunction<T, U>, node: Node<T> = this.head): LinkedList<U>{
        let temp: LinkedList<U> = new LinkedList<U>()
        while(node){
            temp.append(callback(node.value))
            node = node.next
        }
        return temp
    }

    public "+++" = (list: LinkedList<T>): LinkedList<T> => {
        let node: Node<T> = list.head
        while(node) {
            this.append(node.value)
            node = node.next
        }
        return this
    } 


    
}

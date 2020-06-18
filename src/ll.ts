/**
 *  Module of LinkedList structure defination.
 */
import * as util from "util";

// Custom type definations

export type foreachFucntion<T> = (t: T) => void
export type mForeachFucntion<T> = (t: T) => T
export type mapFunction<T, U> = (t: T) => U
export type filterFunction<T> = (t: T) => boolean
export type reduceFunction<T> = (t: T, acc: T) => T
export type flatmapFunction<T, U> = (t: T) => LinkedList<U>

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

    constructor(obj: any = null) {
        obj && Object.assign(this, obj)
    }

    // Getters

    /**
     * @returns the length of the collection.
     */
    get length() {
        return this.slength()
    }

    /**
     * @returns the tail value of the collection.
     */
    get lbottom() {
        return this.tail.value
    }

    /**
     * @returns the collection with all elements except the last.
     */
    get ltop() {
        return this.getlTop()
    }

    /**
     * @returns the first value of the element.
     */
    get lhead() {
        return this.head.value
    }

    /**
     * @returns the collection with all elements except the first.
     */
    get ltail() {
        return this.getlTail()
    }

    // console log print
    [util.inspect.custom](depth, opts) {
        return this.toString()
    }

    // private methods

    /**
     * Adds wrapped node to the end of the collection
     * Parameter:
     * @param node (Node): node wrapper for each collection unit
     * @returns void
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
     * @returns length of the collection.
     */
    private slength = (): number => {
        let count: number = 0;
        this.iterateOver(_ => count++)
        return count
    }

    /**
     * A Generic iterator function which loops over each el in collection.
     * and applies callback to them along the traverse.
     *
     * Able to perform sideeffects
     * 
     * @param callback A transform applied to each el in collection.
     * @param node (Node) wrapper for each list component. 
     * @returns void
     */
    private iterateOver = (callback: any, node: Node<T> = this.head): void => {
        if (!node) {
            return
        }
        callback(node.value)
        this.iterateOver(callback, node.next)
    }

    /**
     * IT simply return the collection excluding the head el(first element).
     * @param node (Node<T>): node of the collection
     * @returns the list of collection except the head unit
     */
    private getlTail = (node: Node<T> = this.head.next): LinkedList<T> => {
        const temp: LinkedList<T> = new LinkedList<T>()
        while (node) {
            temp.append(node.value)
            node = node.next
        }
        return temp
    }

    /**
     * Method return the collection excluing the tail el(last element).
     * @param node (Node<T>): node of the collection
     * @returns the list of collection except the tail unit
     */
    private getlTop = (node: Node<T> = this.head): LinkedList<T> => {
        const temp: LinkedList<T> = new LinkedList<T>()
        while (node.next) {
            temp.append(node.value)
            node = node.next
        }
        return temp
    }

    //utility for toSting method

    /**
     * Parses the object type of js to string.
     * @param obj an object type to be transformed
     * Note: obj refers to object not Object
     * @returns stringified object  
     */
    private parseObj = (obj: object) => {
        return JSON.stringify(obj).split(",").map(item => {
            const sp = item.split(":")
            sp[0] = sp[0].replace(/"/g, "")
            return sp.join(":")
        }).join(",").replace(/:/g, ": ").replace(/,/g, ", ").replace(/{/g, "{ ").replace(/}/g, " }").replace(/"/g, "'")
    }

    /**
     * @returns true if collection is empty
     */
    public isEmpty = (): boolean => !this.head

    /**
     * @param value (T) => type of unit of collection
     * @returns a Node with the given value
     */
    public summonNode = (value: T): Node<T> => {
        return {
            value,
            next: null
        }
    }

    /**
     * Appends the value to the end of the collection.
     * @param value (T) => type of unit of collection
     * @returns a LinkedList collection of the items
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
     * Remove the element if exists in collection.
     * @param value(T): value to be removed
     * @returns a new collection without the eremoved element
     */
    public remove = (value: T): LinkedList<T> => {
        return this.filter(i => i !== value)
    }

    /**
     * Mutable removal of the provided element.
     * @param value (T): value to be removed
     * @returns boolean as result of operation
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
     * Display the intuitive representation of LinkedList.
     * @returns the typical linked list view of the collection.
     */
    public toLLString = (): string => {
        let temp = ""
        this.iterateOver(i => {
            temp = temp + "[ " + i + " ]" + "->"
        });
        return temp + "null";
    }

    /**
     * Display the collection as string.
     * @returns the list view of the collection.
     */
    public toString = (): string => {
        let temp = "[ "
        this.iterateOver(i => {
            if (Object.prototype.toString.call(i) === '[object Object]' && !(i instanceof LinkedList)) {
                i = this.parseObj(i)
            }
            if (Array.isArray(i)) {
                i = JSON.stringify(i)
            }
            if (i instanceof LinkedList) {
                i = i.toString()
            }
            temp = temp + i + " "
        });
        return temp + "]";
    }

    /**
     * converts Array to LinkedList collection.
     * @param arr (Array<T>): Array of unit type T.
     * @returns  a LinkedList form of the default array type of js.
     */
    public fromArray = (arr: T[]): LinkedList<T> => {
        arr.forEach(this.append);
        return this
    }

    /**
     * converts Array to LinkedList collection.
     * @param arr (Array<T>): Array of unit type T.
     * @returns the default array version of the collection.
     */
    public toArray = (): T[] => {
        const temp: T[] = [];
        this.iterateOver(_ => temp.push(_))
        return temp
    }

    /**
     * Note: non-recursive implementation
     * @param list (LinkedList<T>): list needed to be appended to the end
     * @returns the transformed or mapped collection of linkedList itself.
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
     * Adds to LinkedList together just like string concat.
     * @param list (LinkedList<T>): list needed to be appended to the end
     * @returns the transformed or mapped collection of linkedList itself.
     */
    public "+" = (list: LinkedList<T>): LinkedList<T> => {
        if (!list.tail) return this
        return this.append(list.lhead)["+"](list.ltail)
    }
    /**
     * Non functional implementation of map
     * @param callback : A call back method applied for each element of the collection.
     * @param node defults to head of the collection.
     * @returns the transformed or mapped collection of linkedList itself.
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
     * Transform a collection of one domain or type to another.
     * @param callback: A call back method applied for each element of the collection.
     * @param acc accumulator defaults to empty linkedlist.
     * @returns the transformed or mapped collection of linkedList itself.
     */
    public map<U>(callback: mapFunction<T, U>, acc: LinkedList<U> = new LinkedList<U>()): LinkedList<U> {
        if (!this.tail) {
            return acc
        }
        return this.ltail.map(callback, acc["+"](new LinkedList<U>().append(callback(this.lhead))))
    }

    /**
     * Filter the el from the collection satisfying the predicate.
     * @param callback: A predicate callback method applied for each element of the collection.
     * @param acc accumulator defaults to empty linkedlist.
     * @returns the filterd collection of linkedList itself which passes the predicate.
     */
    public filter(callback: filterFunction<T>, acc: LinkedList<T> = new LinkedList<T>()): LinkedList<T> {
        if (!this.tail) return acc;
        return callback(this.lhead) ? this.ltail.filter(callback, acc["+"](new LinkedList<T>().append(this.lhead))) : this.ltail.filter(callback, acc)
    }

    /**
     * Reduce the collection to a single value transformed with callback anad accumulated.
     * @param callback: A predicate callback method applied for each element of the collection.
     * @param acc accumulator defaults to null.
     * @returns the reduced collection of linkedList itself which passes the predicate.
     */
    public reduce(callback: reduceFunction<T>, acc: T = null): T {
        if (!this.tail) return acc;
        return this.ltail.reduce(callback, callback(this.lhead, acc))
    }

    /**
     * Applies the callback to each el in the collection
     * @param callback A callback applied on each el of list.
     * @param acc accumulator defaults to empty linkedlist.
     * @returns the collection applied to callback for each el. 
     */
    public mForeach = (callback: mForeachFucntion<T>, acc: LinkedList<T> = new LinkedList<T>()): LinkedList<T> => {
        if (!this.tail) return acc
        return this.ltail.mForeach(callback, acc["+"](new LinkedList<T>().append(callback(this.lhead))))
    }

    /**
     * Applies the callback to each el in the collection
     * @param callback (Array<T>): Array of unit type T.
     * @returns the collection applied to callback for each el. 
     */
    public foreach = (callback: foreachFucntion<T>): void => {
        this.iterateOver(i => callback(i))
    }

    /**
     * Checks if collection contains the item.
     * @param value (T): find if value exist in the collection.
     * @returns boolean as per result.
     */
    public contains = (value: T): boolean => {
        return this.filter(_ => _ === value).length > 0 ? true : false
    }

    /**
     * Returns the first item found as per predicate.
     * predicate: function to filter the collection.
     * @returns value if found else null.
     */
    public find = (predicate: filterFunction<T>): T => {
        return this.filter(predicate).length > 0 ? this.lhead : null
    }

    /**
     *flatten a single depth of collection
     * @param acc accumulator to flatten the given collection
     * @returns a flatten linkedList of the elements
     */
    public flatten = (acc: LinkedList<T> = new LinkedList<T>()): LinkedList<T> => {
        if (!this.tail) return acc;
        return this.ltail.flatten(acc["+"](new LinkedList<T>(this.lhead)))
    }

    /**
     * A monadic feature that maps and then flattens the collection.
     * @param callback function executed for the elements in the collection
     * @param acc oprtional parameter to accumulate the flatten collection.
     * @returns the flatten collection after being mapped
     */
    public flatmap<U>(callback: flatmapFunction<T, U>, acc: LinkedList<U> = new LinkedList<U>()): LinkedList<U> {
        if (!this.tail) return acc
        return this.ltail.flatmap(callback, acc["+"](callback(this.lhead)))
    }

    /**
     * @acc accumulates the reversed collection
     * @returns a linlkedlist of values in reverse order.
     */
    public reverse = (acc: LinkedList<T> = new LinkedList<T>()): LinkedList<T> => {
        acc["+"](new LinkedList<T>().append(this.lbottom))
        if (!this.ltop.length) return acc
        return this.ltop.reverse(acc)
    }

    // Fix me later
    /**
    * @index index of the collection to be referenced.
    * @returns a unit element at particular index in the collection.
    */
    public at = (index: number): T => {
        if (index < 0 || index >= this.length) {
            return null
        }
        let i: number = 0
        let el: T = null
        let temp: LinkedList<T> = this
        while (temp.tail != null) {
            if (i === index) {
                el = temp.lhead
            }
            temp = temp.ltail
            i++
        }
        return el
    }
}

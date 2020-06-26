/// <reference types="node" />
/**
 *  Module of LinkedList structure definition.
 */
import * as util from "util";
/**
 * Interface for a Node in LinkedList
 * value: a unit member of list
 * next: pointer to next node
 */
export interface Node<T> {
    value: T;
    next?: Node<T>;
}
/**
 * Generic class implementing LinkedList
 */
export declare class LinkedList<T> {
    #private;
    constructor(...params: T[]);
    /**
     * @returns the length of the collection.
     */
    get length(): number;
    /**
     * @returns the tail value of the collection.
     */
    get lbottom(): T;
    /**
     * @returns the collection with all elements except the last.
     */
    get ltop(): LinkedList<T>;
    /**
     * @returns the first value of the element.
     */
    get lhead(): T;
    /**
     * @returns the collection with all elements except the first.
     */
    get ltail(): LinkedList<T>;
    [util.inspect.custom](depth: any, opts: any): string;
    /**
     * Adds wrapped node to the end of the collection
     * Parameter:
     * @param node (Node): node wrapper for each collection unit
     * @returns void
     */
    private appendToEnd;
    /**
     * @returns length of the collection.
     */
    private slength;
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
    private iterateOver;
    /**
     * IT simply return the collection excluding the head el(first element).
     * @param node (Node<T>): node of the collection
     * @returns the list of collection except the head unit
     */
    private getlTail;
    /**
     * Method return the collection excluing the tail el(last element).
     * @param node (Node<T>): node of the collection
     * @returns the list of collection except the tail unit
     */
    private getlTop;
    /**
     * Parses the object type of js to string.
     * @param obj an object type to be transformed
     * Note: obj refers to object not Object
     * @returns stringified object
     */
    private parseObj;
    /**
     * @returns true if collection is empty
     */
    isEmpty: () => boolean;
    /**
     * @param value (T) => type of unit of collection
     * @returns a Node with the given value
     */
    private summonNode;
    /**
     * Appends the value to the end of the collection.
     * @param value (T) => type of unit of collection
     * @returns a LinkedList collection of the items
     */
    append: (value: T) => LinkedList<T>;
    /**
     * Remove the element if exists in collection.
     * @param value(T): value to be removed
     * @returns a new collection without the eremoved element
     */
    remove: (value: T) => LinkedList<T>;
    /**
     * Mutable removal of the provided element.
     * @param value (T): value to be removed
     * @returns boolean as result of operation
     */
    mRemove: (value: T) => boolean;
    /**
     * Display the intuitive representation of LinkedList.
     * @returns the typical linked list view of the collection.
     */
    toLLString: () => string;
    /**
     * Display the collection as string.
     * @returns the list view of the collection.
     */
    toString: () => string;
    /**
     * converts Array to LinkedList collection.
     * @param arr (Array<T>): Array of unit type T.
     * @returns  a LinkedList form of the default array type of js.
     */
    fromArray: (arr: T[]) => LinkedList<T>;
    /**
     * converts Array to LinkedList collection.
     * @param arr (Array<T>): Array of unit type T.
     * @returns the default array version of the collection.
     */
    toArray: () => T[];
    /**
     * Adds to LinkedList together just like string concat.
     * @param list (LinkedList<T>): list needed to be appended to the end
     * @returns the transformed or mapped collection of linkedList itself.
     */
    "+": (list: LinkedList<T>) => LinkedList<T>;
    /**
     * Transform a collection of one domain or type to another.
     * @param callback: A call back method applied for each element of the collection.
     * @returns the transformed or mapped collection of linkedList itself.
     */
    map<U>(callback: (t: T) => U): LinkedList<U>;
    /**
     * Filter the el from the collection satisfying the predicate.
     * @param callback: A predicate callback method applied for each element of the collection.
     * @returns the filtered collection of linkedList itself which passes the predicate.
     */
    filter(callback: (t: T) => boolean): LinkedList<T>;
    /**
     * Reduce the collection to a single value transformed with callback anad accumulated.
     * @param callback: A predicate callback method applied for each element of the collection.
     * @returns the reduced collection of linkedList itself which passes the predicate.
     */
    reduce(callback: (t: T, acc: T) => T): T;
    /**
     * Applies the callback to each el in the collection
     * @param callback A callback applied on each el of list.
     * @returns the collection applied to callback for each el.
     */
    mForeach: (callback: (t: T) => T) => LinkedList<T>;
    /**
     * Applies the callback to each el in the collection
     * @param callback (Array<T>): Array of unit type T.
     * @returns the collection applied to callback for each el.
     */
    foreach: (callback: (t: T) => void) => void;
    /**
     * Checks if collection contains the item.
     * @param value (T): find if value exist in the collection.
     * @returns boolean as per result.
     */
    contains: (value: T) => boolean;
    /**
     * Returns the first item found as per predicate.
     * @param predicate: function to filter the collection.
     * @returns value if found else null.
     */
    find: (predicate: (t: T) => boolean) => T;
    /**
     * flatten a single depth of collection
     * @returns a flatten linkedList of the elements
     */
    flatten: () => LinkedList<T>;
    /**
     * A monadic feature that maps and then flattens the collection.
     * @param callback function executed for the elements in the collection
     * @returns the flatten collection after being mapped.
     */
    flatmap<U>(callback: (t: T) => LinkedList<U>): LinkedList<U>;
    /**
     * Reverses the order of elements in collection.
     * @returns a linlkedlist of values in reverse order.
     */
    reverse: () => LinkedList<T>;
    /**
    * @index index of the collection to be referenced.
    * @returns a unit element at particular index in the collection.
    */
    at: (index: number) => T;
    /**
     * Groups the each element of two list into single.
     * Both should have same length if not returns null.
     * @param l linklist collection that is to be zipped.
     * @returns a collection of collections of zipped elements.
     */
    zip<U>(l: LinkedList<U>): LinkedList<LinkedList<any>>;
    /**
     * Get a random element from the LinkedList.
     * @returns Random value from the collection.
     */
    getRandom: () => T;
    /**
     * Allows to take n elements from head of the collection.
     * @param n Number of element from front of collection to extract.
     * @returns A collection of extracted n elements.
     */
    take: (n: number) => LinkedList<T>;
    /**
     * Allows to take n elements from tail of the collection.
     * @param n Number of element from back of collection to extract.
     * @returns A collection of extracted n elements.
     */
    pluck: (n: number) => LinkedList<T>;
    /**
     * Find the cartesian product or cross product of the elements with given collection.
     * @param l collection with ahick cross product is to be done.
     * @returns A Linkelist of entire sample spaces of cross product collection.
     */
    cross: (l: LinkedList<T>) => LinkedList<LinkedList<any>>;
    /**
     * Empty the collection.
     * @returns the emptied list from the given collection.
     */
    empty: () => LinkedList<T>;
    /**
     * Check if all elements in list satisfy a predicate.
     * @param pred A predicate applied to all elements in list.
     * @returns true if predicate holds for all elements in list else false.
     */
    forall: (pred: (t: T) => boolean) => boolean;
    /**
     * Check if any element in list satisfy a predicate.
     * @param pred A predicate applied to all elements in list.
     * @returns true if predicate holds for any one element in list else false.
     */
    exists: (pred: (t: T) => boolean) => boolean;
    /**
     * Generates a sequence of integers from 0 which can be initially transformed.
     * @param l length of the dynamic list to be generated.
     * @param p transform function applied dto each item in genetrated collection.
     * @returns A LinkedList of numbers or transformed series of numbers.
     */
    static generator(l: number, p: (i: number) => any): LinkedList<any>;
    /**
     * Split the given list into 2 lists.
     * @param n number of elements to be included in first list.
     * @returns  a splitted list with first containing n elements and rest in second list.
     */
    splitAt: (n: number) => LinkedList<LinkedList<T>>;
    /**
     * Computes a prefix scan of the elements of the collection.
     * @param i initialization for the operator operation.
     * @param op A binary operation performed on each scanned elements.
     * @returns A List of the operator transformed el in each scan from left to right
     *
     * Note: the bottom of collection conatains the final accumulated result.
    */
    scanLeft: (i: T) => (op: (a: T, b: T) => T) => LinkedList<T>;
    /**
     * Computes a postfix scan of the elements of the collection.
     * @param i initialization for the operator operation.
     * @param op A binary operation performed on each scanned elements.
     * @returns A List of the operator transformed el in each scan from right to left.
     *
     * Note: the head of the collection contains the final accumulated result.
    */
    scanRight: (i: T) => (op: (a: T, b: T) => T) => LinkedList<T>;
    /**
     * Get the longest prefix from the given collection passing the predicate.
     * @param op predicate applied to each element in the collection.
     * @returns a LinkedList of el satisfying the predicate until first unsatisfying occour.
     */
    dropWhile: (op: (a: T) => boolean) => LinkedList<T>;
    /**
     * Get the longest prefix from the given collection until traverse the el passing predicate.
     * @param op predicate applied to each elem ent in the collection.
     * @returns a LinkedList of el prefixing the first el satisfying the predicate.
     */
    dropUntil: (op: (a: T) => boolean) => LinkedList<T>;
    /**
     * Removes the element from the beginning from the collection.
     * @returns the element removed from the list.
     */
    shift: () => T;
    /**
     * Insert the element at the beginning of the collection.
     * @param val elements to be inserted in front of the list
     * mutate the collection itself.
     */
    unShift: (...val: T[]) => void;
    /**
     * Sorts the given element in the collection. default sorts to ascending order.
     * for sorting object enter the key value in `key` filed for comparison. and give null to `op`
     *
     * @param op comparison operator to distinguish the comparison for sorting
     * @param key key of the object
     */
    sort: (op?: (a: T, b: T) => number, key?: string) => LinkedList<T>;
}

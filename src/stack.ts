/**
 *  Module of Stack structure defination.
 */

import { LinkedList } from "./ll";
import * as util from "util";

/**
 * A generic class implementing stack structure.
 */
export class Stack<T> {
    // properties
    private stack: LinkedList<T> = new LinkedList<T>();

    //constructor
    // Fix me later
    constructor(obj: any = null) {
        obj && Object.assign(this, obj)
    }

    //getters

    /**
     * @returns the string form of stack.
     */
    get toString() {
        return this.stack.toString()
    }

    /**
     * @returns the length/size of the stack.
     */
    get size() {
        return this.stack.length
    }

    /**
     * @returns true if cstack is empty.
     */
    get isEmpty() {
        return this.stack.isEmpty()
    }

    /**
     * @returns the top element from stack.
     */
    get top() {
        return this.stack.lhead
    }

    // console log print
    [util.inspect.custom](depth, opts) {
        return this.toString
    }
    // private methods

    //methods

    /**
     * Add value at top of the stack.
     * @param value push element into the stack.
     * @returns A stack object with the item at top.
     */
    public push = (value: T): Stack<T> => {
        this.stack = new LinkedList<T>().append(value)["+"](this.stack)
        return this
    }

    /**
     * Removes the element from top of stack.
     * @returns the element at top of the stack
     */
    public pop = (): T => {
        const t = this.stack.lhead
        this.stack = this.stack.ltail
        return t
    }

    /**
     * Adds a pile of stack one on top of other.
     * @param s Stack of type T to be piled on top
     * @returns A stack obj piled on other.
     */
    public pile = (s: Stack<T>): Stack<T> => {
        this.stack = this.stack["+"](s.stack)
        return this
    }

    /**
      * Remove a pile of stack from top of stack.
      * @param n number of element of stack to be removed.
      * @returns A stack obj with n element poped
      */
    public unPile = (n: number): Stack<T> => {
        if (n > this.stack.length) return null
        if (n == 0) return this
        this.stack = this.stack.ltail
        return this.unPile(n - 1)
    }

    /**
     * Converts the LinkedList collection to stack.
     * @param list Linkedlist of elements.
     * @returns a stack of the elements
     */
    public fromLinkedList = (list: LinkedList<T>): Stack<T> => {
        this.push(list.lbottom)
        if (!list.ltop.length) return this
        return this.fromLinkedList(list.ltop)
    }

    /**
     * Converts the array collection to stack.
     * @param arr array of elements.
     * @returns a stack of the elements
     */
    public fromArray = (arr: Array<T>): Stack<T> => {
        return new Stack<T>().fromLinkedList(this.stack.fromArray(arr))
    }

    /**
     * Converts the stack collection to array.
     * @returns a array of the elements
     */
    public toArray = (): T[] => {
        return this.stack.toArray()
    }

    /**
     * Maps the Stack from one type dodmain to other.
     * @param callback callback applied to each el in stack to form another
     * @returns a transformed Stack collection.
     */
    public map<U>(callback: (t: T) => U): Stack<U> {
        return new Stack<U>().fromLinkedList(this.stack.map(callback))
    }

    /**
     * @returns a stack of el in reverse order.
     */
    public reverse = (): Stack<T> => {
        return new Stack<T>().fromLinkedList(this.stack.reverse())
    }
}
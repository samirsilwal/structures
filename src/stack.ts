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
    private stack: LinkedList<T> = null;

    //constructor
    constructor() {
        this.stack = new LinkedList<T>()
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
}
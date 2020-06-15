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
    get toString() {
        return this.stack.toString()
    }

    get size() {
        return this.stack.length
    }

    get isEmpty() {
        return this.stack.isEmpty()
    }

    get top() {
        return this.stack.lhead
    }

    get bottom() {
        return this.stack.lbottom
    }

    // console log print
    [util.inspect.custom](depth, opts) {
        return this.toString
    }

    //methods
    /**
     * @param value push element into the stack
     */
    public push = (value: T): Stack<T> => {
        this.stack = new LinkedList<T>().append(value)["+"](this.stack)
        return this
    }

    /**
     * returns the element at top of the stack
     */
    public pop = (): T => {
        const t = this.stack.lhead
        this.stack = this.stack.ltail
        return t
    }

    /**
     * Adds a pile of stack one on top of other.
     * @param s Stack of type T to be piled on top
     */
    public pile = (s: Stack<T>): Stack<T> => {
        this.stack = this.stack["+"](s.stack)
        return this
    }

    /**
      * Remove a pile of stack from top of stack.
      * @param n number of element of stack to be removed.
      */
    public unPile = (n: number): Stack<T> => {
        if (n > this.stack.length) return null
        if (n == 0) return this
        this.stack = this.stack.ltail
        return this.unPile(n - 1)
    }
}
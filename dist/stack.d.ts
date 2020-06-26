/**
 *  Module of Stack structure defination.
 */
/// <reference types="node" />
import { LinkedList } from "./ll";
import * as util from "util";
/**
 * A generic class implementing stack structure.
 */
export declare class Stack<T> {
    private stack;
    constructor(obj?: any);
    /**
     * @returns the string form of stack.
     */
    get toString(): string;
    /**
     * @returns the length/size of the stack.
     */
    get size(): number;
    /**
     * @returns true if cstack is empty.
     */
    get isEmpty(): boolean;
    /**
     * @returns the top element from stack.
     */
    get top(): T;
    [util.inspect.custom](depth: any, opts: any): string;
    /**
     * Add value at top of the stack.
     * @param value push element into the stack.
     * @returns A stack object with the item at top.
     */
    push: (value: T) => Stack<T>;
    /**
     * Removes the element from top of stack.
     * @returns the element at top of the stack
     */
    pop: () => T;
    /**
     * Adds a pile of stack one on top of other.
     * @param s Stack of type T to be piled on top
     * @returns A stack obj piled on other.
     */
    pile: (s: Stack<T>) => Stack<T>;
    /**
      * Remove a pile of stack from top of stack.
      * @param n number of element of stack to be removed.
      * @returns A stack obj with n element poped
      */
    unPile: (n: number) => Stack<T>;
    /**
     * Converts the LinkedList collection to stack.
     * @param list Linkedlist of elements.
     * @returns a stack of the elements
     */
    fromLinkedList: (list: LinkedList<T>) => Stack<T>;
    /**
     * Converts the array collection to stack.
     * @param arr array of elements.
     * @returns a stack of the elements
     */
    fromArray: (arr: Array<T>) => Stack<T>;
    /**
     * Converts the stack collection to array.
     * @returns a array of the elements
     */
    toArray: () => T[];
    /**
     * Maps the Stack from one type dodmain to other.
     * @param callback callback applied to each el in stack to form another
     * @returns a transformed Stack collection.
     */
    map<U>(callback: (t: T) => U): Stack<U>;
    /**
     * @returns a stack of el in reverse order.
     */
    reverse: () => Stack<T>;
}

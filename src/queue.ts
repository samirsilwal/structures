/**
 *  Module of Queue structure defination.
 */

import { LinkedList } from "./ll";
import * as util from "util";

/**
 * A generic class implementing Queue structure.
 */
export class Queue<T> {
    // properties
    private queue: LinkedList<T> = new LinkedList<T>()

    //constructor
    constructor(obj: any = null) {
        obj && Object.assign(this, obj)
    }
    //console log print
    [util.inspect.custom](d, o) {
        this.queue.toString()
    }
    //getters

    /**
     * @returns the length of the queue.
     */
    get length() {
        return this.queue.length
    }

    /**
     * @returns the value at front of the queue.
     */
    get front() {
        return this.queue.lhead
    }

    //methods

    /**
     * Adds a value to the queue.
     * @param val a unit to be inserted in the queue.
     * @returns a queue including the provided element.
     */
    public enqueue = (val: T): Queue<T> => {
        this.queue.append(val)
        return this
    }

    /**
     * Removes a value from the queue.
     * @returns a queue removing the element at front of queue.
     */
    public dequeue = (): Queue<T> => {
        this.queue = this.queue.ltail
        return this
    }

}
/**
 *  Module of Queue structure defination.
 */

import { LinkedList } from "./ll";
import * as util from "util";

/**
 * A generic class implementing Queue structure.
 */
export class Queue<T> {
    //  properties
    protected queue: LinkedList<T> = null
    private isFIFO: boolean = true

    // constructor
    constructor(obj: any = null) {
        this.queue = new LinkedList<T>()
        obj && Object.assign(this, obj)
    }

    // console log print
    [util.inspect.custom](depth, opts) {
        return this.toString
    }

    // getters

    /**
     * @returns the length of the queue.
     */
    get length() {
        return this.queue.length
    }

    /**
     * @returns the string form of queue.
     */
    get toString() {
        return this.queue.toString()
    }

    /**
     * @returns the value at front of the queue.
     */
    get front() {
        return this.isFIFO ? this.queue.lhead : this.queue.lbottom
    }

    // setters

    /**
     * @sets if queue is FIFO or LIFO
     */
    set FIFO(val: boolean) {
        this.isFIFO = val
    }

    // methods

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
        this.isFIFO ? this.queue = this.queue.ltail : this.queue = this.queue.ltop
        return this
    }
}

export interface pQNode {
    value: any,
    priority: number
}

/**
 * A generic class implementing priority queue structure.
 * Extends the Queue class
 */
export class priorityQueue<T> extends Queue<T>{
    // properties
    private priorityLevels: number
    private pQueue: LinkedList<pQNode> = new LinkedList<pQNode>()

    // constructor
    constructor(levels: number) {
        super()
        this.priorityLevels = levels
    }

    private summonNode = (value: T, priority = 0): pQNode => {
        return {
            value,
            priority
        }
    }

    public pEnqueue = (val: T): priorityQueue<T> => {
        this.enqueue(val)
        this.pQueue.append(this.summonNode(val))
        return this
    }

}
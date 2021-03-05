/**
 *  Module of Queue structure defination.
 */
/// <reference types="node" />
import { LinkedList } from "./ll";
import * as util from "util";
/**
 * A generic class implementing Queue structure.
 */
export declare class Queue<T> {
    protected queue: LinkedList<T>;
    private isFIFO;
    constructor(obj?: any);
    [util.inspect.custom](depth: any, opts: any): string;
    /**
     * @returns the length of the queue.
     */
    get length(): number;
    /**
     * @returns the string form of queue.
     */
    get toString(): string;
    /**
     * @returns the value at front of the queue.
     */
    get front(): T;
    /**
     * @sets if queue is FIFO or LIFO
     */
    set FIFO(val: boolean);
    /**
     * Adds a value to the queue.
     * @param val a unit to be inserted in the queue.
     * @returns a queue including the provided element.
     */
    enqueue: (val: T) => Queue<T>;
    /**
     * Removes a value from the queue.
     * @returns a queue removing the element at front of queue.
     */
    dequeue: () => Queue<T>;
}
export interface pQNode {
    value: any;
    priority: number;
}
/**
 * A generic class implementing priority queue structure.
 * Extends the Queue class
 */
export declare class priorityQueue<T> extends Queue<T> {
    private priorityLevels;
    private pQueue;
    constructor(levels: number);
    private summonNode;
    pEnqueue: (val: T) => priorityQueue<T>;
}

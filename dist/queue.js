"use strict";
/**
 *  Module of Queue structure defination.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.priorityQueue = exports.Queue = void 0;
const ll_1 = require("./ll");
const util = __importStar(require("util"));
/**
 * A generic class implementing Queue structure.
 */
class Queue {
    // constructor
    constructor(obj = null) {
        //  properties
        this.queue = null;
        this.isFIFO = true;
        // methods
        /**
         * Adds a value to the queue.
         * @param val a unit to be inserted in the queue.
         * @returns a queue including the provided element.
         */
        this.enqueue = (val) => {
            this.queue.append(val);
            return this;
        };
        /**
         * Removes a value from the queue.
         * @returns a queue removing the element at front of queue.
         */
        this.dequeue = () => {
            this.isFIFO ? this.queue = this.queue.ltail : this.queue = this.queue.ltop;
            return this;
        };
        this.queue = new ll_1.LinkedList();
        obj && Object.assign(this, obj);
    }
    // console log print
    [util.inspect.custom](depth, opts) {
        return this.toString;
    }
    // getters
    /**
     * @returns the length of the queue.
     */
    get length() {
        return this.queue.length;
    }
    /**
     * @returns the string form of queue.
     */
    get toString() {
        return this.queue.toString();
    }
    /**
     * @returns the value at front of the queue.
     */
    get front() {
        return this.isFIFO ? this.queue.lhead : this.queue.lbottom;
    }
    // setters
    /**
     * @sets if queue is FIFO or LIFO
     */
    set FIFO(val) {
        this.isFIFO = val;
    }
}
exports.Queue = Queue;
/**
 * A generic class implementing priority queue structure.
 * Extends the Queue class
 */
class priorityQueue extends Queue {
    // constructor
    constructor(levels) {
        super();
        this.pQueue = new ll_1.LinkedList();
        this.summonNode = (value, priority = 0) => {
            return {
                value,
                priority
            };
        };
        this.pEnqueue = (val) => {
            this.enqueue(val);
            this.pQueue.append(this.summonNode(val));
            return this;
        };
        this.priorityLevels = levels;
    }
}
exports.priorityQueue = priorityQueue;

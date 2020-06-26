"use strict";
/**
 *  Module of Stack structure defination.
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
exports.Stack = void 0;
const ll_1 = require("./ll");
const util = __importStar(require("util"));
/**
 * A generic class implementing stack structure.
 */
class Stack {
    //constructor
    // Fix me later
    constructor(obj = null) {
        // properties
        this.stack = new ll_1.LinkedList();
        // private methods
        //methods
        /**
         * Add value at top of the stack.
         * @param value push element into the stack.
         * @returns A stack object with the item at top.
         */
        this.push = (value) => {
            this.stack = new ll_1.LinkedList().append(value)["+"](this.stack);
            return this;
        };
        /**
         * Removes the element from top of stack.
         * @returns the element at top of the stack
         */
        this.pop = () => {
            const t = this.stack.lhead;
            this.stack = this.stack.ltail;
            return t;
        };
        /**
         * Adds a pile of stack one on top of other.
         * @param s Stack of type T to be piled on top
         * @returns A stack obj piled on other.
         */
        this.pile = (s) => {
            this.stack = this.stack["+"](s.stack);
            return this;
        };
        /**
          * Remove a pile of stack from top of stack.
          * @param n number of element of stack to be removed.
          * @returns A stack obj with n element poped
          */
        this.unPile = (n) => {
            if (n > this.stack.length)
                return null;
            if (n == 0)
                return this;
            this.stack = this.stack.ltail;
            return this.unPile(n - 1);
        };
        /**
         * Converts the LinkedList collection to stack.
         * @param list Linkedlist of elements.
         * @returns a stack of the elements
         */
        this.fromLinkedList = (list) => {
            this.push(list.lbottom);
            if (!list.ltop.length)
                return this;
            return this.fromLinkedList(list.ltop);
        };
        /**
         * Converts the array collection to stack.
         * @param arr array of elements.
         * @returns a stack of the elements
         */
        this.fromArray = (arr) => {
            return new Stack().fromLinkedList(this.stack.fromArray(arr));
        };
        /**
         * Converts the stack collection to array.
         * @returns a array of the elements
         */
        this.toArray = () => {
            return this.stack.toArray();
        };
        /**
         * @returns a stack of el in reverse order.
         */
        this.reverse = () => {
            return new Stack().fromLinkedList(this.stack.reverse());
        };
        obj && Object.assign(this, obj);
    }
    //getters
    /**
     * @returns the string form of stack.
     */
    get toString() {
        return this.stack.toString();
    }
    /**
     * @returns the length/size of the stack.
     */
    get size() {
        return this.stack.length;
    }
    /**
     * @returns true if cstack is empty.
     */
    get isEmpty() {
        return this.stack.isEmpty();
    }
    /**
     * @returns the top element from stack.
     */
    get top() {
        return this.stack.lhead;
    }
    // console log print
    [util.inspect.custom](depth, opts) {
        return this.toString;
    }
    /**
     * Maps the Stack from one type dodmain to other.
     * @param callback callback applied to each el in stack to form another
     * @returns a transformed Stack collection.
     */
    map(callback) {
        return new Stack().fromLinkedList(this.stack.map(callback));
    }
}
exports.Stack = Stack;

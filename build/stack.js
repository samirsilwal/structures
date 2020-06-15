"use strict";
/**
 *  Module of Stack structure defination.
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ll_1 = require("./ll");
var util = __importStar(require("util"));
/**
 * A generic class implementing stack structure.
 */
var Stack = /** @class */ (function () {
    //constructor
    // Fix me later
    function Stack(obj) {
        if (obj === void 0) { obj = null; }
        var _this = this;
        // properties
        this.stack = new ll_1.LinkedList();
        // private methods
        //methods
        /**
         * Add value at top of the stack.
         * @param value push element into the stack.
         * @returns A stack object with the item at top.
         */
        this.push = function (value) {
            _this.stack = new ll_1.LinkedList().append(value)["+"](_this.stack);
            return _this;
        };
        /**
         * Removes the element from top of stack.
         * @returns the element at top of the stack
         */
        this.pop = function () {
            var t = _this.stack.lhead;
            _this.stack = _this.stack.ltail;
            return t;
        };
        /**
         * Adds a pile of stack one on top of other.
         * @param s Stack of type T to be piled on top
         * @returns A stack obj piled on other.
         */
        this.pile = function (s) {
            _this.stack = _this.stack["+"](s.stack);
            return _this;
        };
        /**
          * Remove a pile of stack from top of stack.
          * @param n number of element of stack to be removed.
          * @returns A stack obj with n element poped
          */
        this.unPile = function (n) {
            if (n > _this.stack.length)
                return null;
            if (n == 0)
                return _this;
            _this.stack = _this.stack.ltail;
            return _this.unPile(n - 1);
        };
        /**
         * Converts the LinkedList collection to stack.
         * @param list Linkedlist of elements.
         * @returns a stack of the elements
         */
        this.fromLinkedList = function (list) {
            _this.push(list.lbottom);
            if (!list.ltop.length)
                return _this;
            return _this.fromLinkedList(list.ltop);
        };
        /**
         * @returns a stack of el in reverse order.
         */
        this.reverse = function () {
            return new Stack().fromLinkedList(_this.stack.reverse());
        };
        obj && Object.assign(this, obj);
    }
    Object.defineProperty(Stack.prototype, "toString", {
        //getters
        /**
         * @returns the string form of stack.
         */
        get: function () {
            return this.stack.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "size", {
        /**
         * @returns the length/size of the stack.
         */
        get: function () {
            return this.stack.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "isEmpty", {
        /**
         * @returns true if cstack is empty.
         */
        get: function () {
            return this.stack.isEmpty();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "top", {
        /**
         * @returns the top element from stack.
         */
        get: function () {
            return this.stack.lhead;
        },
        enumerable: true,
        configurable: true
    });
    // console log print
    Stack.prototype[util.inspect.custom] = function (depth, opts) {
        return this.toString;
    };
    /**
     * Maps the Stack from one type dodmain to other.
     * @param callback callback applied to each el in stack to form another
     * @returns a transformed Stack collection.
     */
    Stack.prototype.map = function (callback) {
        return new Stack().fromLinkedList(this.stack.map(callback));
    };
    return Stack;
}());
exports.Stack = Stack;

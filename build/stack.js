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
    function Stack() {
        var _this = this;
        // properties
        this.stack = null;
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
        this.stack = new ll_1.LinkedList();
    }
    Object.defineProperty(Stack.prototype, "toString", {
        //getters
        get: function () {
            return this.stack.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "size", {
        get: function () {
            return this.stack.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "isEmpty", {
        get: function () {
            return this.stack.isEmpty();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "top", {
        get: function () {
            return this.stack.lhead;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "bottom", {
        get: function () {
            return this.stack.lbottom;
        },
        enumerable: true,
        configurable: true
    });
    // console log print
    Stack.prototype[util.inspect.custom] = function (depth, opts) {
        return this.toString;
    };
    return Stack;
}());
exports.Stack = Stack;

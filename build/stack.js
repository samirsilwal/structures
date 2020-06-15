"use strict";
/**
 *  Module of Stack structure defination.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ll_1 = require("./ll");
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
         * @param value push element into the stack
         */
        this.push = function (value) {
            _this.stack = new ll_1.LinkedList().append(value)["+"](_this.stack);
            return _this;
        };
        /**
         * returns the element at top of the stack
         */
        this.pop = function () {
            var t = _this.stack.lhead;
            _this.stack = _this.stack.ltail;
            return t;
        };
        /**
         * Adds a pile of stack one on top of other.
         * @param s Stack of type T to be piled on top
         */
        this.pile = function (s) {
            _this.stack = _this.stack["+"](s.stack);
            return _this;
        };
        /**
          * Remove a pile of stack from top of stack.
          * @param n number of element of stack to be removed.
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
    return Stack;
}());
exports.Stack = Stack;

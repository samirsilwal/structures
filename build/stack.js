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

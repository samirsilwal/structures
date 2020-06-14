"use strict";
/**
 *  Module of LinkedList structure defination.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generic class implementing LinkedList
 */
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        var _this = this;
        // private properties
        this.head = null;
        this.tail = null;
        // private methods
        /**
         * Method:
         * Adds wrapped node to the end of the collection
         * Parameter:
         * node(Node): node wrapper for each collection unit
         * returns void
         */
        this.appendToEnd = function (node) {
            if (_this.slength() == 1) {
                _this.head.next = node;
            }
            else {
                _this.tail.next = node;
            }
            _this.tail = node;
        };
        /**
         * Method:
         * returns length of the collectison
         */
        this.slength = function () {
            var count = 0;
            var node = _this.head;
            while (node) {
                count++;
                node = node.next;
            }
            return count;
        };
        /**
         * Method:
         * returns true if collection is empty
         */
        this.isEmpty = function () { return !_this.head; };
        /**
         * Method:
         * parameters:
         * value(T) => type of unit of collection
         * return a Node with the given value
         */
        this.summonNode = function (value) {
            return {
                value: value,
                next: null
            };
        };
        /**
     * Method:
     * Appends the value to the end of the collection
     * parameters:
     * value(T) => type of unit of collection
     * return a LinkedList collection of the items
     */
        this.append = function (value) {
            var node = _this.summonNode(value);
            if (_this.isEmpty()) {
                _this.head = node;
                _this.tail = node;
                return _this;
            }
            _this.appendToEnd(node);
            return _this;
        };
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        // Getters
        get: function () {
            return this.slength();
        },
        enumerable: true,
        configurable: true
    });
    return LinkedList;
}());
exports.LinkedList = LinkedList;

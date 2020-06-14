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
            if (_this.slength() === 1) {
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
            _this.iterateOver(function (_) { return count++; });
            return count;
        };
        /**
         * A Generic iterator function which loops over each el in collection
         * and apaplies callback to them along the traverse.
         */
        this.iterateOver = function (callback, node) {
            if (node === void 0) { node = _this.head; }
            if (!node) {
                return;
            }
            callback(node.value);
            _this.iterateOver(callback, node.next);
        };
        /**
         * Method
         * parameter:
         * node(Node<T>): node of the collection
         * returns the list of collection except the head unit
         */
        this.getlTail = function (node) {
            if (node === void 0) { node = _this.head.next; }
            var temp = new LinkedList();
            while (node) {
                temp.append(node.value);
                node = node.next;
            }
            return temp;
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
        /**
         * Method:
         * returns the typical linked list view of the collection.
         */
        this.toLLString = function () {
            var temp = "";
            _this.iterateOver(function (i) {
                temp = temp + "[ " + i + " ]" + "->";
            });
            return temp + "null";
        };
        /**
         * Method:
         * returns the list view of the collection.
         */
        this.toString = function () {
            var temp = "[ ";
            _this.iterateOver(function (i) {
                temp = temp + i + " ";
            });
            return temp + "]";
        };
        /**
         * Method:
         * converts Array to LinkedList collection.
         * parameter:
         * arr(Array<T>): Array of unit type T.
         */
        this.fromArray = function (arr) {
            arr.forEach(_this.append);
            return _this;
        };
        /**
         * Method:
         * parameter:
         * list(LinkedList<T>): list needed to be appended to the end
         * returns the transformed or mapped collection of linkedList itself.
         */
        this["+"] = function (list) {
            var node = list.head;
            while (node) {
                _this.append(node.value);
                node = node.next;
            }
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
    Object.defineProperty(LinkedList.prototype, "lhead", {
        get: function () {
            return this.head.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkedList.prototype, "ltail", {
        get: function () {
            return this.getlTail();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method:
     * Non functional implementation of map
     * parameter:
     * feature: A call back method applied for each element of the collection.
     * returns the transformed or mapped collection of linkedList itself.
     */
    LinkedList.prototype.testMap = function (callback, node) {
        if (node === void 0) { node = this.head; }
        var temp = new LinkedList();
        while (node) {
            temp.append(callback(node.value));
            node = node.next;
        }
        return temp;
    };
    // TODO: implement filter and reduce.....
    // make these methods functional
    /**
     * Method:
     * parameter:
     * feature: A call back method applied for each element of the collection.
     * returns the transformed or mapped collection of linkedList itself.
     */
    LinkedList.prototype.map = function (callback, acc) {
        if (acc === void 0) { acc = new LinkedList(); }
        if (!this.tail) {
            return acc;
        }
        return this.ltail.map(callback, acc["+"](new LinkedList().append(callback(this.lhead))));
    };
    /**
     * Method:
     * parameter:
     * feature: A predicate callback method applied for each element of the collection.
     * returns the filterd collection of linkedList itself which passes the predicate.
     */
    LinkedList.prototype.filter = function (callback, acc) {
        if (acc === void 0) { acc = new LinkedList(); }
        if (!this.tail)
            return acc;
        return callback(this.lhead) ? this.ltail.filter(callback, acc["+"](new LinkedList().append(this.lhead))) : this.ltail.filter(callback, acc);
    };
    /**
     * Method:
     * parameter:
     * feature: A predicate callback method applied for each element of the collection.
     * returns the reduced collection of linkedList itself which passes the predicate.
     */
    LinkedList.prototype.reduce = function (callback, acc) {
        if (acc === void 0) { acc = null; }
        if (!this.tail)
            return acc;
        return this.ltail.reduce(callback, callback(this.lhead, acc));
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;

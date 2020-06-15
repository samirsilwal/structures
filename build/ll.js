"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  Module of LinkedList structure defination.
 */
var util = __importStar(require("util"));
/**
 * Generic class implementing LinkedList
 */
var LinkedList = /** @class */ (function () {
    function LinkedList(obj) {
        if (obj === void 0) { obj = null; }
        var _this = this;
        // private properties
        this.head = null;
        this.tail = null;
        this.EMPTY_NODE = { value: null, next: null };
        // private methods
        /**
         * Adds wrapped node to the end of the collection
         * Parameter:
         * @param node (Node): node wrapper for each collection unit
         * @returns void
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
         * @returns length of the collection.
         */
        this.slength = function () {
            var count = 0;
            _this.iterateOver(function (_) { return count++; });
            return count;
        };
        /**
         * A Generic iterator function which loops over each el in collection.
         * and apaplies callback to them along the traverse.
         *
         * Able to perform sideeffects
         *
         * @param callback A transform applied to each el in collection.
         * @param node (Node) wrapper for each list component.
         * @returns void
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
         * IT simply return the collection excluding the head el(first element).
         * @param node (Node<T>): node of the collection
         * @returns the list of collection except the head unit
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
         * Method return the collection excluing the tail el(last element).
         * @param node (Node<T>): node of the collection
         * @returns the list of collection except the tail unit
         */
        this.getlTop = function (node) {
            if (node === void 0) { node = _this.head; }
            var temp = new LinkedList();
            while (node.next) {
                temp.append(node.value);
                node = node.next;
            }
            return temp;
        };
        //utility for toSting method
        /**
         * Parses the object type of js to string.
         * @param obj an object type to be transformed
         * Note: obj refers to object not Object
         * @returns stringified object
         */
        this.parseObj = function (obj) {
            return JSON.stringify(obj).split(",").map(function (item) {
                var sp = item.split(":");
                sp[0] = sp[0].replace(/"/g, "");
                return sp.join(":");
            }).join(",").replace(/:/g, ": ").replace(/,/g, ", ").replace(/{/g, "{ ").replace(/}/g, " }").replace(/"/g, "'");
        };
        /**
         * @returns true if collection is empty
         */
        this.isEmpty = function () { return !_this.head; };
        /**
         * @param value (T) => type of unit of collection
         * @returns a Node with the given value
         */
        this.summonNode = function (value) {
            return {
                value: value,
                next: null
            };
        };
        /**
         * Appends the value to the end of the collection.
         * @param value (T) => type of unit of collection
         * @returns a LinkedList collection of the items
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
         * Remove the element if exists in collection.
         * @param value(T): value to be removed
         * @returns a new collection without the eremoved element
         */
        this.remove = function (value) {
            return _this.filter(function (i) { return i !== value; });
        };
        /**
         * Mutable removal of the provided element.
         * @param value (T): value to be removed
         * @returns boolean as result of operation
         */
        this.mRemove = function (value) {
            var deleted = false;
            if (_this.head.value === value) {
                _this.head = _this.head.next;
                deleted = true;
            }
            var currentNode = _this.head || _this.EMPTY_NODE;
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    currentNode.next = currentNode.next.next;
                    deleted = true;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
            if (_this.tail.value === value) {
                _this.tail = _this.EMPTY_NODE;
                deleted = true;
            }
            return deleted;
        };
        /**
         * Display the intuitive representation of LinkedList.
         * @returns the typical linked list view of the collection.
         */
        this.toLLString = function () {
            var temp = "";
            _this.iterateOver(function (i) {
                temp = temp + "[ " + i + " ]" + "->";
            });
            return temp + "null";
        };
        /**
         * Display the collection as string.
         * @returns the list view of the collection.
         */
        this.toString = function () {
            var temp = "[ ";
            _this.iterateOver(function (i) {
                if (Object.prototype.toString.call(i) === '[object Object]' && !(i instanceof LinkedList)) {
                    i = _this.parseObj(i);
                }
                if (Array.isArray(i)) {
                    i = JSON.stringify(i);
                }
                if (i instanceof LinkedList) {
                    i = i.toString();
                }
                temp = temp + i + " ";
            });
            return temp + "]";
        };
        /**
         * converts Array to LinkedList collection.
         * @param arr (Array<T>): Array of unit type T.
         * @returns  a LinkedList form of the default array type of js.
         */
        this.fromArray = function (arr) {
            arr.forEach(_this.append);
            return _this;
        };
        /**
         * converts Array to LinkedList collection.
         * @param arr (Array<T>): Array of unit type T.
         * @returns the default array version of the collection.
         */
        this.toArray = function () {
            var temp = [];
            _this.iterateOver(function (_) { return temp.push(_); });
            return temp;
        };
        /**
         * Note: non-recursive implementation
         * @param list (LinkedList<T>): list needed to be appended to the end
         * @returns the transformed or mapped collection of linkedList itself.
         */
        this["++"] = function (list) {
            var node = list.head;
            while (node) {
                _this.append(node.value);
                node = node.next;
            }
            return _this;
        };
        /**
         * Adds to LinkedList together just like string concat.
         * @param list (LinkedList<T>): list needed to be appended to the end
         * @returns the transformed or mapped collection of linkedList itself.
         */
        this["+"] = function (list) {
            if (!list.tail)
                return _this;
            return _this.append(list.lhead)["+"](list.ltail);
        };
        /**
         * Applies the callback to each el in the collection
         * @param arr (Array<T>): Array of unit type T.
         * @param acc accumulator defaults to empty linkedlist.
         * @returns the collection applied to callback for each el.
         */
        this.foreach = function (callback, acc) {
            if (acc === void 0) { acc = new LinkedList(); }
            if (!_this.tail)
                return acc;
            return _this.ltail.foreach(callback, acc["+"](new LinkedList().append(callback(_this.lhead))));
        };
        /**
         * Converts Array to LinkedList collection.:
         * @param arr (Array<T>): Array of unit type T.
         * @param node Defaults to head of collection.
         * @returns the mutated collection.
         */
        this.mforeach = function (callback, node) {
            if (node === void 0) { node = _this.head; }
            if (!node)
                return;
            node.value = callback(node.value);
            _this.mforeach(callback, node.next);
        };
        /**
         * Checks if collection contains the item.
         * @param value (T): find if value exist in the collection.
         * @returns boolean as per result.
         */
        this.contains = function (value) {
            return _this.filter(function (_) { return _ === value; }).length > 0 ? true : false;
        };
        /**
         * Returns the first item found as per predicate.
         * predicate: function to filter the collection.
         * @returns value if found else null.
         */
        this.find = function (predicate) {
            return _this.filter(predicate).length > 0 ? _this.lhead : null;
        };
        /**
         *flatten a single depth of collection
         * @param acc accumulator to flatten the given collection
         * @returns a flatten linkedList of the elements
         */
        this.flatten = function (acc) {
            if (acc === void 0) { acc = new LinkedList(); }
            if (!_this.tail)
                return acc;
            return _this.ltail.flatten(acc["+"](new LinkedList(_this.lhead)));
        };
        obj && Object.assign(this, obj);
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        // Getters
        get: function () {
            return this.slength();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkedList.prototype, "lbottom", {
        get: function () {
            return this.tail.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkedList.prototype, "ltop", {
        get: function () {
            return this.getlTop();
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
    // console log print
    LinkedList.prototype[util.inspect.custom] = function (depth, opts) {
        return this.toString();
    };
    /**
     * Non functional implementation of map
     * @param callback : A call back method applied for each element of the collection.
     * @param node defults to head of the collection.
     * @returns the transformed or mapped collection of linkedList itself.
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
     * Transform a collection of one domain or type to another.
     * @param callback: A call back method applied for each element of the collection.
     * @param acc accumulator defaults to empty linkedlist.
     * @returns the transformed or mapped collection of linkedList itself.
     */
    LinkedList.prototype.map = function (callback, acc) {
        if (acc === void 0) { acc = new LinkedList(); }
        if (!this.tail) {
            return acc;
        }
        return this.ltail.map(callback, acc["+"](new LinkedList().append(callback(this.lhead))));
    };
    /**
     * Filter the el from the collection satisfying the predicate.
     * @param callback: A predicate callback method applied for each element of the collection.
     * @param acc accumulator defaults to empty linkedlist.
     * @returns the filterd collection of linkedList itself which passes the predicate.
     */
    LinkedList.prototype.filter = function (callback, acc) {
        if (acc === void 0) { acc = new LinkedList(); }
        if (!this.tail)
            return acc;
        return callback(this.lhead) ? this.ltail.filter(callback, acc["+"](new LinkedList().append(this.lhead))) : this.ltail.filter(callback, acc);
    };
    /**
     * Reduce the collection to a single value transformed with callback anad accumulated.
     * @param callback: A predicate callback method applied for each element of the collection.
     * @param acc accumulator defaults to null.
     * @returns the reduced collection of linkedList itself which passes the predicate.
     */
    LinkedList.prototype.reduce = function (callback, acc) {
        if (acc === void 0) { acc = null; }
        if (!this.tail)
            return acc;
        return this.ltail.reduce(callback, callback(this.lhead, acc));
    };
    /**
     * A monadic feature that maps and then flattens the collection.
     * @param callback function executed for the elements in the collection
     * @param acc oprtional parameter to accumulate the flatten collection.
     * @returns the flatten collection after being mapped
     */
    LinkedList.prototype.flatmap = function (callback, acc) {
        if (acc === void 0) { acc = new LinkedList(); }
        if (!this.tail)
            return acc;
        return this.ltail.flatmap(callback, acc["+"](callback(this.lhead)));
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;

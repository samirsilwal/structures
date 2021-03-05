"use strict";
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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _head, _tail, _EMPTY_NODE;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
/**
 *  Module of LinkedList structure definition.
 */
const util = __importStar(require("util"));
/**
 * Generic class implementing LinkedList
 */
class LinkedList {
    // Constructor
    constructor(...params) {
        // private properties
        _head.set(this, null);
        _tail.set(this, null);
        _EMPTY_NODE.set(this, { value: null, next: null }
        // Constructor
        );
        // private methods
        /**
         * Adds wrapped node to the end of the collection
         * Parameter:
         * @param node (Node): node wrapper for each collection unit
         * @returns void
         */
        this.appendToEnd = (node) => {
            if (this.slength() === 1) {
                __classPrivateFieldGet(this, _head).next = node;
            }
            else {
                __classPrivateFieldGet(this, _tail).next = node;
            }
            __classPrivateFieldSet(this, _tail, node);
        };
        /**
         * @returns length of the collection.
         */
        this.slength = () => {
            let count = 0;
            this.iterateOver(_ => count++);
            return count;
        };
        /**
         * A Generic iterator function which loops over each el in collection.
         * and applies callback to them along the traverse.
         *
         * Able to perform sideeffects
         *
         * @param callback A transform applied to each el in collection.
         * @param node (Node) wrapper for each list component.
         * @returns void
         */
        this.iterateOver = (callback, node = __classPrivateFieldGet(this, _head)) => {
            if (!node) {
                return;
            }
            callback(node.value);
            this.iterateOver(callback, node.next);
        };
        /**
         * IT simply return the collection excluding the head el(first element).
         * @param node (Node<T>): node of the collection
         * @returns the list of collection except the head unit
         */
        this.getlTail = (node = __classPrivateFieldGet(this, _head).next) => {
            const temp = new LinkedList();
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
        this.getlTop = (node = __classPrivateFieldGet(this, _head)) => {
            const temp = new LinkedList();
            while (node.next) {
                temp.append(node.value);
                node = node.next;
            }
            return temp;
        };
        // utility for toSting method
        /**
         * Parses the object type of js to string.
         * @param obj an object type to be transformed
         * Note: obj refers to object not Object
         * @returns stringified object
         */
        this.parseObj = (obj) => {
            let d = JSON.stringify(obj).split(",").map(item => {
                const sp = item.split(":");
                sp[0] = sp[0].replace(/"/g, "");
                return sp.join(":");
            }).join(",").replace(/:/g, ": ").replace(/,/g, ", ").replace(/{/g, "{ ").replace(/}/g, " }").replace(/"/g, "'");
            return d;
        };
        /**
         * @returns true if collection is empty
         */
        this.isEmpty = () => !__classPrivateFieldGet(this, _head);
        /**
         * @param value (T) => type of unit of collection
         * @returns a Node with the given value
         */
        this.summonNode = (value) => {
            return {
                value,
                next: null
            };
        };
        /**
         * Appends the value to the end of the collection.
         * @param value (T) => type of unit of collection
         * @returns a LinkedList collection of the items
         */
        this.append = (value) => {
            const node = this.summonNode(value);
            if (this.isEmpty()) {
                __classPrivateFieldSet(this, _head, node);
                __classPrivateFieldSet(this, _tail, node);
                return this;
            }
            this.appendToEnd(node);
            return this;
        };
        /**
         * Remove the element if exists in collection.
         * @param value(T): value to be removed
         * @returns a new collection without the eremoved element
         */
        this.remove = (value) => {
            return this.filter(i => i !== value);
        };
        /**
         * Mutable removal of the provided element.
         * @param value (T): value to be removed
         * @returns boolean as result of operation
         */
        this.mRemove = (value) => {
            let deleted = false;
            if (__classPrivateFieldGet(this, _head).value === value) {
                __classPrivateFieldSet(this, _head, __classPrivateFieldGet(this, _head).next);
                deleted = true;
            }
            let currentNode = __classPrivateFieldGet(this, _head) || __classPrivateFieldGet(this, _EMPTY_NODE);
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    currentNode.next = currentNode.next.next;
                    deleted = true;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
            if (__classPrivateFieldGet(this, _tail).value === value) {
                __classPrivateFieldSet(this, _tail, __classPrivateFieldGet(this, _EMPTY_NODE));
                deleted = true;
            }
            return deleted;
        };
        /**
         * Display the intuitive representation of LinkedList.
         * @returns the typical linked list view of the collection.
         */
        this.toLLString = () => {
            let temp = "";
            this.iterateOver(i => {
                temp = temp + "[ " + i + " ]" + "->";
            });
            return temp + "null";
        };
        /**
         * Display the collection as string.
         * @returns the list view of the collection.
         */
        this.toString = () => {
            let temp = "[ ";
            this.iterateOver(i => {
                if (Object.prototype.toString.call(i) === '[object Object]' && !(i instanceof LinkedList)) {
                    i = this.parseObj(i);
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
        this.fromArray = (arr) => {
            arr.forEach(this.append);
            return this;
        };
        /**
         * converts Array to LinkedList collection.
         * @param arr (Array<T>): Array of unit type T.
         * @returns the default array version of the collection.
         */
        this.toArray = () => {
            const temp = [];
            this.iterateOver(_ => temp.push(_));
            return temp;
        };
        /**
         * Adds to LinkedList together just like string concat.
         * @param list (LinkedList<T>): list needed to be appended to the end
         * @returns the transformed or mapped collection of linkedList itself.
         */
        this["+"] = (list) => {
            if (!__classPrivateFieldGet(list, _tail))
                return this;
            return this.append(list.lhead)["+"](list.ltail);
        };
        /**
         * Applies the callback to each el in the collection
         * @param callback A callback applied on each el of list.
         * @returns the collection applied to callback for each el.
         */
        this.mForeach = (callback) => {
            return (function t(l, callback, acc = new LinkedList()) {
                if (!__classPrivateFieldGet(l, _tail))
                    return acc;
                return t(l.ltail, callback, acc["+"](new LinkedList().append(callback(l.lhead))));
            }(this, callback));
        };
        /**
         * Applies the callback to each el in the collection
         * @param callback (Array<T>): Array of unit type T.
         * @returns the collection applied to callback for each el.
         */
        this.foreach = (callback) => {
            this.iterateOver(i => callback(i));
        };
        /**
         * Checks if collection contains the item.
         * @param value (T): find if value exist in the collection.
         * @returns boolean as per result.
         */
        this.contains = (value) => {
            return this.filter(_ => _ === value).length > 0 ? true : false;
        };
        /**
         * Returns the first item found as per predicate.
         * @param predicate: function to filter the collection.
         * @returns value if found else null.
         */
        this.find = (predicate) => {
            const f = this.filter(predicate);
            return f.length > 0 ? f.lhead : null;
        };
        /**
         * flatten a single depth of collection
         * @returns a flatten linkedList of the elements
         */
        this.flatten = () => {
            return (function t(l, acc = new LinkedList()) {
                if (!__classPrivateFieldGet(l, _tail))
                    return acc;
                return t(l.ltail, acc["+"](Object.assign(new LinkedList(), l.lhead)));
            }(this));
        };
        /**
         * Reverses the order of elements in collection.
         * @returns a linlkedlist of values in reverse order.
         */
        this.reverse = () => {
            return (function t(l, acc = new LinkedList()) {
                acc["+"](new LinkedList().append(l.lbottom));
                if (!l.ltop.length)
                    return acc;
                return t(l.ltop, acc);
            }(this));
        };
        /**
        * @index index of the collection to be referenced.
        * @returns a unit element at particular index in the collection.
        */
        this.at = (index) => {
            if (index < 0 || index >= this.length) {
                return null;
            }
            let el = null;
            let i = 0;
            this.foreach(u => {
                if (index === i) {
                    el = u;
                }
                i++;
            });
            return el;
        };
        /**
         * Get a random element from the LinkedList.
         * @returns Random value from the collection.
         */
        this.getRandom = () => {
            return this.at(Math.floor(Math.random() * this.length));
        };
        /**
         * Allows to take n elements from head of the collection.
         * @param n Number of element from front of collection to extract.
         * @returns A collection of extracted n elements.
         */
        this.take = (n) => {
            if (n > this.length || n <= 0)
                return null;
            return (function t(l, n, acc = new LinkedList()) {
                if (n === 0)
                    return acc;
                return t(l.ltail, n - 1, acc.append(l.lhead));
            }(this, n));
        };
        /**
         * Allows to take n elements from tail of the collection.
         * @param n Number of element from back of collection to extract.
         * @returns A collection of extracted n elements.
         */
        this.pluck = (n) => {
            if (n > this.length || n <= 0)
                return null;
            return (function t(l, n, acc = new LinkedList()) {
                if (n === 0)
                    return acc.reverse();
                return t(l.ltop, n - 1, acc.append(l.lbottom));
            }(this, n));
        };
        /**
         * Find the cartesian product or cross product of the elements with given collection.
         * @param l collection with ahick cross product is to be done.
         * @returns A Linkelist of entire sample spaces of cross product collection.
         */
        this.cross = (l) => {
            return (function t(l1, l2, acc = new LinkedList()) {
                if (!__classPrivateFieldGet(l1, _tail))
                    return acc;
                l2.foreach(i => acc.append(new LinkedList().append(l1.lhead)["+"](new LinkedList().append(i))));
                return t(l1.ltail, l2, acc);
            }(this, l));
        };
        /**
         * Empty the collection.
         * @returns the emptied list from the given collection.
         */
        this.empty = () => {
            this.foreach(this.mRemove);
            return this;
        };
        /**
         * Check if all elements in list satisfy a predicate.
         * @param pred A predicate applied to all elements in list.
         * @returns true if predicate holds for all elements in list else false.
         */
        this.forall = (pred) => {
            return this.filter(pred).length === this.length;
        };
        /**
         * Check if any element in list satisfy a predicate.
         * @param pred A predicate applied to all elements in list.
         * @returns true if predicate holds for any one element in list else false.
         */
        this.exists = (pred) => {
            return this.filter(pred).length > 0;
        };
        /**
         * Split the given list into 2 lists.
         * @param n number of elements to be included in first list.
         * @returns  a splitted list with first containing n elements and rest in second list.
         */
        this.splitAt = (n) => {
            return new LinkedList().append(this.take(n)).append(this.pluck(this.length - n));
        };
        /**
         * Computes a prefix scan of the elements of the collection.
         * @param i initialization for the operator operation.
         * @param op A binary operation performed on each scanned elements.
         * @returns A List of the operator transformed el in each scan from left to right
         *
         * Note: the bottom of collection conatains the final accumulated result.
        */
        this.scanLeft = (i) => {
            if (this.forall(i => typeof i !== "number" && typeof i !== "string"))
                return;
            return (function t(l, i) {
                return (op, acc = new LinkedList()) => {
                    acc.append(op(i, l.lhead));
                    if (!l.ltail.length)
                        return acc;
                    return t(l.ltail, op(i, l.lhead))(op, acc);
                };
            }(this, i));
        };
        /**
         * Computes a postfix scan of the elements of the collection.
         * @param i initialization for the operator operation.
         * @param op A binary operation performed on each scanned elements.
         * @returns A List of the operator transformed el in each scan from right to left.
         *
         * Note: the head of the collection contains the final accumulated result.
        */
        this.scanRight = (i) => {
            if (this.forall(i => typeof i !== "number" && typeof i !== "string"))
                return;
            return (function t(l, i) {
                return (op, acc = new LinkedList()) => {
                    acc.append(op(i, l.lbottom));
                    if (!l.ltop.length)
                        return acc.reverse();
                    return t(l.ltop, op(i, l.lbottom))(op, acc);
                };
            }(this, i));
        };
        /**
         * Get the longest prefix from the given collection passing the predicate.
         * @param op predicate applied to each element in the collection.
         * @returns a LinkedList of el satisfying the predicate until first unsatisfying occour.
         */
        this.dropWhile = (op) => {
            return (function t(l, op, acc = new LinkedList()) {
                if (!__classPrivateFieldGet(l, _tail) || !op(l.lhead))
                    return acc;
                return t(l.ltail, op, acc.append(l.lhead));
            }(this, op));
        };
        /**
         * Get the longest prefix from the given collection until traverse the el passing predicate.
         * @param op predicate applied to each elem ent in the collection.
         * @returns a LinkedList of el prefixing the first el satisfying the predicate.
         */
        this.dropUntil = (op) => {
            return (function t(l, op, acc = new LinkedList()) {
                if (!__classPrivateFieldGet(l, _tail) || op(l.lhead))
                    return acc;
                return t(l.ltail, op, acc.append(l.lhead));
            }(this, op));
        };
        /**
         * Removes the element from the beginning from the collection.
         * @returns the element removed from the list.
         */
        this.shift = () => {
            const el = this.lhead;
            return this.mRemove(this.lhead) ? el : null;
        };
        /**
         * Insert the element at the beginning of the collection.
         * @param val elements to be inserted in front of the list
         * mutate the collection itself.
         */
        this.unShift = (...val) => {
            const temp = this.map(x => x);
            this.empty();
            this.fromArray(val)["+"](temp);
        };
        /**
         * Sorts the given element in the collection. default sorts to ascending order.
         * for sorting object enter the key value in `key` filed for comparison. and give null to `op`
         *
         * @param op comparison operator to distinguish the comparison for sorting
         * @param key key of the object
         */
        this.sort = (op, key) => {
            if (this.length === 0) {
                return new LinkedList();
            }
            if (Object.prototype.toString.call(this.lhead) === '[object Object]' && key != null) {
                op = (a, b) => {
                    if (a[key] > b[key])
                        return 1;
                    else if (a[key] < b[key])
                        return -1;
                    else
                        return 0;
                };
            }
            return (function mergeSort(l, op = (a, b) => a - b) {
                let n = Math.floor(l.length / 2);
                if (n === 0) {
                    return l;
                }
                else {
                    const merge = (l1, l2) => {
                        if (l2 === null || l2 === undefined || l2.length <= 0)
                            return l1;
                        if (l1 === null || l1 === undefined || l1.length <= 0)
                            return l2;
                        return op(l1.lhead, l2.lhead) < 0 ? new LinkedList().append(l1.lhead)["+"](merge(l1.ltail, l2)) : new LinkedList().append(l2.lhead)["+"](merge(l1, l2.ltail));
                    };
                    let s = l.splitAt(n);
                    return merge(mergeSort(s.at(0), op), mergeSort(s.at(1), op));
                }
            }(this, op));
        };
        if (params.length > 0) {
            this.fromArray(params);
        }
    }
    // Getters
    /**
     * @returns the length of the collection.
     */
    get length() {
        return this.slength();
    }
    /**
     * @returns the tail value of the collection.
     */
    get lbottom() {
        return __classPrivateFieldGet(this, _tail).value;
    }
    /**
     * @returns the collection with all elements except the last.
     */
    get ltop() {
        return this.getlTop();
    }
    /**
     * @returns the first value of the element.
     */
    get lhead() {
        return __classPrivateFieldGet(this, _head).value;
    }
    /**
     * @returns the collection with all elements except the first.
     */
    get ltail() {
        return this.getlTail();
    }
    // console log print
    [(_head = new WeakMap(), _tail = new WeakMap(), _EMPTY_NODE = new WeakMap(), util.inspect.custom)](depth, opts) {
        return this.toString();
    }
    // TODO: implement filter and reduce.....
    // make these methods functional
    /**
     * Transform a collection of one domain or type to another.
     * @param callback: A call back method applied for each element of the collection.
     * @returns the transformed or mapped collection of linkedList itself.
     */
    map(callback) {
        return (function t(l, callback, acc = new LinkedList()) {
            if (!__classPrivateFieldGet(l, _tail))
                return acc;
            return t(l.ltail, callback, acc["+"](new LinkedList().append(callback(l.lhead))));
        }(this, callback));
    }
    /**
     * Filter the el from the collection satisfying the predicate.
     * @param callback: A predicate callback method applied for each element of the collection.
     * @returns the filtered collection of linkedList itself which passes the predicate.
     */
    filter(callback) {
        return (function t(l, callback, acc = new LinkedList()) {
            if (!__classPrivateFieldGet(l, _tail))
                return acc;
            return callback(l.lhead) ? t(l.ltail, callback, acc["+"](new LinkedList().append(l.lhead))) : t(l.ltail, callback, acc);
        }(this, callback));
    }
    /**
     * Reduce the collection to a single value transformed with callback anad accumulated.
     * @param callback: A predicate callback method applied for each element of the collection.
     * @returns the reduced collection of linkedList itself which passes the predicate.
     */
    reduce(callback) {
        return (function t(l, callback, acc = null) {
            if (!__classPrivateFieldGet(l, _tail))
                return acc;
            return t(l.ltail, callback, callback(l.lhead, acc));
        }(this, callback));
    }
    /**
     * A monadic feature that maps and then flattens the collection.
     * @param callback function executed for the elements in the collection
     * @returns the flatten collection after being mapped.
     */
    flatmap(callback) {
        return (function t(l, callback, acc = new LinkedList()) {
            if (!__classPrivateFieldGet(l, _tail))
                return acc;
            return t(l.ltail, callback, acc["+"](callback(l.lhead)));
        }(this, callback));
    }
    /**
     * Groups the each element of two list into single.
     * Both should have same length if not returns null.
     * @param l linklist collection that is to be zipped.
     * @returns a collection of collections of zipped elements.
     */
    zip(l) {
        if (this.length != l.length) {
            return null;
        }
        return (function t(l1, l2, acc = new LinkedList()) {
            if (!__classPrivateFieldGet(l1, _tail)) {
                return acc;
            }
            return t(l1.ltail, l2.ltail, acc.append(new LinkedList().append(l1.lhead)["+"](new LinkedList().append(l2.lhead))));
        }(this, l));
    }
    /**
     * Generates a sequence of integers from 0 which can be initially transformed.
     * @param l length of the dynamic list to be generated.
     * @param p transform function applied dto each item in genetrated collection.
     * @returns A LinkedList of numbers or transformed series of numbers.
     */
    static generator(l, p) {
        return (function t(l, p, temp = 0, acc = new LinkedList()) {
            if (temp === l)
                return acc;
            return t(l, p, temp + 1, acc["+"](new LinkedList(p(temp))));
        }(l, p));
    }
}
exports.LinkedList = LinkedList;

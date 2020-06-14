"use strict";
/**
 *  Module of LinkedList structure defination.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        var _this = this;
        // private EMPTY_NODE: SNode<T> = { value: null, next: null }
        this.head = null;
        this.tail = null;
        this.summonNode = function (value) {
            return {
                value: value,
                next: null
            };
        };
        this.appendToEnd = function (sNode) {
            _this.tail = sNode;
            _this.tail.next = sNode;
        };
        // private deleteFromHead = (value: T): boolean => {
        //     let deleted: boolean = false
        //     while (this.head && this.head.value) {
        //         deleted = true
        //         this.head = this.head.next
        //     }
        //     return deleted
        // }
        this.isEmpty = function () { return !_this.head; };
        this.append = function (value) {
            var sNode = _this.summonNode(value);
            if (_this.isEmpty()) {
                _this.head = sNode;
                _this.tail = sNode;
                return _this;
            }
            _this.appendToEnd(sNode);
            return _this;
        };
        // public fromArray = (value: T[]): LinkedList<T> => {
        //     value.forEach(val => this.append(val));
        //     return this
        // }
        // public *items() {
        //     let sNode = this.head
        //     while (sNode) {
        //         yield sNode
        //         sNode = sNode.next
        //     }
        // }
        // public delete = (value: T): boolean => {
        //     let deleted: boolean = false;
        //     if (this.isEmpty()) return deleted;
        //     deleted = this.deleteFromHead(value)
        //     let current = this.head || this.EMPTY_NODE
        //     while (current.next) {
        //         if (current.next.value === value) {
        //             deleted = true
        //             current.next = current.next.next
        //         } else {
        //             current = current.next
        //         }
        //     }
        //     if (this.tail.value === value) {
        //         this.tail = current
        //     }
        //     return deleted
        // }
        // public find = (compare: STFunction<T, boolean>) => {
        //     if (this.isEmpty()) {
        //         return null
        //     }
        //     let node = this.head
        //     while (node) {
        //         if (compare(node.value)) {
        //             return node
        //         }
        //         node = node.next
        //     }
        //     return null
        // }
    }
    return LinkedList;
}());
exports.LinkedList = LinkedList;

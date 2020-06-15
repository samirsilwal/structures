"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Initial setup");
var ll_1 = require(".//ll");
var mylist = new ll_1.LinkedList();
mylist.append(1);
mylist.append(2);
mylist.append(3);
console.log(mylist.length);
var mylist1 = new ll_1.LinkedList().fromArray([1, 12, 10, 4, 5, 8]);
console.log(mylist1.lhead);
console.log(mylist1.ltail.toString());
var temp = new ll_1.LinkedList();
console.log("test map");
console.log(mylist1.map(function (x) { return x + 10 + " hello "; }).toString());
console.log("test filter");
console.log(mylist1.filter(function (x) { return x % 2 === 0; }).toString());
console.log("test reduce");
console.log(mylist1.reduce(function (_, acc) { return acc + _; }).toString());
console.log("test ++");
console.log(mylist1["++"](temp.fromArray([1, 2, 3])).toString());
console.log("test foreach immutable");
var testlist = new ll_1.LinkedList().fromArray([1, 2, 3, 4]);
var t = testlist.foreach(function (x) { return x * 5; }).toString();
console.log(t);
console.log("test foreach mutable");
var testlistm = new ll_1.LinkedList().fromArray([1, 2, 3, 4]);
testlistm.mforeach(function (x) { return x * 5; });
console.log(testlistm.toString());
console.log("test toarray");
var a = testlistm.toArray();
console.log(a);
console.log("test remove value");
console.log(testlistm.remove(10).toString());
console.log("test remove  mutable");
console.log(testlistm.mRemove(10));
console.log("test contains");
console.log(testlistm.contains(20));
console.log(testlistm.contains(0));
var flattest = new ll_1.LinkedList().fromArray(["apple", "banana", "orange"]);
console.log(flattest.map(function (x) { return x.toUpperCase(); }).toString());
var mylisttemp = flattest.map(function (x) { return new ll_1.LinkedList().fromArray(x.split("")).map(function (y) { return y.toUpperCase(); }); });
console.log(mylisttemp.toString());
console.log(mylisttemp.flatten().toString());
var testing = new ll_1.LinkedList().fromArray(["superman", "batman", "antman"]);
console.log(testing.ltop.toString());
console.log(testing.lbottom);
console.log("test flatmap");
console.log(testing.flatmap(function (x) { return new ll_1.LinkedList().fromArray(x.split("")).map(function (y) { return y.toUpperCase(); }); }).toString());
var objtest = new ll_1.LinkedList();
objtest.append({
    name: "samir",
    num: 1
});
objtest.append({
    name: "samir",
    num: 2
});
console.log(objtest.toString());
console.log([
    "samir",
    1
] + "");

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("../stack");
test('test instanceof', function () {
    var t = new stack_1.Stack();
    expect(t).toBeInstanceOf(stack_1.Stack);
});
test('test size getter', function () {
    var t = new stack_1.Stack().push(5).push(6).push(7);
    expect(t.size).toBe(3);
});

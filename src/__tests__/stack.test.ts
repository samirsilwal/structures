import { Stack } from "../stack"

test('test instanceof', () => {
  const t = new Stack<number>()
  expect(t).toBeInstanceOf(Stack)
});

test('test size getter', () => {
  const t = new Stack<number>().push(5).push(6).push(7)
  expect(t.size).toBe(3)
})

test('test push', () => {
  const t = new Stack<number>().push(5).push(6).push(7)
  expect(t.size).toBe(3)
  expect(t.pop()).toBe(7)
  expect(t.pop()).toBe(6)
  expect(t.pop()).toBe(5)
  expect(t.size).toBe(0)
})

test('test pop', () => {
  const t = new Stack<number>().push(5).push(6).push(7)
  expect(t.size).toBe(3)
  expect(t.pop()).toBe(7)
  expect(t.size).toBe(2)
  expect(t.pop()).toBe(6)
  expect(t.size).toBe(1)
  expect(t.pop()).toBe(5)
  expect(t.size).toBe(0)
})

test("test reverse", () => {
  const t = new Stack<number>().push(5).push(6).push(7)
  const reversed = t.reverse()
  expect(reversed.pop()).toBe(5)
  expect(reversed.pop()).toBe(6)
  expect(reversed.pop()).toBe(7)
})

test('size', () => {
  const stack = new Stack<number>();
  expect(stack.size).toBe(0);
  stack.push(1);
  expect(stack.size).toBe(1);
  stack.push(2);
  expect(stack.size).toBe(2);
  stack.pop();
  expect(stack.size).toBe(1);
  stack.pop();
  expect(stack.size).toBe(0);
});

test('isEmpty', () => {
  const stack = new Stack<number>();
  expect(stack.isEmpty).toBe(true);
  stack.push(1);
  expect(stack.isEmpty).toBe(false);
  stack.pop();
  expect(stack.isEmpty).toBe(true);
});

test('clear', () => {
  const stack = new Stack<number>();
  stack.push(1);
  stack.push(2);
  stack.clear();
  expect(stack.size).toBe(0);
  expect(stack.isEmpty).toBe(true);
});


test('peek', () => {
  const stack = new Stack<number>();
  stack.push(1);
  stack.push(2);
  expect(stack.peek()).toBe(2);
  stack.pop();
  expect(stack.peek()).toBe(1);
  stack.pop();
  expect(stack.peek()).toBeUndefined();
});

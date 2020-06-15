import { Stack } from "../stack"


test('test instanceof', () => {
  const t = new Stack<number>()
  expect(t).toBeInstanceOf(Stack)
});

test('test size getter', () => {
  const t = new Stack<number>().push(5).push(6).push(7)
  expect(t.size).toBe(3)
})
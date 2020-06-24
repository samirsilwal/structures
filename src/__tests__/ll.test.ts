import { LinkedList } from "../ll"

test("test instance of", () => {
    const ll = new LinkedList<number>()

    expect(ll).toBeInstanceOf(LinkedList)
});

test("test getter length", () => {
    const ll = new LinkedList<number>().fromArray([1, 2, 3, 4, 5])

    expect(ll.length).toBe(5)
});

test("test getter lbottom", () => {
    const ll = new LinkedList<string>().fromArray(["demo", "test", "just", "a", "string"])

    expect(ll.lbottom).toBe("string")
});

test("test getter ltop", () => {
    const ll = new LinkedList<string>().fromArray(["demo", "test", "just", "a", "string"])

    expect(ll.ltop.toString()).toBe(new LinkedList<string>().fromArray(["demo", "test", "just", "a"]).toString())
});

test("test getter lhead", () => {
    const ll = new LinkedList<string>().fromArray(["demo", "test", "just", "a", "string"])

    expect(ll.lhead).toBe("demo")
});

test("test getter ltail", () => {
    const ll = new LinkedList<string>().fromArray(["demo", "test", "just", "a", "string"])

    expect(ll.ltail.toString()).toBe(new LinkedList<string>().fromArray(["test", "just", "a", "string"]).toString())
});

test("test isEmpty", () => {
    const ll = new LinkedList<string>().fromArray(["demo", "test", "just", "a", "string"])

    expect(ll.isEmpty()).toBe(false)
    ll.empty()

    expect(ll.isEmpty()).toBe(true)
});

test("test append", () => {
    const ll = new LinkedList<number>().append(5)

    expect(ll.lbottom).toBe(5)
    ll.append(6)

    expect(ll.lbottom).toBe(6)
});

test("test remove", () => {
    const ll = new LinkedList<number>().fromArray([1, 2, 3, 4, 5])

    expect(ll.remove(4).toString()).toBe(new LinkedList<number>().fromArray([1, 2, 3, 5]).toString())
})

test("test mutable remove", () => {
    const ll = new LinkedList<number>().fromArray([1, 2, 3, 4, 5])
    ll.mRemove(2)

    expect(ll.toString()).toBe(new LinkedList<number>().fromArray([1, 3, 4, 5]).toString())
})

test("test toLLString", () => {
    const ll = new LinkedList<number>().fromArray([1, 2])

    expect(ll.toLLString()).toBe('[ 1 ]->[ 2 ]->null')
})

test("test to String", () => {
    const ll = new LinkedList<number>().fromArray([1, 2, 3, 4])

    expect(ll.toString()).toBe("[ 1 2 3 4 ]")
    ll.empty()

    expect(ll.toString()).toBe("[ ]")
})

test("test  toArray", () => {
    const ll = new LinkedList<number>().fromArray([1, 2, 3, 4])
    let a = [1, 2, 3, 4]

    expect(ll.toArray()).toStrictEqual(a)
})

test("test + operator", () => {
    const ll = new LinkedList<number>().fromArray([1, 2, 3, 4])
    const a = ll["+"](new LinkedList<number>().fromArray([5, 6, 7, 8]))

    expect(a.toString()).toBe('[ 1 2 3 4 5 6 7 8 ]')
})

test("test map", () => {
    const ll = new LinkedList<number>().fromArray([1, 2, 3, 4])
    const t = ll.map(x => "hello "+ x)

    expect(t.toString()).toBe('[ hello 1 hello 2 hello 3 hello 4 ]')
})

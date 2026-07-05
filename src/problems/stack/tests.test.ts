import { describe, expect, it } from "vitest";
import Stack from "./solution.js";

describe("stack", () => {
  it("starts empty", () => {
    const stack = new Stack<number>();

    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  it("pops values in last-in-first-out order", () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it("peeks at the top value without removing it", () => {
    const stack = new Stack<string>();

    stack.push("bottom");
    stack.push("top");

    expect(stack.peek()).toBe("top");
    expect(stack.size()).toBe(2);
    expect(stack.pop()).toBe("top");
  });

  it("returns undefined when peeking or popping an empty stack", () => {
    const stack = new Stack<number>();

    expect(stack.peek()).toBeUndefined();
    expect(stack.pop()).toBeUndefined();
  });

  it("updates size and empty state as values are added and removed", () => {
    const stack = new Stack<number>();

    stack.push(10);
    stack.push(20);

    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(2);

    expect(stack.pop()).toBe(20);
    expect(stack.size()).toBe(1);

    expect(stack.pop()).toBe(10);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  it("does not expose stale values after being drained", () => {
    const stack = new Stack<string>();

    stack.push("old bottom");
    stack.push("old top");

    expect(stack.pop()).toBe("old top");
    expect(stack.pop()).toBe("old bottom");

    expect(stack.peek()).toBeUndefined();
    expect(stack.pop()).toBeUndefined();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  it("clears exposed endpoint references after the last value is popped", () => {
    const stack = new Stack<string>() as Stack<string> & {
      head?: unknown;
      tail?: unknown;
      top?: unknown;
    };

    stack.push("stale");
    expect(stack.pop()).toBe("stale");

    expect(stack.head).toBeUndefined();
    expect(stack.tail).toBeUndefined();
    expect(stack.top).toBeUndefined();
  });

  it("uses newly pushed values after the stack becomes empty", () => {
    const stack = new Stack<string>();

    stack.push("stale");
    expect(stack.pop()).toBe("stale");

    stack.push("fresh");

    expect(stack.peek()).toBe("fresh");
    expect(stack.size()).toBe(1);
    expect(stack.pop()).toBe("fresh");
    expect(stack.pop()).toBeUndefined();
    expect(stack.size()).toBe(0);
  });

  it("keeps the top reference current through interleaved operations", () => {
    const stack = new Stack<string>();

    stack.push("a");
    stack.push("b");
    expect(stack.pop()).toBe("b");

    stack.push("c");

    expect(stack.peek()).toBe("c");
    expect(stack.pop()).toBe("c");
    expect(stack.peek()).toBe("a");
    expect(stack.pop()).toBe("a");
    expect(stack.peek()).toBeUndefined();
    expect(stack.size()).toBe(0);
  });

  it("supports object values through generics", () => {
    type Task = { id: number; title: string };
    const stack = new Stack<Task>();
    const first = { id: 1, title: "write tests" };
    const second = { id: 2, title: "implement stack" };

    stack.push(first);
    stack.push(second);

    expect(stack.peek()).toBe(second);
    expect(stack.pop()).toBe(second);
    expect(stack.pop()).toBe(first);
  });
});

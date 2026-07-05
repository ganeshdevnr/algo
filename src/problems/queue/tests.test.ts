import { describe, expect, it } from "vitest";
import Queue from "./solution.js";

describe("queue", () => {
  it("starts empty", () => {
    const queue = new Queue<number>();

    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });

  it("dequeues values in first-in-first-out order", () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  it("peeks at the front value without removing it", () => {
    const queue = new Queue<string>();

    queue.enqueue("first");
    queue.enqueue("second");

    expect(queue.peek()).toBe("first");
    expect(queue.size()).toBe(2);
    expect(queue.dequeue()).toBe("first");
  });

  it("returns undefined when peeking or dequeuing an empty queue", () => {
    const queue = new Queue<number>();

    expect(queue.peek()).toBeUndefined();
    expect(queue.dequeue()).toBeUndefined();
  });

  it("updates size and empty state as values are added and removed", () => {
    const queue = new Queue<number>();

    queue.enqueue(10);
    queue.enqueue(20);

    expect(queue.isEmpty()).toBe(false);
    expect(queue.size()).toBe(2);

    expect(queue.dequeue()).toBe(10);
    expect(queue.size()).toBe(1);

    expect(queue.dequeue()).toBe(20);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });

  it("does not expose stale values after being drained", () => {
    const queue = new Queue<string>();

    queue.enqueue("old front");
    queue.enqueue("old back");

    expect(queue.dequeue()).toBe("old front");
    expect(queue.dequeue()).toBe("old back");

    expect(queue.peek()).toBeUndefined();
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.isEmpty()).toBe(true);
  });

  it("clears exposed endpoint references after the last value is dequeued", () => {
    const queue = new Queue<string>() as Queue<string> & {
      head?: unknown;
      tail?: unknown;
    };

    queue.enqueue("stale");
    expect(queue.dequeue()).toBe("stale");

    expect(queue.tail).toBeUndefined();
    expect(queue.head).toBeUndefined();
  });

  it("uses newly enqueued values after the queue becomes empty", () => {
    const queue = new Queue<string>();

    queue.enqueue("stale");
    expect(queue.dequeue()).toBe("stale");

    queue.enqueue("fresh");

    expect(queue.peek()).toBe("fresh");
    expect(queue.dequeue()).toBe("fresh");
    expect(queue.dequeue()).toBeUndefined();
  });

  it("keeps the front reference current through interleaved operations", () => {
    const queue = new Queue<string>();

    queue.enqueue("a");
    queue.enqueue("b");
    expect(queue.dequeue()).toBe("a");

    queue.enqueue("c");

    expect(queue.peek()).toBe("b");
    expect(queue.dequeue()).toBe("b");
    expect(queue.peek()).toBe("c");
    expect(queue.dequeue()).toBe("c");
    expect(queue.peek()).toBeUndefined();
  });

  it("supports object values through generics", () => {
    type Task = { id: number; title: string };
    const queue = new Queue<Task>();
    const first = { id: 1, title: "write tests" };
    const second = { id: 2, title: "implement queue" };

    queue.enqueue(first);
    queue.enqueue(second);

    expect(queue.peek()).toBe(first);
    expect(queue.dequeue()).toBe(first);
    expect(queue.dequeue()).toBe(second);
  });
});

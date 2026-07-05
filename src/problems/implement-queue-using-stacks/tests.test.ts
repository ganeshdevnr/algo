import { describe, expect, it, vi } from "vitest";
import MyQueue from "./solution.js";

type Command = "MyQueue" | "push" | "pop" | "peek" | "empty";

function runCommands(commands: Command[], values: number[][]): Array<number | boolean | null> {
  let queue: MyQueue | undefined;

  return commands.map((command, index) => {
    if (command === "MyQueue") {
      queue = new MyQueue();
      return null;
    }

    if (!queue) {
      throw new Error("Queue must be initialized before running commands");
    }

    if (command === "push") {
      queue.push(values[index][0]);
      return null;
    }

    return queue[command]();
  });
}

describe("implement-queue-using-stacks", () => {
  it("matches the example command sequence", () => {
    expect(
      runCommands(["MyQueue", "push", "push", "peek", "pop", "empty"], [[], [1], [2], [], [], []]),
    ).toEqual([null, null, null, 1, 1, false]);
  });

  it("starts empty", () => {
    const queue = new MyQueue();

    expect(queue.empty()).toBe(true);
  });

  it("pops values in first-in-first-out order", () => {
    const queue = new MyQueue();

    queue.push(1);
    queue.push(2);
    queue.push(3);

    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);
  });

  it("peeks at the front value without removing it", () => {
    const queue = new MyQueue();

    queue.push(4);
    queue.push(5);

    expect(queue.peek()).toBe(4);
    expect(queue.peek()).toBe(4);
    expect(queue.pop()).toBe(4);
    expect(queue.peek()).toBe(5);
  });

  it("tracks empty state after pushes and pops", () => {
    const queue = new MyQueue();

    expect(queue.empty()).toBe(true);

    queue.push(6);
    expect(queue.empty()).toBe(false);

    expect(queue.pop()).toBe(6);
    expect(queue.empty()).toBe(true);
  });

  it("handles interleaved pushes, peeks, and pops", () => {
    const queue = new MyQueue();

    queue.push(1);
    queue.push(2);
    expect(queue.pop()).toBe(1);

    queue.push(3);
    expect(queue.peek()).toBe(2);

    queue.push(4);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);

    queue.push(5);
    expect(queue.peek()).toBe(4);
    expect(queue.pop()).toBe(4);
    expect(queue.pop()).toBe(5);
    expect(queue.empty()).toBe(true);
  });

  it("uses newly pushed values after the queue becomes empty", () => {
    const queue = new MyQueue();

    queue.push(7);
    expect(queue.pop()).toBe(7);
    expect(queue.empty()).toBe(true);

    queue.push(8);
    expect(queue.peek()).toBe(8);
    expect(queue.pop()).toBe(8);
    expect(queue.empty()).toBe(true);
  });

  it("handles all allowed values", () => {
    const queue = new MyQueue();

    for (let value = 1; value <= 9; value += 1) {
      queue.push(value);
    }

    for (let value = 1; value <= 9; value += 1) {
      expect(queue.pop()).toBe(value);
    }

    expect(queue.empty()).toBe(true);
  });

  it("handles the maximum number of calls", () => {
    const queue = new MyQueue();

    for (let value = 1; value <= 50; value += 1) {
      queue.push((value % 9) + 1);
    }

    for (let value = 1; value <= 50; value += 1) {
      expect(queue.pop()).toBe((value % 9) + 1);
    }

    expect(queue.empty()).toBe(true);
  });

  it("uses amortized stack operations instead of moving every element on every pop", () => {
    const queue = new MyQueue();
    const inputPushSpy = vi.spyOn(queue.stack_in, "push");
    const inputPopSpy = vi.spyOn(queue.stack_in, "pop");
    const outputPushSpy = vi.spyOn(queue.stack_out, "push");
    const outputPopSpy = vi.spyOn(queue.stack_out, "pop");

    try {
      const poppedValues: number[] = [];

      for (let value = 1; value <= 50; value += 1) {
        queue.push((value % 9) + 1);
      }

      for (let value = 1; value <= 50; value += 1) {
        poppedValues.push(queue.pop());
      }

      expect(poppedValues).toEqual(Array.from({ length: 50 }, (_, index) => ((index + 1) % 9) + 1));
      expect(
        inputPushSpy.mock.calls.length +
          inputPopSpy.mock.calls.length +
          outputPushSpy.mock.calls.length +
          outputPopSpy.mock.calls.length,
      ).toBeLessThanOrEqual(200);
    } finally {
      inputPushSpy.mockRestore();
      inputPopSpy.mockRestore();
      outputPushSpy.mockRestore();
      outputPopSpy.mockRestore();
    }
  });
});

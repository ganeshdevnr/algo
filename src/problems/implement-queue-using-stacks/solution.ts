export default class MyQueue {
  stack_in: number[] = [];
  stack_out: number[] = [];

  push(x: number): void {
    this.stack_in.push(x);
  }

  pop(): number {
    if (this.empty()) return 0;

    this._drain();

    return this.stack_out.pop() as number;
  }

  _drain(): void {
    if (this.stack_out.length === 0) {
      while (this.stack_in.length > 0) {
        this.stack_out.push(this.stack_in.pop() as number);
      }
    }
  }

  peek(): number {
    if (this.empty()) return 0;

    this._drain();

    return this.stack_out[this.stack_out.length - 1];
  }

  empty(): boolean {
    return this.stack_in.length === 0 && this.stack_out.length === 0;
  }
}

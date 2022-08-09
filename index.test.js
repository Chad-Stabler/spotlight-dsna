const { Stack, Queue } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  it('stack pop should remove the last item from the stack', () => {
    const stack = new Stack();
    stack.push(3);
    stack.push(2);
    stack.pop();
    expect(stack.peek()).toEqual(3);
  })
  it('queue enqueue should add a new item to the queue', () => {
    const queue = new Queue();

    queue.enqueue('dog');

    expect(queue.peek()).toEqual('dog');
  })
  // add more tests here...
});

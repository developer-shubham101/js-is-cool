
/*
JavaScript is single threaded. so it needs event loop to run asynchronous (Multi Thread) code.

JavaScript first runs synchronous code, then it queue asynchronous code to call later.
Asynchronous code is called/executed by event loop.
System/Browser takes synchronous code and put them as tasks. then these tasks are put them into queue.

The Event Loop has one simple job — to monitor the is there any task to handle.

System/Browser push the task to call stack.
Then the event loop will check the call stack and execute the task.
Then it waits for the next task to be pushed to the call stack.




Asynchronous tasks are divided into two type of tasks Micro tasks and Macro tasks.

Micro tasks are tasks that are executed while the event loop is busy.
Micro tasks are used to keep the UI responsive.
Micro tasks has higher priority than Macro tasks.
Micro tasks are executed before Macro tasks.
Micro tasks are executed in the order they are queued.



Macro tasks are tasks that are executed after the event loop is idle.
Macro tasks are used to keep the CPU busy.
Macro tasks has lower priority than Micro tasks.
Macro tasks are executed after Micro tasks.
Macro tasks are executed in the order they are queued.



*/


console.log('Synchronous 1');


setTimeout(_ => console.log(`Timeout 2.1`), 0);
setTimeout(_ => console.log(`Timeout 2.2`), 0);


Promise.resolve().then(_ => console.log('Promise 3.1')); // microtask
Promise.resolve().then(_ => console.log('Promise 3.2')); // microtask


console.log('Synchronous 4');



/* console.log("Before enqueueing the microtask");
queueMicrotask(() => {
  console.log("The microtask has run.")
});
console.log("After enqueueing the microtask"); */

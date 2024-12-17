**Garbage Collection (GC)** in JavaScript is a process used to automatically manage memory by removing objects that are no longer in use. This helps developers avoid memory leaks and ensures efficient use of memory.

### Key Concepts of Garbage Collection

1. **Memory Allocation**: 
   - JavaScript automatically allocates memory when objects and variables are created.
   - For example:
     ```javascript
     let obj = { name: "Alice" }; // Memory is allocated for the object
     ```

2. **Memory Deallocation**:
   - When an object is no longer reachable or usable, the garbage collector deallocates its memory.
   - This process is automatic and handled by the JavaScript engine.

---

### How Garbage Collection Works

Modern JavaScript engines use the **Mark-and-Sweep Algorithm** for garbage collection. This algorithm identifies objects that are still in use and removes those that are unreachable.

#### Mark-and-Sweep Algorithm

1. **Mark Phase**:
   - The garbage collector starts at the **root** (e.g., the `global` object, `window` in browsers, or variables in the call stack).
   - It marks all objects that are reachable directly or indirectly from the root.

2. **Sweep Phase**:
   - Objects that are not marked as reachable are considered garbage and are deallocated.

---

### Reachability
An object is considered *reachable* if:
- It can be accessed directly or indirectly from the **root**.
- Examples of reachable objects:
  - Local variables in functions.
  - Variables in the global scope.
  - Properties of reachable objects.

#### Example:

```javascript
function example() {
  let obj1 = { name: "Alice" }; // Reachable from local variable
  let obj2 = { age: 30 };       // Reachable as obj1's property

  obj1.related = obj2; // obj2 is reachable through obj1
}

example();
// After the function executes, obj1 and obj2 become unreachable and are garbage collected.
```

In this example, once the function call is complete, the local variables `obj1` and `obj2` are no longer accessible, and the garbage collector removes them from memory.

---

### Garbage Collection Triggers
Garbage collection runs periodically, and you can’t force it explicitly in JavaScript. However, the following scenarios often trigger garbage collection:
1. When the memory usage exceeds a certain threshold.
2. When the CPU or system is idle, allowing the engine to run GC without impacting performance.

---

### Common Causes of Memory Leaks

1. **Global Variables**:
   - Variables unintentionally added to the global scope remain accessible and won’t be garbage collected.
   - Example:
     ```javascript
     function leak() {
       globalVar = "I'm global!"; // `globalVar` leaks into the global scope
     }
     ```

2. **Unreferenced DOM Elements**:
   - Retaining references to removed DOM elements can prevent garbage collection.
     ```javascript
     let elem = document.getElementById("myDiv");
     document.body.removeChild(elem);
     // `elem` still exists in memory unless explicitly dereferenced.
     elem = null;
     ```

3. **Closures**:
   - Improper use of closures can retain references to variables that are no longer needed.
     ```javascript
     function makeClosure() {
       let unused = { data: "I won't be used" };
       return function () {
         console.log("Closure created!");
       };
     }
     const closure = makeClosure();
     // `unused` is retained in memory even though it's not used.
     ```

---

### Best Practices to Avoid Memory Leaks

1. **Avoid Global Variables**:
   - Use `let` or `const` to declare variables in a local scope.

2. **Nullify Unused References**:
   - Set variables to `null` when they are no longer needed.
     ```javascript
     let obj = { name: "Alice" };
     obj = null; // Removes the reference, allowing garbage collection.
     ```

3. **Be Mindful of Event Listeners**:
   - Remove event listeners when they’re no longer needed.
     ```javascript
     let button = document.getElementById("myButton");
     function onClick() {
       console.log("Button clicked!");
     }
     button.addEventListener("click", onClick);
     // Remove the listener when done
     button.removeEventListener("click", onClick);
     ```

4. **Avoid Retaining References**:
   - Be cautious with closures, circular references, and long-lived objects that may unintentionally retain memory.

---

### Summary
JavaScript’s garbage collection is an automatic process based on the **Mark-and-Sweep Algorithm**, which removes unreachable objects from memory. Understanding how GC works and following best practices can help prevent memory leaks, ensuring efficient memory usage in JavaScript applications.
1.What is the difference between instance methods and static methods?

-> Methods written on the class prototype that are used on instances of the class are known as instance methods. On the other hand, static methods are called on the class itself and are declared using the static keyword.


2. How does Javascript handle concurrency?

-> JavaScript is single-threaded, meaning it only performs one thing at a time. However, it can manage several jobs by utilizing an event loop. When an operation requires time, such as retrieving data, it makes use of callbacks or promises to handle the outcome without pausing other processes.


3. What is async/await? How does it differ from using the promise instance methods?

-> Async/Await allows the writing and reading of code that waits for operations to be completed. When a function is marked as async, it will return a promise and wait until the promise is fulfilled before continuing.

Differences from the Promises: The use of.then() and.catch() in promises might result in jumbled, difficult-to-read code. The use of async/await helps the code appear normal.

4. Can you use await outside of an async function?

-> No , we cannot use await outside of a function that is marked with async. Await only works inside these special functions.
If we use it outside of an async function, it will result in a syntax error.

5. What is callback hell and why is it considered a problem?

-> Callback hell is the term for the state in which asynchronous JavaScript programs with heavily nesting callbacks create difficult-to-read and maintain code.  The cause of it is when nested methods like setTimeout or chained are used to manage several asynchronous processes.after which promises callbacks.

Newer asynchronous patterns like Promises, async/await, or libraries for better code organization are used as a result of this complexity,



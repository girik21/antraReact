# How do you decide when to split a component into subcomponents?

- We decide to split a component into subcomponents for the following reasons:

- Reusability: If a specific functionality or code is used to many  times we can follow DRY principle and make it a component for less repetition.

- Scalability and Testing: Breaking into sub-components will make the code readability easier for upgrading a specific functionality or testing it as well.

- Performance : Isolating components can help in optimizing re-renders.

- Readability: If a component is becoming too large and hard to manage.

# What is the difference between state and props?

- Props (Properties) are passed to the component , so basically it can be considered as a foreign/external data that comes from another component or their Parent Component that renders it.

- State is internal to the component and is managed by itself.

- We defined props for a component when we want it to recieve data from whoever that is rendering it. We use state to control to control over some piece of data that it will manage and update.

# How to trigger a re-render?

- Re-render happens when React needs to update the app with some new data. Usually, this happens as a result of a user interacting with the app or some external data

Some ways we can trigger a re-render are:

- Updating State: The use of  "useState" hooks in functional component and "setState" in class components.

- Changing Props: If the parent component passes new props, it will trigger a re-render

# Why do you like React over other front-end libraries and frameworks?

- Component-Based Architecture: Encourages reusable, modular components.
- Virtual DOM: Improves performance by minimizing direct DOM manipulation.
- Rich Ecosystem: Extensive libraries and tools.

# What’s the difference between controlled components and uncontrolled components?

- A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component.

- A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it.

// Controlled:
`<input type="text" value={value} onChange={handleChange} />`

// Uncontrolled:
`<input type="text" defaultValue="foo" ref={inputRef} />`
// Use `inputRef.current.value` to read the current value of <input>

# How to prevent components from unnecessary rerendering?

- React.memo(): Prevents re-renders if props/state haven’t changed.

- `useMemo` and `useCallback`: Memoization hooks to cache values and functions.

# Why are props needed to be immutable?

- Consistency: Props needs to be immutable because it helps us understand how the data is being passed if it is consistent.
- Performance: Easier to determine when components need to re-render.
- Maintainability: Prevents accidental modifications which can lead to bugs.

# Explain the Virtual DOM and how React uses it to improve performance.

- The Virtual DOM is an in-memory representation of the real DOM. React updates the Virtual DOM first, compares it to the previous version (diffing), and then efficiently updates the real DOM with the minimal number of changes required (reconciliation).

- This minimizes direct DOM manipulations, which are costly in terms of performance.





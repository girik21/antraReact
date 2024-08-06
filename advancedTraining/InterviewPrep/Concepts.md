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

# Can you explain the useMemo and useCallback hooks and provide examples of when you might use them?

- useMemo is used to memoize computations that has been executed already. It takes a function and a dependency array and only re-computes if one of the memoized dependencies has changed.

```

import React, { useMemo } from 'react';

function ListComponent({ items }) {
  const sortedList = useMemo(() => {
    // Save the sorting operation
    return items.sort((a, b) => a.value - b.value);
  }, [items]);

  return (
    <ul>
      {sortedList.map(item => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
} ```


- useCallback is used to memoize callback functions. It's particularly useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

import React, { useState, useCallback } from 'react';

import ExpensiveComponent from './ExpensiveComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <ExpensiveComponent onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
}

```

# Explain the concept of Higher-Order Components (HOCs) and provide an example use case.


- Higher-Order Components (HOCs) are functions that take a component and return a new one with extra features. They're like wrappers for your components.

` const withLoading = (Component) => (props) =>
  props.loading ? <LoadingSpinner /> : <Component {...props} /> `
  

# Discuss the differences between React's class components and functional components. Which one do you prefer and why?

React class components vs functional components:

Key differences:

- Syntax: Class components use ES6 classes, functional components are just functions.
- State management: Class components use this.state, functional components use useState hook.
- Lifecycle methods: Class components have lifecycle methods, functional components use useEffect hook.
'this' keyword: Used in class components, not needed in functional components.

Preference: Functional components.
Reasons:

- Simpler syntax and easier to read
- Hooks provide a more flexible way to use state and side effects
- Better performance in some cases
- Align with modern JavaScript practices


# Ensuring code maintainability and scalability:


- Write clean, well-documented code
- Use consistent naming conventions
- Break down complex components into smaller, reusable ones
- Implement proper state management (e.g., Redux for large apps)
- Write unit tests for critical parts of the application
-Use type checking (TypeScript or PropTypes)
- Follow SOLID principles
- Regularly refactor and optimize code
- Use version control effectively
- Conduct code reviews






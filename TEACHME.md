# Lesson Outline

- Do we have any questions since the break?
- How are the sizes of fonts/screens?
- Does everyone have a terminal and editor ready?
- Does anyone know about the topic today?

## Goals of this session

- Introduce you to the new concept of React Hooks
- Show you an example of the useState hook
- Have you refactor a React Class Component to a Function Component using a hook
- Reinforce the approach of unit testing to refactor your code

## What is a Hook?

- A special, built-in React function that allows you to "hook" into the React state and lifecycle without using classes
- A move by React to provide more "convention vs configuration" to building components.

## Why Use Hooks?

- Previously, only Class functions allowed access to lifecycle and side-effect features of React
- Hooks tends to be an approach that reduces lines of code needed to achieve certain goals
- They allow you to use more standard function components throughout your app.

## Other Hooks

### useEffect

- What: Allows you to execute asynchronous or external functions that normally were assigned to componentDidMount or componentDidUpdate
- Example: Pulling data from an API

### useContext

- What: Allows you to subscribe to global state without another library
- Example: Context API or Redux

## Management Considerations

- There are no plans to remove classes from React.
- React Hooks are backwards compatible.
- You must have a version of React > 16.8.0.
- This is a bleeding edge feature. React has changed "recommended approaches" for Component Construction almost annually.

## Other Resources

- [reactjs.org - Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [testdriven.io - Primer on React Hooks](https://testdriven.io/blog/react-hooks-primer/)
- [css-tricks - Intro to React Hooks](https://css-tricks.com/intro-to-react-hooks/)

## Tools Used

- [Create React App - setup/bundling](https://github.com/facebook/create-react-app)
- [Jest - testing](https://jestjs.io/)

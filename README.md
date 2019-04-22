# Learning React Hooks

## Prep The Lab

- Clone the lesson repo into your Training Directory with `git clone https://github.com/wrburgess/react-hooks-lesson`
- Set your terminal to the new directory with `cd react-hooks-lesson`
- Install the necessary packages with `npm install` or `npm i`
- Open your editor in the directory with VS Code `code .` or Sublime `subl .`x
- In your terminal, make sure your local server is running with `npm run start`
- In your terminal, make sure your tests are working with `npm run test`

## Goal

- Refactor the Bottom Component from a React Class Component to a React Function Component with the `useState` hook.

### Steps

1. Make sure your tests are passing with `npm run test`
1. Import the React and hook methods
1. Convert the Bottom Component to a function component
1. Initialize state with the useState hook
1. Switch the results section from an explicit to implicit state variable
1. Edit the `handleClick` function to increment the widgetsCount value using the hook
1. Run your tests and check the UI

### Steps (with hints)

1. Make sure your tests are passing with `npm run test`
1. Import the `React` and `useState` methods from the `react` module (see LeftSide, line 1)
1. Convert the Bottom Component from a class component to a function component (see LeftSide line 3, RightSide line 3)
1. Edit the Bottom Component to initialize state with the useState hook (see RightSide, line 4)
1. Edit the results section to use a component variable without the `this` reference (see RightSide, line 13)
1. Edit the `handleClick` function to increment the widgetsCount value using the hook (see RightSide, line 14)
1. Make sure your tests are passing with `npm run test`
1. Make sure your refactoring works for users with `npm run start`

## Other Resources

- [reactjs.org - Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [testdriven.io - Primer on React Hooks](https://testdriven.io/blog/react-hooks-primer/)
- [css-tricks - Intro to React Hooks](https://css-tricks.com/intro-to-react-hooks/)

## Tools Used

- [Create React App - setup/bundling](https://github.com/facebook/create-react-app)
- [Jest - testing](https://jestjs.io/)

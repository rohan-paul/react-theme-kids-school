#### Notes on the react-scroll package

- activeClass - class applied when element is reached
- to - target to scroll to
- spy - make Link selected when scroll is at its targets position
- smooth - animate the scrolling
- offset - scroll additional px (like padding)
- duration - time of the scroll animation, can be a number or a function

The "to" property is the most important part as it tells the component which element to scroll to. In this case, this will be each of our sections.

With the *offset *property, you can define an additional amount of scrolling to perform to get to each section.

*Duration *is pretty slelf-explanatory, and spy and active class we will come back to in a minute.

Here's an example of the properties that we will use for each Link component. The only difference between them will be the "to" property as they each point to a different section.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

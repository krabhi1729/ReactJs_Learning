## Q: What is `Polyfill`?
Ans:- A `polyfill`, short for "polymer fill," is a term used in web development to refer to a piece of code that provides modern functionality to older web browsers that do not support certain features or APIs natively. It allows developers to use new and advanced features in their web applications while ensuring backward compatibility with older browsers.

`How polyfills work`:

`Detect feature support`: The polyfill first checks if the browser supports the new feature or API natively. If the feature is supported, the polyfill is not executed, and the browser uses its native implementation.

`Provide fallback behavior`: If the feature is not supported, the polyfill kicks in and provides a fallback implementation using standard web technologies. For example, if a browser does not support the `fetch() API` for making network requests, a polyfill can use `XMLHttpRequest` to achieve a similar effect.

`Enable modern functionality`: By providing a fallback for unsupported features, the polyfill ensures that modern functionality is available in older browsers. This allows developers to write code using the latest web standards without worrying about browser compatibility.

`Progressive Enhancement`: Using polyfills follows the concept of progressive enhancement, where developers start with a basic version of their web application that works in all browsers, including older ones. They then use polyfills to add advanced features and improved user experiences for modern browsers that support those features natively.

## Q: What is `Treeshaking`?
Ans:-`Tree shaking` aims to identify and eliminate this dead code during the build process, so it doesn't end up in the final bundle that gets served to users. This can significantly reduce the size of the JavaScript bundle, resulting in faster load times for the application.

When we run the npm build command, the bundler (e.g., Webpack or Rollup) will automatically perform tree shaking as part of the build process. The bundler's configuration is set up to enable tree shaking by default.

## Q: Every bundler has almost same functionality as parcel, then why it is preffered?
Ans:-Parcel is indeed known for its zero-configuration setup and ease of use. It is a "batteries-included" bundler, meaning it comes with built-in support for many common features and optimizations without requiring explicit configuration. This approach can be very appealing, especially for small to medium-sized projects or for developers who prefer a quick and straightforward setup.

While Parcel is an excellent choice for certain use cases, it's essential to understand that not all bundlers have the same functionality as Parcel, and each bundler has its strengths and weaknesses. Some key points to consider:

`Zero Configuration vs. Configuration`: As mentioned, Parcel's main advantage is its zero-configuration setup. However, other bundlers like Webpack and Rollup offer more extensive configurability, which allows fine-tuning and customization of the bundling process for more complex projects or specific optimization requirements.

`Performance`: Parcel is designed to provide fast and efficient bundling out of the box. Other bundlers like Webpack and Rollup can also be highly performant, especially when correctly configured. With explicit configuration, you have more control over performance optimizations, code splitting, and tree shaking.

`Ecosystem and Community`: Webpack and Rollup have been around for a longer time and have established a large and active community. This means you can find more tutorials, documentation, and third-party plugins for various use cases.

`Integration with Other Tools`: Depending on your project's needs, certain bundlers might integrate better with other tools or frameworks. For example, Webpack is commonly used in the React ecosystem, while Rollup is often chosen for creating libraries or smaller bundles.

`Learning Curve`: Parcel's zero-configuration approach makes it easy to get started quickly. However, learning and understanding the configuration and setup of other bundlers can provide valuable knowledge and flexibility in the long run.

## Q :Is `create react app` uses webpack along with babel ?
Ans:-Yes, `Create React App (CRA)` uses both Webpack and Babel under the hood to bundle and transpile the React code. CRA is a popular tool for quickly setting up a modern React application with minimal configuration. It abstracts away the complex Webpack and Babel configurations, allowing developers to focus on writing code rather than dealing with build tool configurations.

## Q : Why React App is faster ?
Ans:-React apps are often considered fast due to various factors, including the use of bundlers, efficient virtual DOM reconciliation, and performance optimizations. Let's explore these factors in more detail:

`Bundlers`: Bundlers like Webpack, which is commonly used with React, help optimize the application by bundling all the JavaScript, CSS, and other assets into smaller and more efficient files. Through `tree shaking`, unused code is eliminated from the final bundle, reducing the overall size and improving loading times. Additionally, bundlers enable code splitting, which means that only the necessary parts of the application are loaded initially, allowing for faster initial page loads.

`Virtual DOM`: React uses a virtual DOM to efficiently update the UI. When the state of a React component changes, React creates a virtual representation of the updated UI and compares it to the previous virtual DOM. It calculates the minimal changes required to update the actual DOM, which results in fewer DOM manipulations and reflows, leading to improved performance.

`Just-in-time Rendering`: React's virtual DOM allows for just-in-time rendering. Instead of re-rendering the entire UI every time there is a change, React only updates the parts of the UI that have changed. This approach reduces unnecessary work and enhances performance.

`React Fiber`: React introduced a new reconciliation engine called React Fiber, which is designed to prioritize and schedule rendering updates. Fiber enables React to break down rendering work into smaller chunks and pause or resume work as needed. This approach improves the application's responsiveness and ensures smoother interactions, even on devices with lower resources.

`Performance Optimizations`: React encourages developers to write performant code by providing hooks like` React.memo()`, which can memoize components to prevent unnecessary re-renders. React also offers the` useEffect() hook`, which allows developers to manage side effects efficiently.

`Fast Refresh`: Create React App and other React development setups support Fast Refresh, a feature that preserves component state while automatically updating the UI during development. This eliminates the need for full page reloads and speeds up the development workflow.

`Component Reusability`: React's component-based architecture promotes reusability. Reusable components help reduce code duplication and improve maintainability. Additionally, using reusable components leads to smaller bundle sizes as the same component logic can be used across different parts of the application.

## Q : Why scripts are created in package.json?
Ans:- The "scripts" section in package.json is used to define various command-line scripts that can be executed using the npm run or yarn run commands. These scripts are useful for automating common tasks during development, testing, building, and deployment of the project.
Each script is defined as a key-value pair in the "scripts" section, where the key is the script's name, and the value is the command to be executed when the script is run.

For example, a simple "scripts" section in package.json may look like this:

```json

{
  "name": "my-node-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "test": "jest",
    "build": "webpack --mode production",
    "lint": "eslint src"
  },
  "dependencies": {
    "express": "^4.17.1",
    "jest": "^27.0.6"
  }
}
```
In this example:

`start`: This script runs the node index.js command, which starts the application.
`test`: This script runs jest to execute the tests for the application.
`build`: This script runs webpack with the --mode production option to build the production version of the application.
`lint`: This script runs eslint to lint the code in the src directory.
To execute these scripts, you can use npm run or yarn run followed by the script name. For example:

```bash

npm run start
npm run test
npm run build
npm run lint
```
## Q : 

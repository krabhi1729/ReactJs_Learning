#  **Q1. What is difference between library and framework?**

A ````library```` is like a toolbox with individual tools that you can choose from and use based on your specific needs. 
It gives you more flexibility and control over the tools you incorporate into your project.

A ````framework```` is like a construction framework that provides a complete blueprint and structure for building a house.
It offers predefined rules, guidelines, and additional features to help you construct the house efficiently and 
consistently.

If you want to use React in your web application, you can include the React library by adding a CDN (Content Delivery Network) link to your HTML file. 
The link will fetch the React library from the CDN and make it available for use in your application.

<!-- HTML -->
````
<script src="https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
````
In this example, the two script tags include the React library and the React-DOM library (used for interacting with the DOM) from the CDN. Once these scripts are loaded, you can use React functions and APIs in your JavaScript code.



# **Q2.What is Emmet?**

````Emmet```` is a plugin for text editors that allows you to quickly create HTML, CSS, and JavaScript code.
Emmet is a powerful and widely used web development tool that helps developers write HTML and CSS code more efficiently. 
It enables you to quickly generate complex code snippets using simple abbreviations. Emmet is supported in various text editors
and integrated development environments (IDEs) to boost productivity and speed up web development workflow.
The main feature of Emmet is its ability to expand abbreviations into fully-formed HTML or CSS code. For example, instead of writing
out the complete HTML tags manually, you can use Emmet's shorthand syntax to create them faster. Here are a few examples of Emmet abbreviations.

```html
div>ul>li*3>a:
``` 
Expands to a basic structure of a `<div>` containing an `<ul>` with three `<li>` elements, each having an `<a>` element.
```html
input[type=text]:
```
Expands to `<input type="text">`.
```html
ul>li.item$*5:
```
Expands to an unordered list with five list items, labeled as "item1", "item2", ... "item5".
```html
p{Hello World}:
```
Expands to `<p>Hello World</p>`.

`Emmet` is particularly useful when working on large projects or repetitive tasks. It saves developers time by reducing the amount of code 
they need to type manually. The tool supports various syntax shortcuts for HTML, CSS, and even other dynamic languages like Pug 
(formerly known as Jade) and SCSS (Sassy CSS).
Emmet is available as an extension or plugin for many popular code editors like Visual Studio Code, Sublime Text, Atom, and more.
Once installed, developers can utilize its powerful features to enhance their coding experience and speed up the creation of HTML and CSS markup.

# **Q3 .What is window.document**

In web development, window.document refers to the Document Object associated with the current web page. It represents the entire content of the web page that is currently loaded in the browser window.
In the analogy, you can think of window.document as the window through which you can see and interact with the content of the web page, just like the window in the room that allows you to view and interact with the garden outside.

# **Q4 .what is CDN?**

CDN (Content Delivery Network) is a network of servers located in various parts of the world. Its purpose is to deliver content, such as web pages, 
images,videos, and other files, to users more quickly and efficiently.
Think of a CDN like a network of local warehouses. Instead of shipping a product from a single distant warehouse, the company stores copies of the 
product in multiple nearby warehouses. When you order the product, they can quickly ship it from the closest warehouse to your location, ensuring 
faster delivery.
By using a CDN, you can reference the React library directly from a remote server instead of hosting it yourself. The CDN servers are specifically 
designed to deliver these files quickly and efficiently to users around the world.

Here's how it works: Instead of downloading the React library files and hosting them on your server, you can include a link to the React library 
on a CDN in your HTML file. When a user visits your website, their browser will automatically fetch the React library from the CDN server closest 
to their location.
```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

# **Q5 .what is crossOrigin?**

In the context of web development, the crossorigin attribute is used when loading external resources, such as scripts or stylesheets, 
from a different domain. Let's explain it using a simple analogy:
Imagine you're hosting a dinner party, and you need to bring in some food items from a nearby restaurant. However, there is a rule that 
states you can only bring in food if it's labeled with information about its source. The crossorigin attribute is like that label, providing 
information about where the food comes from and whether it can be trusted.
In the case of React and loading external resources, such as a script file from a different domain, the crossorigin attribute comes into play. 
It allows the browser to determine if the script can be trusted and used safely within the React application.

Imagine you have a React application hosted on your own domain, and you want to include a JavaScript library from a different domain. You can add 
the crossorigin attribute to the script tag to indicate that the script should be fetched with cross-origin settings:

```html
<script src="https://example.com/library.js" crossorigin="anonymous"></script>
```
By adding the crossorigin attribute and setting it to "anonymous," you're indicating to the browser that the script is being fetched from a different
origin and that it should be treated as a potentially untrusted resource. The browser will then take 
appropriate security measures to ensure that the script doesn't compromise the security or integrity of your React application



# **Q6 .what is React Root and what is its significance ?**

Imagine you have a tree, and at the very bottom, there is a special root that holds everything together. This root is like the main point from where the tree branches out and grows. React root is the starting point of your React application, where React takes control and manages the rendering and updating of your components.
`// index.js`
```Javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Define the React root
const rootElement = document.getElementById('root');

// Render the React application by attaching it to the root element
ReactDOM.render(<App />, rootElement);
```
`<!-- index.html -->`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My React App</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- The React application will be rendered inside this element -->
    <script src="index.js"></script>
  </body>
</html>
```
React replaces or "mounts" a specific element in your HTML document with the rendered output of a React component. This happens at the React root.

In the code example I provided earlier, the React root is defined as `<div id="root"></div>`. This element acts as the placeholder or container where the React application will be inserted and displayed.

When you run the code, React identifies the React root element `<div id="root"></div>` in the HTML document and replaces its content with the rendered output of your React components. It's like swapping the original static content with the dynamic content generated by React.

The process of rendering involves taking the React components you define (like the App component in the example) and converting them into actual HTML elements that can be displayed on the screen. React handles the rendering process and ensures that the components are displayed correctly based on their defined behavior and the current state of the application.

So, when we say React takes control and starts rendering your components, it means that React dynamically generates the HTML elements based on your component definitions and replaces the original content at the React root with the rendered output. This allows your React components to come to life and exhibit their dynamic behavior on the web page.










# **Q7 .Difference between Async and Defer?**

`Parsing`
Parsing is the process of interpreting the HTML code and building the DOM tree.

`Rendering`
Rendering is the process of generating the visual representation of the web page based on the parsed HTML, CSS styles, and any JavaScript interactions.

`async:`
With the async attribute, the browser starts downloading the script file immediately without blocking the parsing of the HTML document.
Once the script is downloaded, it is executed immediately, potentially interrupting the parsing process.
This attribute is suitable for scripts that do not rely on the DOM or other scripts being loaded and can run independently.

```html
<script async src="script.js"></script>
```
This can be beneficial when you have a script that doesn't rely on the DOM or other scripts being loaded, and it can run independently. For example, analytics scripts or scripts that load non-essential content like ads.
Use async when the script doesn't depend on the page's HTML structure and can run as soon as it's available.

`Example scenario:`

Imagine you have a website with an embedded map that relies on an external script. You want the map to load and become interactive as quickly as possible without blocking other elements on the page. In this case, you can use async to load the map script, allowing the map to load independently while the rest of the page continues to render.

`defer:`

When using the defer attribute, the browser also starts downloading the script file without blocking the parsing of the HTML document.
However, the execution of the script is deferred until the HTML parsing is complete.
This attribute ensures that the script is executed after the HTML document is fully loaded and any required elements are available in the DOM.
It is useful when the script relies on the page's HTML structure or other scripts being loaded and needs to maintain the execution order.

```html
<script defer src="script.js"></script>
```
Use defer when the script relies on the page's HTML structure or other scripts being loaded and you want to maintain the execution order.

`Example scenario:`

Suppose you have a JavaScript file that manipulates the DOM and interacts with other elements on the page. You want to make sure the script is executed after the entire HTML document is parsed and all the necessary elements are present. In this case, you can use defer to ensure the script runs in the correct order.

To summarize, async allows the script to be downloaded and executed immediately, potentially interrupting the parsing process. defer allows the script to be downloaded without blocking parsing, but its execution is deferred until the parsing is complete. The choice between async and defer depends on the script's dependencies and the desired execution order.

# **Q8 .What is DOM?**

Document object Model 
The DOM is a programming interface that represents the structure of an HTML or XML document as a tree-like structure. It provides a way for programs, 
such as web browsers or JavaScript scripts, to interact with and manipulate the elements and content of a web page.

Imagine you have a recipe book with various sections, such as appetizers, main courses, and desserts. Each section contains different recipes. The book's table of 
contents provides an organized structure and helps you navigate through the recipes quickly. In this analogy, the recipe book represents an HTML document, and the table 
of contents represents the DOM.
Similarly, in web development, when a web page is loaded in a browser, the browser creates a structured representation of the page called the DOM. It treats the HTML code of 
the page as a hierarchical structure, where each HTML element becomes a node in the DOM tree.

Here are some key aspects of the DOM:

`Tree Structure:`
The DOM represents the HTML document as a tree structure, with the root node being the document object. The tree branches out into different elements, such as headings, paragraphs, lists, images, and more.

`Nodes:`
Each element, attribute, and text content in the HTML document becomes a node in the DOM tree. Nodes can be accessed, manipulated, or modified using programming languages like JavaScript.

`Relationships:`
The DOM represents the relationships between elements, such as parent-child relationships. For example, a <div> element containing a <p> element would have the <div> as the parent and the <p> as the child.

`Access and Manipulation:`
Using JavaScript or other programming languages, you can access and manipulate the DOM to modify the content, attributes, or styles of HTML elements dynamically. This allows
you to create interactive web pages and respond to user actions.

```Javascript
document```
refers to the Document Object, which is a fundamental part of the DOM (Document Object Model). It represents the entire web page or document being displayed in the browser.

The book represents a web page or HTML document.
Each page in the book represents an HTML element, like a <div> or <p> tag.
The paragraphs, headings, and sentences within the pages represent the content within those HTML elements.
Now, let's look at some common DOM methods and explain them using this analogy:

```Javascript
document.getElementById():
```
This method allows you to find a specific element in the HTML document using its unique identifier, the id attribute. It's like finding a specific page in the book using its page number or
a bookmark.

The book represents a web page or HTML document.
Each page in the book represents an HTML element, like a <div> or <p> tag.
The paragraphs, headings, and sentences within the pages represent the content within those HTML elements.
Now, let's look at some common DOM methods and explain them using this analogy:

```Javascript
document.getElementById():
``` 
This method allows you to find a specific element in the HTML document using its unique identifier, the id attribute. It's like finding a specific page in the book using its page number or a bookmark.

`Example:`
```Javascript
const element = document.getElementById('myElement');
```

```Javascript
document.getElementsByClassName():
```
This method allows you to retrieve a collection of elements that have the same class name. It's like finding all the pages in the book that have a particular keyword or theme.

`Example:`
```Javascript
const elements = document.getElementsByClassName('myClass');
```
```Javascript
document.getElementsByTagName():
```
This method retrieves a collection of elements that have the same tag name. It's like gathering all the pages in the book that have a specific type, such as all the pages with headings or paragraphs.

`Example:`
```Javascript
const elements = document.getElementsByTagName('p');
```
```Javascript
document.querySelector():
```
This method returns the first element that matches a specific CSS selector. It's like searching the book for a specific pattern or combination of words.

`Example:`
```Javascript
const element = document.querySelector('.myClass');
```
```Javascript
document.querySelectorAll():
```
This method returns a collection of elements that match a specific CSS selector. It's like finding all the occurrences of a pattern or combination of words in the book.

`Example:`
```Javascript
const elements = document.querySelectorAll('p');
```
```Javascript
element.innerHTML:
```
This property allows you to access or modify the content within an HTML element. It's like reading or updating the text on a particular page in the book.

`Example:`
```Javascript
const element = document.getElementById('myElement');
console.log(element.innerHTML); // Read the content
element.innerHTML = 'New content'; // Update the content
```
```Javascript
appendChild()
```
method is used in the DOM (Document Object Model) to add a new child element to an existing parent element. It allows you to dynamically insert or append an element as a child to another element.

 HTML:
 ```html
 <div id="parentElement"></div>
```
JavaScript:
```Javascript
const parentElement = document.getElementById('parentElement');
```
// Create a new child element
```Javascript
const childElement = document.createElement('p');
childElement.textContent = 'This is the new content';
```
// Append the child element to the parent element
```Javascript
parentElement.appendChild(childElement);
```
```html                                  
<div id="parentElement">
  <p>Child element 1</p>
  <p>Child element 2</p>
  <p>Child element 3</p>
</div>
```
The `<div>` element is the parent element.
The `<p>` elements are the child elements.

`Accessing and Modifying Element Attributes:`
Imagine an element as a box that can have labels (attributes) on it. You can use getAttribute() to read a label and setAttribute() to change or add a label.

```html
<div id="myElement" class="box"></div>
```
JavaScript:
```Javascript
const element = document.getElementById('myElement');
const id = element.getAttribute('id'); // Get the value of the "id" attribute
element.setAttribute('class', 'new-class'); // Change the value of the "class" attribute
```

`Modifying Element Content:`

Imagine an element as a container that holds some text. You can use textContent to read or change the text inside the element.

```html
<p id="myElement">Hello, <span>world</span>!</p>
```
JavaScript:
```Javascript
const element = document.getElementById('myElement');
const text = element.textContent; // Read the text content
element.textContent = 'New content'; // Change the text content
```
`Traversing the DOM:`

Imagine the DOM as a tree structure, with elements as branches and leaves. You can use methods like parentNode, childNodes, etc., to move up or down the tree.

```html
<div>
  <p id="myElement">Hello, world!</p>
</div>
```

JavaScript
```Javascript
const element = document.getElementById('myElement');
const parent = element.parentNode; // Get the parent element
const childNodes = parent.childNodes; // Get all child nodes of the parent
```
`Creating and Inserting Elements:`

Imagine creating a new element like making a new object. You can use createElement() to create an element and appendChild() or insertBefore() to add it to an existing element.

JavaScript
```Javascript
const parentElement = document.getElementById('parentElement');
```
Create a new element
```Javascript
const newElement = document.createElement('p');
newElement.textContent = 'New element';
```
Append the new element to the parent element
```Javascript
parentElement.appendChild(newElement);
```
`Removing Elements:`

Imagine removing an element as throwing it away. You can use removeChild() to remove a specific child element from its parent.

JavaScript
```Javascript
const parentElement = document.getElementById('parentElement');
const childElement = document.getElementById('childElement');
```
Remove the child element from the parent
```Javascript
parentElement.removeChild(childElement);
```


`Event Handling:`

Imagine an event as an action, like clicking a button. You can use addEventListener() to listen for that action and execute a function in response.

```html
<button id="myButton">Click Me</button>
```
JavaScript
```Javascript
const button = document.getElementById('myButton');
```

Add an event listener to the button

```Javascript
button.addEventListener('click', function() {
  console.log('Button clicked!');
});
```
`CSS Manipulation:`

Imagine an element's style as its appearance. You can access the style property of an element to modify its CSS properties.

JavaScript
`
```Javascript
const element = document.getElementById('myElement');
`Modify the element's style`
element.style.backgroundColor = 'blue';
element.style.fontSize = '18px';
```

# **Q9 .What is the difference between react and react-dom?**

In React, "react" and "react-dom" are two separate packages that serve different purposes in the development and rendering of a React application.

`React :`
The "react" package provides the core functionality and tools for building user interfaces using React. It includes the fundamental components, hooks, context, and other features that allow you to define and manage the UI components and application logic.

`React-DOM :`
The "react-dom" package is responsible for rendering React components into the browser's DOM (Document Object Model). It provides the necessary methods and functions to interact with the browser's rendering engine and update the user interface.

# **Q10 .Why React is called React?**
React is called "React" because its core concept revolves around the idea of reacting to changes in data and updating the user interface accordingly. The name "React" reflects the reactive nature of the library.
React takes a declarative approach, where you tell it how you want your user interface to look and behave based on the current data. Instead of manually manipulating each element on the screen, you describe the desired state of the user interface.

For example, you might say, "When the user clicks a button, show a pop-up message," or "If the temperature exceeds 80 degrees, change the background color to red." You define these rules and conditions in your code using React.

Then, when the underlying data changes, React automatically handles the updates for you. It compares the new data with the previous data and determines what parts of the user interface need to change based on the rules you defined. It intelligently updates only those specific parts, efficiently managing the changes without affecting the rest of the user interface.

This declarative approach simplifies development because you don't have to manually track and update every element whenever the data changes. React takes care of it for you based on the rules you provided

# **Q11: What is difference between react.development.js and react.production.js files via CDN?**
A: Development is the stage of an application before it's made public while production is the term used for the same application when it's made public. Development build is several times (maybe 3-5x) slower than the production build.

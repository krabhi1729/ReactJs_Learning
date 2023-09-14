
## Note
-Jsx is not mandatory
-We can add react to footer in particular only

## Defining functional component :

```javascript

const HeaderComponent = () => {
  return (
    <div>
      <h1>Namaste React functional comp.</h1>
      <h2>This is an h2 tag</h2>
    </div>
  );
};
```
This component returns a simple JSX structure with an h1 and h2 element inside a div.

`Create a root using ReactDOM.createRoot():`
```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
```
`Use root.render() to render your component:`
```jsx
root.render(<HeaderComponent />);
```

## React Fragment
In React, JSX (JavaScript XML) typically requires that all elements have a single parent element. This means that when you render JSX, it should be wrapped within a single enclosing tag. For example:

```jsx
<div>
  <h1>Hello</h1>
  <p>Paragraph</p>
</div>
```
In the above example, all the elements are wrapped within a single <div> parent element. This is a requirement imposed by JSX's syntax.

However, there are cases where you might not want to add an extra <div> just for the sake of satisfying the single parent element requirement. This is where React Fragments (<React.Fragment>) or the shorthand <> and </> come into play.

`React Fragment (<React.Fragment>) and Shorthand (<> and </>):`

React provides a special component called React.Fragment that acts as an invisible wrapper. It allows you to group multiple JSX elements together without introducing an extra DOM element in the rendered output. Here's how you can use it:

```jsx
<React.Fragment>
  <h1>Hello</h1>
  <p>Paragraph</p>
</React.Fragment>
```
The above code doesn't introduce an extra <div> or any other DOM element. It's as if the elements are directly within the parent container.

Alternatively, you can use the shorthand syntax <> and </> (introduced in React 16.2) to achieve the same result:

```jsx
<>
  <h1>Hello</h1>
  <p>Paragraph</p>
</>
```
`You can also nest fragments within other fragments:`

```jsx
<>
  <h1>Hello</h1>
  <>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </>
</>
```
## Apply styles to JSX elements using either inline styles or by linking to external stylesheets (CSS).

`Using an Object for Inline Styles`

```jsx
const styleObj = {
  backgroundColor: "red",
};

const jsx = (
  <div style={styleObj}>
    <h1>JSX</h1>
    <h1>Second JSX</h1>
  </div>
);
```
In this approach, you define a JavaScript object called styleObj, where each key represents a CSS property (in camelCase) and its corresponding value. Then, you apply the styles to your JSX element by setting the style attribute equal to the styleObj variable. This is the recommended way to apply inline styles in React.

## Rendering Components in React: Hardcoded vs. Dynamic Data Approaches
Hardcoded Data Approach:

```jsx
const RestaurantCard = () => {
  return (
    <div className="card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aa77cb6fce4d94f3ad4b4e7fb42782db" />
      <h2>Burger King</h2>
      <h3>Burgers, American</h3>
      <h4>4.2 stars</h4>
    </div>
  );
};
```
In this approach, the restaurant card is hardcoded with static data. The data, such as the image source, restaurant name, cuisine, and rating, is directly written within the component's JSX. This approach is suitable for displaying static content that doesn't change and is known at the time of component creation.

Dynamic Data Approach:

```jsx
const burgerKing = {
  name: "Burger King",
  image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aa77cb6fce4d94f3ad4b4e7fb42782db",
  cuisine: ["Burger", "King"],
  rating: "4.2"
};

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={burgerKing.image} />
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cuisine}</h3>
      <h4>{burgerKing.rating} stars</h4>
    </div>
  );
};
```
In this approach, the restaurant card is rendered with dynamic data from the burgerKing object. The object contains properties like name, image, cuisine, and rating. Instead of hardcoding the data within the JSX, the values are extracted from the object and inserted using curly braces {}. This approach allows you to easily change the restaurant's data by modifying the object, making it suitable for rendering components with changing or external data.
## Join items of array in javascript 

In JavaScript, you can join the items of an array into a single string using the join() method. This method takes an optional argument, which is the separator you want to use between the array elements. If you don't provide a separator, the elements will be joined with a comma by default. Here's an industry-level coding example to illustrate how to use the join() method:
Let's say you have an array of strings representing a list of fruits, and you want to display them as a comma-separated list in a user interface.

```javascript

// Sample array of fruits
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Join the array elements with a comma separator
const fruitList = fruits.join(', ');

// Display the result in the UI or console
console.log(`List of fruits: ${fruitList}`);
```
In this example:

The output will be:

```bash
List of fruits: apple, banana, cherry, date, elderberry
```
## Config Driven UI from Backend
Config-driven UI in the context of React refers to the practice of dynamically generating and rendering user interfaces based on configuration data received from a backend server or other data sources. This approach allows you to define and modify the structure and behavior of your application's UI without changing the source code. 

## Optional Chaining
Optional chaining, denoted by the ?. syntax in JavaScript, is a feature introduced in ECMAScript 2020 (ES11) that simplifies the process of accessing properties or calling methods on potentially undefined or null values, preventing errors from occurring. It provides a more concise and safer way to work with nested objects or arrays.

```javascript
{restaurantList[0].data?.name}
```
The ?. is used to safely access the name property of an object within an array. Here's how it works:
restaurantList[0] attempts to access the first element of the restaurantList array. However, if restaurantList is undefined or null, or if it doesn't have any elements (i.e., an empty array), it doesn't cause an error. Instead, it results in undefined.
After accessing restaurantList[0], the ?. syntax is used to check if there is a data property within this object. If data is undefined or null, the evaluation stops here, and the expression returns undefined.
If data exists (i.e., it's not null or undefined), the expression continues to access the name property within the data object. If name is defined, its value is returned; otherwise, the expression returns undefined.

## Props
Props:a shorthand for properties,way of passing data to components.

`Functional component` is kind of function in js
`Props is like parameter and pasing data is like argument to the component`

- fn(param1,param2){};param1 and param2 is parameter
- fn("xyz","abc");//xyz and abc is argument
- param1=xyz and param2=abc

we pass an argument and recieve parameter

React wraps up all the properties in a variable called `props`

```jsx
 <RestaurantCard restaurant={restaurantList[0]}/>
 OR
  {RestaurantCard(restaurantList[0])}
```

## Examples of Passing and Using Props
Let's go through your provided examples to illustrate how props work in React components:

`1. Directly Passing Props`
```javascript

<RestaurantCard restaurant={restaurantList[0]} />
```
In this example, you're passing an object (restaurantList[0]) as a prop to the RestaurantCard component. This object is accessible inside RestaurantCard via the props parameter.

`2. Using Props Inside the Component`

```javascript
const RestaurantCard = (props) => {
  return (
    <div className="card">
      <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.restaurant.data?.cloudinaryImageId}`} />
      <h2>{props.restaurant.data?.name}</h2>
      <h3>{props.restaurant.data?.cuisines.join(",")}</h3>
      <h4>{props.restaurant.data?.lastMileTravelString} minutes</h4>
    </div>
  )
}
```
In this example, you're using the props parameter to access and display various properties from the restaurant object. You're using dot notation (props.restaurant.data?.propertyName) to access properties in a safe way, using optional chaining (?.) to handle cases where properties may be undefined or null.

`3. Object Destructuring with Props`
```javascript

const RestaurantCard = ({ restaurant }) => {
//By using { restaurant } within the parentheses, you're destructuring the props object. It means that you're extracting the restaurant property from the props object
  const { name, cuisines, cloudinaryImageId, lastMileTravelString } = restaurant.data;

  return (
    <div className="card">
      <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  )
}
```
In this example, you're using object destructuring to directly extract properties from the restaurant object. This makes your code cleaner and more concise by avoiding the need to repeatedly reference props.restaurant.data.

`4. Directly Passing Individual Props`
```javascript

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
  return (
    <div className="card">
      <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  )
}
```
In this example, you're directly passing individual props (name, cuisines, cloudinaryImageId, lastMileTravelString) to the RestaurantCard component. This approach can be useful when you want to be explicit about the props your component expects.

##  Two different approaches for rendering a list of RestaurantCard components in the Body component.

`Approach 1: Passing Individual Props to Each RestaurantCard`
In this approach, you create instances of the RestaurantCard component by explicitly passing individual props to each instance. Here's the code snippet for reference:

```jsx

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCard
        cloudinaryImageId={restaurantList[0].data.cloudinaryImageId}
        name={restaurantList[1].data.name}
      />
      {/* More RestaurantCard instances with specific props */}
    </div>
  );
}
```
Explanation:
You've defined the Body component, which is responsible for rendering a list of restaurant cards.

Inside the Body component, you create individual instances of the RestaurantCard component. For each instance, you explicitly pass the required props such as cloudinaryImageId and name. This approach allows you to customize the data for each card.

This approach is particularly useful when you have control over the data for each card, and you want to provide specific information to each card separately.

`Approach 2: Using Spread Operator to Pass Props`
In this approach, you create multiple instances of the RestaurantCard component by spreading the data from each restaurantList item as props. Here's the code snippet for reference:

```jsx

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCard {...restaurantList[0].data} />
      <RestaurantCard {...restaurantList[1].data} />
      {/* More RestaurantCard instances with spread props */}
    </div>
  );
}
```
Explanation:
Similar to the first approach, you've defined the Body component, responsible for rendering a list of restaurant cards.
Inside the Body component, you create multiple instances of the RestaurantCard component. However, in this case, you use the spread ({...}) operator to pass all the properties from each restaurantList item as props to the corresponding RestaurantCard instance.
This approach is useful when you have an array of data (restaurantList), and you want to render multiple RestaurantCard components with similar structures but different data. The spread operator simplifies the process of passing data, making the code more concise and maintainable.
It's particularly handy when you have a dynamic list of items, and you want to render a component for each item in the list.

## Using Map Fuction
The map function is a powerful and commonly used method in JavaScript that simplifies iterating over arrays and performing a specific operation on each element. In your case, you can use map to simplify the process of rendering multiple RestaurantCard components with different data.
```jsx
const Body = () => {
  // Assuming restaurantList is an array of restaurant objects
  const restaurantList = [
    {
      data: {
        name: "Restaurant 1",
        cuisines: ["Cuisine 1", "Cuisine 2"],
        cloudinaryImageId: "image1",
        lastMileTravelString: "10",
      },
    },
    // More restaurant objects with data
  ];

  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurantData, index) => (
        <RestaurantCard key={index} {...restaurantData.data} />
      ))}
    </div>
  );
};
```
In your case, you can use map to simplify the process of rendering multiple RestaurantCard components with different data.
You have an array restaurantList containing restaurant data objects.

Inside the Body component, you use the map function to iterate over restaurantList. For each restaurantData object in the array, you create a RestaurantCard component.
The `key={index}` property is used to provide a unique key to each RestaurantCard component. This helps React efficiently update and re-render components when the list changes.
Using the spread operator `({...restaurantData.data})`, you pass all the properties from each restaurantData.data object as props to the RestaurantCard component. This means that each RestaurantCard component receives its unique set of data.

## Why Do We Need Keys in React?

In React, when you render a list of items, like a list of components or elements, React needs a way to keep track of these items efficiently, especially when they change, are added, or removed. Keys are like unique identifiers for each item in the list. They help React recognize which item is which and make updates faster and more accurate.

Imagine a List of Playing Cards

Imagine you have a deck of playing cards, and you want to arrange them in a specific order. You decide to represent each card as a React component. Now, let's say you shuffle the deck and want to render the cards in their new order.

`Without Keys:` If you don't use keys, React would have a hard time figuring out which card is which after shuffling. It might have to re-render all the cards, even if only a few changed positions. This can be slow and inefficient.

`With Keys:` If you use keys, you give each card a unique identifier. Now, when you shuffle the deck and React updates the UI, it can quickly identify which card moved where because of the keys. It only needs to update the cards that changed, making the process faster.

## React Fiber
React Fiber, also known as the "reconciliation engine" in React, is an internal algorithm and architecture improvement introduced in React 16 to enhance the way React handles rendering, updates, and asynchronous tasks. Let's break down React Fiber in an easy-to-understand way by diving a bit deeper:

1. The Need for Fiber:

Before Fiber, React used a process called "stack reconciliation." It worked like a stack of dishes. React had to finish one task (like rendering a component) before moving to the next one. While this approach was simple, it had limitations. It couldn't pause and handle interruptions well. If a large task started, like rendering a big component tree, it had to finish before handling anything else, which could make your app feel less responsive.

2. What is Fiber?

Fiber is a new approach to how React works internally. It's like a more flexible and agile chef in a restaurant. Instead of stacking dishes in a fixed order, Fiber allows React to work on different tasks more intelligently. It can pause and switch between tasks, just like how a chef can work on multiple orders simultaneously.

3. Concurrent Rendering:

Fiber introduces the concept of "Concurrent Rendering." This means React can work on multiple things at once. It can start rendering one part of your app, pause if needed, and switch to another task. This concurrency allows React to keep your app responsive even when dealing with complex updates.

4. Prioritization:

Fiber can also prioritize tasks. It knows which updates are more important and need to be done first. For example, if you're typing in an input field, React might prioritize updating that field's value over rendering an image in the background.

5. Breaking Work into Chunks:

Fiber breaks work into smaller, manageable chunks called "fiber nodes." These nodes can represent parts of your component tree. React can work on these chunks, pause if necessary, and return to them later. This chunked approach makes it easier to handle large trees and interruptions.

6. Better User Experience:

With React Fiber, your app can feel more responsive and smoother, even when dealing with heavy computations or frequent updates. It improves the user experience by ensuring that your app remains interactive and doesn't get stuck.

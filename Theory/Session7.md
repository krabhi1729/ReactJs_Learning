## Best Practices 
 - Never create  component inside a component though some developer do that ,as per react documentation coz if component will render another also render every time.Instead, you can call and use components within other components in a more structured and efficient manner, following the recommended best practices.
 - Never wite usState inside if else because it leads to inconsistency

```jsx
import React, { useState } from 'react';

function MyComponent() {
  if (someCondition) {
    const [count, setCount] = useState(0);
  } else {
    const [count, setCount] = useState(10);
  }

  // ...
}
```
React works by comparing the previous state and the new state to determine what needs to be updated in the component. If the state is defined conditionally inside an if-else statement, React can't accurately track how state changes over time. This can lead to unexpected bugs and issues.
To ensure consistent and predictable behavior in your React components, you should always define your state variables at the top level of the component, outside of any conditional statements. Then, use those state variables within your conditional logic. Here's the correct way to do it:

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(someCondition ? 0 : 10);

  // ...
}
```
In this example, we define count at the top level of the component and set its initial value based on the condition. This approach ensures that state updates and re-renders are consistent and predictable, making your code more maintainable and easier to debug.

- Never wite usState inside for loop because it leads to inconsistency.

React gives you usestate so that we can create local state variable inside our fuctional component.So never use state variable outside component.
In React, you should use the useState hook to create and manage state variables within a specific component. These state variables are meant to be local to that component, and their scope is limited to that component's code. 
The issue here is that we've defined the count state variable outside the Counter component, making it accessible globally. This can lead to problems like unexpected behavior and difficulties in understanding where the state is being used, especially in larger applications with many components.
## Note
We can use more than one useEffect.

`Why is it the best choice to hoist images on CDN Networks.`

Content Delivery Networks (CDNs) are a popular and effective choice for hosting images and other static assets due to several key advantages:
`Faster Load Times`: CDNs have servers distributed in multiple geographic locations, often closer to end-users. When you host images on a CDN, the images can be delivered from the nearest server to the user's location. This significantly reduces latency and results in faster load times for your website or application.

`High Availability`: CDNs are built to provide high availability and redundancy. They store multiple copies of your images on different servers. If one server goes down, another can quickly take over, ensuring your images remain accessible.

`Load Balancing`: CDNs can distribute the load across their servers, ensuring that traffic is evenly spread, which helps prevent server overloads and slowdowns during traffic spikes.

`Scalability`: CDNs can easily scale to accommodate increased traffic or data storage needs. You don't need to manage your own infrastructure, as CDNs are equipped to handle your scaling requirements automatically.

`Caching`: CDNs implement caching strategies to store images in memory. This means frequently accessed images are served more quickly from the cache, reducing the load on your web servers.

`Distributed Network`: CDNs have a distributed network of servers, which enhances redundancy and resilience. This distributed nature minimizes the risk of localized server outages affecting image delivery.


## How to make  routing configuaration for routing.
```jsx
const appLayout=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
  },
  {
    path:"/about",
    element:<About/>
  }
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appLayout}/>)
```
The above code is related to routing in a React application using the react-router-dom library.

`const appLayout = createBrowserRouter([...])`: creating a routing configuration using the createBrowserRouter function.The configuration is provided as an array of objects, where each object represents a route. In your example, you have defined two routes:

The first route has a path of /, and it renders the component <AppLayout/>.
The second route has a path of /about, and it renders the component <About/>.
This configuration essentially says that if the URL matches /, it should render the AppLayout component, and if the URL matches /about, it should render the About component.

`const root = ReactDOM.createRoot(document.getElementById("root"))`: This line creates a root element using ReactDOM.createRoot. The createRoot function allows you to render your React application in concurrent mode, which is a mode in React that enables more efficient rendering and updates.
`root.render(<RouterProvider router={appLayout}/>)`: You are rendering your application using the root created earlier. You are wrapping your routing configuration with a RouterProvider component and passing the appLayout configuration as the router prop.

The RouterProvider is a part of the react-router-dom library and is responsible for providing routing capabilities to your application. By wrapping your application in the RouterProvider, you ensure that the routing configuration defined in appLayout is available for your entire app.
## Note
React router dom is not developed by meta ,it is developed by remix.

## Error Handling

let's look at the routing configuration, appLayout, where you specify how your application should handle different routes:
```jsx
const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />
  }
]);
```
`path: "/"`: This route configuration matches the root path of your application (i.e., when the URL is "/"). When this route is matched, it renders the AppLayout component. Additionally, if there is a routing error (e.g., the requested route doesn't exist), it will display the Error component.
`path: "/about"`: This route configuration matches the "/about" path of your application. When this route is matched, it renders the About component. If there is a routing error on this route, the default error handling will be used.

## Rendering the Application

You render your application using the root element and the RouterProvider:
`root.render(<RouterProvider router={appLayout} />);`
Here, you're rendering your entire application inside a RouterProvider. The appLayout configuration is passed as the router prop. This setup allows your application to use the defined routes and handle routing based on the appLayout configuration.

For handling routing errors, you import the useRouteError hook from react-router-dom. The Error component is created to display an error message when a routing error occurs. Here's the code for the Error component:
```jsx
const Error = () => {
  const err = useRouteError();
  console.log(err);
  const { status, statusText, data } = err;
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <h2>{status + ":" + statusText + "{" + data + "}"}</h2>
    </div>
  );
}
```
In this component:

You use the useRouteError hook to capture the error details, such as status, statusText, and data.
You render an error message with details about the error, including the HTTP status code, status text, and any additional error data.
Example Usage:

Suppose a user visits a non-existent route like "/nonexistent" in your application. The routing error handling would take effect and display the "Error" component with details about the error, providing a user-friendly way to indicate that something went wrong:

Oops!!
Something went wrong
404: Not Found{"/nonexistent"}
This example demonstrates how to handle and display routing errors in your React application, making it easier to identify and communicate issues to users.

## Difference between <Link> and <a> tags in the context of React Router.

`Client-Based Routing vs. Server-Based Routing`:

Client-Based Routing: This approach is about handling routing on the client side without making additional requests to the server. It means that when you click on links to different pages within your app, only the relevant content is updated without reloading the entire page.
Server-Based Routing: In traditional web applications, navigating between pages usually involves requests to the server, which then sends back the new HTML page.
React Router Dom and the <Link> Component:

react-router-dom is a popular library for handling client-based routing in React applications. It provides components like <Link> for creating links between different routes.
<Link> is specifically designed for client-based routing within a React app. It allows you to define links that navigate to different routes within your app without triggering a full page reload.
When you use <Link>, it updates the route in your app's state, and React Router takes care of rendering the appropriate component for that route.
Difference Between <Link> and <a> Tags:

<Link>: In the provided code, <Link> components are used within the <Header> component to create navigation links. These links are designed for client-side routing and are a core feature of react-router-dom. When you click a <Link>, it changes the URL in the browser's address bar and updates the content on the page without a full reload.
<a>: <a> tags, on the other hand, are standard HTML anchor tags. In the <Title> component, an <a> tag is used to create a logo that presumably links to the home page. However, using an <a> tag like this would trigger a full page refresh, which isn't ideal for a single-page React application that should use client-based routing. In the code you've shown, it would be more appropriate to use <Link> for the logo as well.
Understanding Browser Behavior:

When you inspect the elements in the browser's developer tools, you might see <a> tags even though you used <Link> in your code. This is because browsers understand anchor tags but do not directly recognize <Link> components. React Router internally translates <Link> into <a> tags to achieve client-side routing.
In summary, <Link> is a specialized component for client-side routing in React applications, while <a> is a standard HTML anchor tag. Both create links, but their behavior differs, with <Link> being more suitable for single-page applications that require client-based routing. React Router takes care of ensuring that your app uses client-based routing effectively, even though you might see <a> tags when inspecting elements in the browser.


Certainly, let's break down the provided code in the context of the previous explanation:
```jsx
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/"> <li>Home</li> </Link>
          <Link to="/about"> <li>About</li> </Link>
          <Link to="/contact"> <li>Contact</li> </Link>
          <Link to="/cart"> <li>Cart</li> </Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};
```

Goal:
You want to create a React application with a consistent header and footer on all pages, and you want to link restaurant cards to their respective details pages.

Components:
AppLayout Component:
This component serves as the layout for your entire application.
It ensures that the header and footer are displayed consistently on all pages.

```jsx
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
```
Routing:

To manage routing, you're using react-router-dom's `<Outlet>` component. It's a placeholder that allows nested routes to be rendered in their parent's template.
Any routes defined in your app will be rendered inside the <Outlet> of the AppLayout.
Linking Restaurant Cards:

To link restaurant cards to their details pages, you are mapping through the filteredRestaurants array.
For each restaurant in the array, you use a <Link> component to create a hyperlink to the details page of that restaurant.
```jsx

{filteredRestaurants.map((restaurant) => {
  return (
    <Link
      to={"/restaurant/" + restaurant?.info?.id}
      key={restaurant?.info?.id}
    >
      <RestaurantCard {...restaurant?.info} />
    </Link>
  );
})}
```
filteredRestaurants is an array of restaurant data.
For each restaurant, you create a hyperlink using <Link>. The to attribute specifies the URL where this link should navigate, which is constructed based on the restaurant's ID.
When the user clicks on the restaurant card, they will be taken to the corresponding details page, where the restaurant's unique ID is used to load the specific restaurant's details.
This approach allows you to maintain a consistent layout with a header and footer while providing dynamic routing for your restaurant details pages. The use of <Link> components from react-router-dom ensures that you can navigate between different restaurant details pages efficiently.

```jsx
const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
      {
      path:"/about",
      element:<About/>,
    },
  {
    path: "/contact",
    element: <Contact/>,
  },
],
  },  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appLayout} />);
```
All the children will go into outlet; outlet is like a placeholder, it is a named component."

In a React application using react-router-dom, the <Outlet> component is used to render the content of the active child route. This means that any nested routes or child routes defined within a route will be displayed inside the <Outlet>.
It acts as a placeholder or container where the content of child routes gets rendered.
The content rendered within the <Outlet> does not appear in the browser's developer tools' element inspection. This is because the <Outlet> is a React component, and its content is determined dynamically based on the current route.
This statement suggests that when you click on the home link or navigate to a particular route, the application may perform certain actions, such as making an API call, before rendering the content for that route. This can result in a two-step rendering process.

## Dynamic routing
```jsx
const RestaurantMenu=()=>{
  return(
    <div>
      <h1>Restaurant id:123</h1>
      <h2>Lavonne</h2>
    </div>
  )
}
export default RestaurantMenu;
```
```jsx
const AppLayout = () => {
  return (
    <>
      <Header />
     <Outlet/>
      <Footer />
    </>
  );
};
```
```jsx
const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
        {
      path:"/",
      element:<Body/>,
    },
      {
      path:"/about",
      element:<About/>,
    },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path:"/restaurant/:resId",
    element:<RestaurantMenu/>,
  },
],
  },  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appLayout} />);
```

## useParam
```jsx
import {useParams} from "react-router-dom";
const RestaurantMenu=()=>{
  const {resId}=useParams();
  
  return(
    <div>
      <h1>Restaurant id:{resId}</h1>
      <h2>Lavonne</h2>
    </div>
  )
}
export default RestaurantMenu;
```
In this example, the RestaurantMenu component uses useParams to extract the resId from the URL, allowing you to display specific restaurant details based on the provided ID.
The structure you've created allows for dynamic routing, with different components rendering based on the URL path and parameters. It's a clean and organized way to manage routing and display content in your React application.

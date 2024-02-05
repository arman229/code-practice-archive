
###  What is Next.js?
Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, 
### full stack web application
A full-stack application is a software application that encompasses both the front-end and back-end components of a web application. This means you can create interactive user interfaces (front-end) and handle server-side logic (e.g., API endpoints) within the same codebase.

### Library:
A library is like a collection of tools(software programs) you can borrow when you need them. You decide when and how to use these tools, and they don't control the overall structure of your project. It's like having a toolbox that you pick tools from when you need them.
A library in the context of software development is a collection of pre-written code and routines that can be used by other programs or projects. 
Framework:

A framework is like a pre-built house with some rooms already set up. You need to follow the house's design and fit your furniture into the rooms. The framework decides how your project is organized, and you work within its structure.
In short:

A library gives you tools to use as you like.
A framework is like a house where you follow its design and add your stuff.
Before starting the project please fellow the image below as shows
![](src/app/images/projectsetup.jpg)

### what is Tailwind CSS and Bootstrap
#### Tailwind CSS uses first utility classes:

Tailwind CSS provides utility classes that are directly used in your project.
This approach contributes to a smaller file size as only the necessary classes are included.
#### Bootstrap relies on components:

Bootstrap is centered around pre-designed components that you can easily incorporate into your project.
Due to the inclusion of predefined styles and components, Bootstrap files may be larger.
#### Designing and customization:

Tailwind CSS offers easy customization and design flexibility as it emphasizes the use of utility classes, allowing for more granular control over styles.
Bootstrap, being component-centric, may have a more opinionated and consistent design out of the box, but it might be slightly less flexible for highly customized designs.
#### Ease of use:

Tailwind CSS might be considered easier for customization, especially for those comfortable with using utility classes directly in HTML.
Bootstrap is often perceived as more beginner-friendly due to its ready-to-use components, but customization might require digging into its styles and structure.
#### Popularity:

Tailwind CSS has gained popularity, partially due to its flexibility and the utility-first approach.
Bootstrap, being a well-established framework, still has a significant user base, especially for projects where quick and consistent design is a priority.
#### What is the DOM?
The DOM is an object representation of the HTML elements. It acts as a bridge between your code and the user interface, and has a tree-like structure with parent and child relationships.
#### React: A declarative UI library(what to do)
#### In React, event names are camelCased.
Props is read-only information that's passed to components. State is information that can change over time, usually triggered by user interaction.
#### What is Compiling?
Developers write code in languages that are more developer-friendly such as JSX, TypeScript, and modern versions of JavaScript. While these languages improve the efficiency and confidence of developers, they need to be compiled into JavaScript before browsers can understand them.
![](src/app/images/compling.JPG)
#### What is Minifying?
Minification is the process of removing unnecessary code formatting and comments without changing the code’s functionality. The goal is to improve the application’s performance by decreasing file sizes.
![](src/app/images/minigying.JPG)
#### What is Bundling?
Bundling is the process of resolving the web of dependencies and merging (or ‘packaging’) the files (or modules) into optimized bundles for the browser, with the goal of reducing the number of requests for files when a user visits a web page.
![](src/app/images/Bundling.JPG)
### Build Time and Runtime
#### Build time
(or build step) is the name given to a series of steps that prepare your application code for production.

When you build your application, Next.js will transform your code into production-optimized files ready to be deployed to servers and consumed by users. These files include:

HTML files for statically generated pages
JavaScript code for rendering pages on the server
JavaScript code for making pages interactive on the client
CSS files
#### Runtime (or request time) 
refers to the period of time when your application runs in response to a user’s request, after your application has been built and deployed.
#### Client and Server
In the context of web applications, the client refers to the browser on a user’s device that sends a request to a server for your application code. It then turns the response it receives from the server into an interface the user can interact with.
Server refers to the computer in a data center that stores your application code, receives requests from a client, does some computation, and sends back an appropriate response.
#### Layout component which will be shared across all pages.

# What is the Single Responsibility Principle?

The Single Responsibility Principle is about keeping things simple, organized, and easy to understand. Each part of your React app should have a clear job, just like each room in your house serves a specific purpose.

The Single Responsibility Principle (SRP) is the concept that any single object in object-oriented programming (OOP) should be designed for one specific function. For example, instead of having a function that handles both user authentication and database connection, you can separate them into two distinct functions, each with its own responsibility.

# When creating components in React:

- In simpler examples, it’s usually easier to start top-down. In larger projects, it’s easier to start bottom-up.

- React follows a one-way data flow, passing data down the component hierarchy from the parent to the child component.

# What are props?

Props are like arguments you pass to a function. They allow a parent component to pass data to a child component and customize its appearance.

**Mutability:** Props are immutable. Once a component receives props, they cannot be changed by that component.

# What is State?

State is like a component’s memory.

**Mutability:** State is mutable. It represents the local state of a component and can be changed using the `setState` method.

# What is the logical OR operator?

The `||` operator in JavaScript is called the "logical OR" operator. It is used to perform a logical OR operation between two operands. Here's how it works:

- If the left operand is truthy, the `||` operator returns the left operand.

- If the left operand is falsy, the `||` operator returns the right operand.

- If both operands are falsy, the operator returns the right operand because it has no choice but to evaluate it.

**For example:**
 
const value = null || "Hello";
console.log(value); // Output: "Hello"
let result = false || 0;
console.log(result);  // Output: 0 
    
In this example, both false and 0 are falsy values. However, since the left operand (false) is falsy, the || operator moves on to the right operand (0) and returns it. Therefore, the output is 0.
# Don’t Repeat Yourself (DRY)
DRY stands for Don’t Repeat Yourself. It’s a software development principle with the goal of removing logic duplication.
DRY was first introduced in the book The Pragmatic Programmer and ensures that a particular logic appears only once in the codebase.
For example, writing a function that contains a specific logic and then calling it multiple times in our code is a form of applying the DRY principle.
![](C:/Users/HP/Desktop/dry.png)

# The Opposite of DRY
WET (which can stand for We Enjoy Typing, Write Every Time, and Waste Everyone’s Time) is when we write the same logic more than once in our code, violating the DRY principle

* Note:In JavaScript, an object literal is a way to define and create an object using a concise syntax.

# Why in React styles do we write as style={{}}?
In React, when you see double curly braces in a style attribute like style={{color: 'blue', }}, it's because the outer set of curly braces indicates that you are embedding JavaScript expression inside JSX, and the inner set of curly braces is used to create an object literal in JavaScript.
# What is the difference between the forEach and map methods in JavaScript? 
 * forEach Does not create a new array; returns undefined
 * Creates a new array by collecting the results of calling the provided function on each element; returns the new array.
   map is used when you want to create a new array based on the transformation of each element, while forEach is used for iterating over elements without creating a new array.
# What is the difference between rendering and refresh/reload ?
rendering is the process of updating specific parts of the UI in response to changes, while page refresh involves reloading the entire webpage, resetting its state, and fetching all resources from the server. Rendering is more fine-grained and efficient for dynamic user interfaces, while page refresh is a complete reset of the entire web page.


# React Context
React Context is a way to manage state globally.
State should be held by the highest parent component.
Context in React provides a way to pass data through a component tree without the need to prop-drill (i.e., pass props down manually at every level).
To create context, you must Import createContext and initialize it:

      
    import { useState, createContext } from "react";
    const UserContext = createContext()
    import React, { useContext, useState } from 'react';
      // Define the shape of the context data using a TypeScript interface
      interface ThemeContextData {
      theme: string;
      toggleTheme: () => void;
      }
      // Create the context with an initial value and the TypeScript interface
      const ThemeContext = React.createContext<ThemeContextData>({
      theme: 'light',
      toggleTheme: () => {},
      });
* second way to use the context
        
         <Context.Consumer>
         {value => <span>{value}</span>}
         </Context.Consumer>
## What is the difference between useContext and Redux?
useContext is a React hook that allows sharing data across components, while Redux is a state management library that provides a centralized store for managing global state.
* Note:You can use JavaScript’s filter() and map() with React to filter and transform your array of data into an array of components.
 
* In Data.js file we write the static data such as array of object 
* In Utlis.js we write the function or our logic.
# Defining a component
A React component is a JavaScript function that you can sprinkle with markup(that return html).
* Note:In JavaScript, when you have a return statement without parentheses followed by a newline, the interpreter will automatically insert a semicolon at the end of the line, effectively ending the statement. This behavior is known as Automatic Semicolon Insertion (ASI).
  Here's an example where code on the lines after return without parentheses will be ignored:
       
          function exampleFunction() {
            return
            'Hello, world!';
               }
            console.log(exampleFunction()); // Output: undefined
            function exampleFunction() {
              return;
             'Hello, world!';
              console.log(exampleFunction()); // Output: undefined



* Note:  when you render a different component in the same position, it resets the state of its entire subtree. To see how this works, increment the counter and then tick the checkbox
* Note: Any JavaScript expression will work between curly braces, including function calls like ({formatDate(today)})
# Why do multiple JSX tags need to be wrapped?
JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.
# Deep Copy:
A deep copy creates a completely independent copy of the original object or array as well as all nested objects or arrays.
# Shallow Copy:
A shallow copy creates a new object or array, but it does not create new copies of nested objects or arrays within the original object or array. Instead, it copies references to the nested objects or arrays. Therefore, changes made to the nested objects or arrays in the copied structure will be reflected in the original structure and vice versa.

 # What are the importance of Key in React ?
 The key is a special attribute that is used to uniquely identify each rendered element.  

Here are some key points regarding the importance of the key attribute in React's :

Efficient Updates:

React uses the key to efficiently update the DOM when the underlying data changes. When a list is re-rendered, React compares the keys of the new elements with the keys of the old elements to determine which elements have been added, removed, or re-ordered.
Maintaining Component State:

If a component's state is associated with the rendered elements, the key helps React identify which state belongs to which element. Without unique keys, React may incorrectly update state and lead to unexpected behavior.
Optimizing Reconciliation:

React uses a process called "reconciliation" to update the UI based on changes in the component state or props. The key attribute helps React optimize this process by providing a way to uniquely identify elements and efficiently determine the differences between the previous and current state of the list.
Avoiding Unnecessary Re-renders:

When elements in a list have unique keys, React can avoid unnecessary re-renders of components. It can identify precisely which components need to be updated, added, or removed, reducing the performance impact
 # What is Event handler ?
Event handlers are your own functions that will be triggered in response to user interactions like clicking, hovering, focusing on form inputs, and so on.
# Render and commit
Before your components are displayed on the screen, they must be rendered by React. Understanding the steps in this process will help you think about how your code executes and explain its behavior.

Imagine that your components are cooks in the kitchen, assembling tasty dishes from ingredients. In this scenario, React is the waiter who puts in requests from customers and brings them their orders. This process of requesting and serving UI has three steps:

Triggering a render (delivering the diner’s order to the kitchen)
Rendering the component (preparing the order in the kitchen)
Committing to the DOM (placing the order on the table)

* Note: State is private to the component. If you render it in two places, each copy gets its own state.

# What is Propagation in JS ?
In JavaScript, event propagation refers to the order in which events are handled when they occur on a DOM (Document Object Model) element. There are two phases of event propagation: capturing phase and bubbling phase.
* Capturing Phase:
During the capturing phase, the event travels down from the root of the DOM hierarchy to the target element.
* Bubbling Phase:
During the bubbling phase, the event travels back up from the target element to the root of the DOM hierarchy.
Bubbling is the default behavior for most events in the DOM.

e.preventDefault() is a method in JavaScript that is commonly used in event handlers to prevent the default behavior associated with a particular event.
For example:

Clicking on a link (<a> element) navigates to the URL specified in the href attribute.
If you want to override or stop the default behavior associated with an event, you can use e.preventDefault(). This method tells the browser not to perform the default action for the event, allowing you to implement your own custom behavior instead.

# Rendering
Rendering” is React calling your components.
On initial render, React will call the root component.
For subsequent renders, React will call the function component whose state update triggered the render.
During the initial render, React will create the DOM nodes .
During a re-render, React will calculate which of their properties, if any, have changed since the previous render. It won’t do anything with that information until the next step, the commit phase.
* Note: Re-renders when state updates
# What is Pure Function ?
Rendering must always be a pure calculation:

Same inputs, same output. Given the same inputs, a component should always return the same JSX. (When someone orders a salad with tomatoes, they should not receive a salad with onions!)
It minds its own business. It should not change any objects or variables that existed before rendering. (One order should not change anyone else’s order.)
Otherwise, you can encounter confusing bugs and unpredictable behavior as your codebase grows in complexity. When developing in “Strict Mode”, React calls each component’s function twice, which can help surface mistakes caused by impure functions.
* Note: After rendering is done and React updated the DOM, the browser will repaint the screen. Although this process is known as “browser rendering”, we’ll refer to it as “painting” to avoid confusion throughout the docs.
* Note You can use Strict Mode to find mistakes in your components
* Note React does not touch the DOM if the rendering result is the same as last time.
# Choosing the state structure 
The most important principle is that state shouldn’t contain redundant or duplicated information. If there’s unnecessary state, it’s easy to forget to update it, and introduce bugs!
In React, redundancy typically refers to unnecessary repetition or duplication in your code that doesn't add value and can potentially make your code more complex, harder to maintain, and prone to bugs.
        
this is redundant

          const [firstName, setFirstName] = useState('');
          const [lastName, setLastName] = useState('');
          const [fullName, setFullName] = useState('');
         function handleFirstNameChange(e) {
          setFirstName(e.target.value);
         setFullName(e.target.value + ' ' + lastName);
          }

            function handleLastNameChange(e) {
            setLastName(e.target.value);
            setFullName(firstName + ' ' + e.target.value);
            }
* instead of 
           
           const [firstName, setFirstName] = useState('');
             const [lastName, setLastName] = useState('');

                          function handleFirstNameChange(e) {
                   setFirstName(e.target.value);
                }

                      function handleLastNameChange(e) {
                setLastName(e.target.value);
                }
      
           const fullName = `${firstName} ${lastName}`;
* “Rendering” means that React is calling your component, which is a function.

# What is JSX?
JSX stands for JavaScript XML.
JSX allows us to write HTML directly within the JavaScript code.
JSX makes it easier to write and add HTML in React.
* Here are two examples. The first uses JSX and the second does not:

         const myElement = <h1>I Love JSX!</h1>;


         const myElement = React.createElement('h1', {}, 'I do not use JSX!');
* Note:When you nest content inside a JSX tag, the parent component will receive that content in a prop called children.          

# Code Splitting
Code splitting allows you to split your application code into smaller bundles to be downloaded and executed by the browser. This reduces the amount of data transferred and execution time for each request, leading to improved performance.

Server Components allow your application code to be automatically code-split by route segments. This means only the code needed for the current route is loaded on navigation.
# Prefetching
Prefetching is a way to preload a route in the background before the user visits it.
# Partial Rendering
Partial rendering means only the route segments that change on navigation re-render on the client, and any shared segments are preserved.
# Soft Navigation
only the route segments that have changed are re-rendered 
Client-side rendering (CSR) and server-side rendering (SSR) are two different approaches to how web content is generated and displayed to users.

# Client-Side Rendering (CSR):

In CSR, the web browser loads a basic HTML file along with JavaScript files.
The JavaScript code is responsible for rendering the content dynamically on the client-side.
This means that the browser needs to wait for the JavaScript to be downloaded and executed before it can render the page.
Popular JavaScript frameworks like ReactJS, AngularJS, and Vue.js heavily utilize CSR.
Example: Suppose a user searches for a product on an e-commerce website that uses CSR. When the user makes a search, the website sends a request to the server, retrieves raw data, and then uses JavaScript to render the search results dynamically on the user's browser without reloading the entire page.
# Server-Side Rendering (SSR):

In SSR, the server processes the request, generates the HTML for the entire page, and sends the fully rendered HTML page to the client.
This means that the user receives a fully formed HTML document from the server, which can be displayed immediately.
Frameworks like Next.js (for React), Nuxt.js (for Vue), and Sapper (for Svelte) facilitate SSR.
Example: Let's consider the same e-commerce website but with SSR. When the user searches for a product, the server processes the search query, fetches the data, generates the HTML for the search results, and sends back a complete HTML page with the search results already rendered. This allows the user to see the search results faster because they don't have to wait for JavaScript to execute and render the page.
In summary, CSR involves rendering content on the client-side using JavaScript after receiving a basic HTML file, while SSR involves rendering content on the server and sending a fully formed HTML page to the client. Each approach has its advantages and disadvantages in terms of performance, SEO, and initial load time.


# What is prerendring ?
prerendering is a technique used to improve website performance, user experience, and SEO by generating HTML content in advance, either on the server or during the build process, rather than dynamically at runtime.

# What is hydration?
 hydration is the process of adding interactivity to pre-rendered HTML content on the client-side, typically in the context of server-side rendered applications.






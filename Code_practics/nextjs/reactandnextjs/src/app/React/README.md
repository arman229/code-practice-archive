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


 
 Base styles are typically global and apply to basic HTML elements, while component styles are specific to individual components or UI elements.
 
 
 React State Mutations:
 In React or other front-end libraries/frameworks, mutation can also refer to the process of modifying the state of a component.
State mutations involve changing the value of state variables within a component, typically using the setState function in React.
    // Mutating the state variable 'count'
          setCount(count + 1);

# What is Event handler ?
 Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.


 # what is batching in React ?
 
Sure, let's break down the concept of state batching in React in simpler terms.

When you update state in a React component, React doesn't immediately re-render the component. Instead, it batches multiple state updates into a single update. This batching behavior is designed to make React apps more efficient and responsive.
  
Updating State:

Imagine you have a React component with some state variables (pieces of data that can change over time).
When you trigger an event, like clicking a button, and update the state using setState, React doesn't immediately re-render the component for every state update.
Batching State Updates:

Instead of re-rendering the component after each state update, React batches multiple state updates together.
Let's say you have multiple state updates in the same event handler. React groups these updates into a single batch.
Efficiency Benefits:

Batching state updates makes your React app run much faster.
If React were to re-render the component after every individual state update, it could potentially lead to a lot of unnecessary rendering and slower performance.
Post-Event Rendering:

After the event handler and any code inside it complete, React performs a single re-render with all the batched state updates.
This helps avoid unnecessary intermediate renders and ensures that the UI is updated in a more optimized way.
Responsive User Interface:

From the user's perspective, this batching behavior helps maintain a responsive and smooth user interface.
Even if multiple state updates occur during a user interaction, the UI updates only once at the end, reducing the perception of delays.
In summary, state batching in React is a behind-the-scenes optimization that groups multiple state updates into a single batch to improve the performance and responsiveness of your React application. This way, your UI updates efficiently without causing unnecessary re-renders during user interactions.




# Note: The class is an HTML Attribute, while the className is a DOM Property.


        <div id="myDiv" class="container">
          <p class="text">Hello, world!</p>
       </div>
       <script src="script.js">     // Accessing the class attribute using JavaScript
          var element = document.getElementById("myDiv");
         var classAttributeValue = element.getAttribute("class");
         console.log(classAttributeValue); // Output: container
*
         // Accessing the className property
        var classNames = element.className;
         console.log(classNames); // Output: container

        // Modifying the className property
        element.className += " highlighted";
        console.log(element.className); // Output: container highlighted
        </script>
* Note:
State Immutability: React relies on immutability for efficient state management and reconciliation. When you update the state in React, you should create a new state object instead of modifying the existing one. This is because React compares the previous state with the new state to determine what parts of the UI need to be re-rendered. If you modify the existing state directly, React may not detect the changes properly, leading to unexpected behavior.
# slice and splice 
slice() returns a portion of the array without modifying the original array.
/   2QWESDFCVB NM;'
splice() modifies the original array by removing or replacing elements and/or adding new elements. It also returns an /array containing the removed elements.2345=/- `1Q2
# What is redundancy ?
Redundancy in software refers to the presence of unnecessary or duplicate elements, code, or processes that serve no essential purpose but increase complexity, resource usage, and the likelihood of errors or bugs.
* Note: React provide declarative way (what to do ) but JavaScript is Imperative(How to do)


In React, you don’t directly manipulate the UI—meaning you don’t enable, disable, show, or hide components directly. Instead, you declare what you want to show, and React figures out how to update the UI. Think of getting into a taxi and telling the driver where you want to go instead of telling them exactly where to turn. It’s the driver’s job to get you there, and they might even know some shortcuts you haven’t considered!

Human inputs, like clicking a button, typing in a field, navigating a link.
Computer inputs, like a network response arriving, a timeout completing, an image loading.

What is the difference between null and undefined?
Undefined means a variable has been declared but has yet not been assigned a value. Null is an assignment value. It can be assigned to a variable as a representation of no value.

# Static Rendering
With Static Rendering, both Server and Client Components can be prerendered on the server at build time. The result of the work is cached and reused on subsequent requests. The cached result can also be revalidated.

Note: This is equivalent to Static Site Generation (SSG) and Incremental Static Regeneration (ISR).

# Dynamic Rendering
With Dynamic Rendering, both Server and Client Components are rendered on the server at request time. The result of the work is not cached.

Note: This is equivalent to Server-Side Rendering (getServerSideProps()).
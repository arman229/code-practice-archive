 
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
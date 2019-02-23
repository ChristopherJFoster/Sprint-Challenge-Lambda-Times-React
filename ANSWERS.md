1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

   PropTypes are used to check that the value _type_ of each prop (string, number, etc.) is the one the function receiving the prop is expecting. PropTypes provide an extra layer of debugging, since, for example, the number 78 and the string "78" look the same (to a human) in many instances, but obviously behave differently in JavaScript. PropTypes can also tag a prop as required, and will thus throw an error if a required prop is undefined. The errors that PropTypes throws appear in the browser console, not in the terminal or IDE. This makes it clear that PropTypes error messages are not redundant to an IDE or compiler error message (at least not the ones I'm using).

2. Describe a lifecycle event in React.

   I’m not exactly sure what is meant by a lifecycle “event”, but there are three lifecycle phases for a class component in React, each of which can are treated sort of like events by special methods available to class components in React (called lifecycle methods).

   The first lifecycle phase is mounting, which is like the birth of a class component. One method available that triggers upon mounting is componentDidMount(). This is sometimes a good function in which to fetch data and use it to setState().

   The second lifecycle (and for most components, the longest) phase is updating, which is like the lifetime of the component. One method available that triggers (often many times) during updating is render() (which also triggers once during the mounting phase). render() redraws the parts of the UI that need updating, and could be considered the heart of React.

   The third lifecycle phase is unmounting, which is like the death of the component. One method available that triggers upon unmounting is componentWillUnmount() (so I suppose it triggers immediately _prior_ to the component’s unmounting). componentWillUnmount() is a good function in which to cancel outstanding network requests and invalidate timers.

3. Explain the details of a Higher Order Component.

   An HOC is a function takes a component as an argument and returns a new component. Like all components in React, HOCs are a good way to reuse code. In the case of HOCs, the code one is reusing is the logic of the HOC.

   For example, I might write an an authentication HOC called (straightforwardly enough) authenticate. Then I might feed it a plain App component (the root of my component tree), a LoginPage component (a form accepting a username and password), and a BookClubMember component (the page a user would see once they log in). The authenticate HOC contains logic for checking a boolean (stored in state) called loggedIn, rendering one component if true, and a different component if false. When App, LoginPage, and BookClubMember are fed into the authenticate HOC as arguments...

   const secureApp = authenticate(App)(LoginPage)(BookClubMember)

   ...secureApp is returned from the HOC as a component that applies the logic of authenticate to LoginsPage and BookClubMember. secureApp will check its loggedIn boolean and render BookClubMember if the boolean is true, and LoginPage if the boolean is false.

   What makes the authenticate HOC reusable is that we could, for example, feed it another App component and LoginPage component, along with a SpeedRunAllStars component, and authenticate would apply the same authentication logic to this second set of components.

4. What are three different ways to style components in React? Explain some of the benefits of each.

   Here are four:

   _vanilla CSS:_
   _Pros:_ Easy to set up. Blank canvas (one is not swayed by built-in styles).
   _Cons:_ Difficult to track and manage, especially for larger apps. No variables or mixins.

   _LESS/SCSS:_
   _Pros:_ Blank canvas. Variables and mixins available. Syntax is more versatile than vanilla CSS.
   _Cons:_ Must set up compiler and interfile imports. Must keep an eye on compiler to be sure edits are properly compiled.

   _styled components:_
   _Pros:_ Styles can be stored in the same .js file as their targets (components). Styled components can be extended (Button becomes TomatoButton). Conditional rendering can be written into the styling (color change based on an updatable component attribute).
   _Cons:_ More difficult to set up than vanilla CSS, maybe on par with LESS/SCSS. Does not obviate the need for Vanilla CSS (reset/normalize).

   _reactstrap:_
   _Pros:_ Comes with a lot of pre-built components that are not only styled, but have various functions pre-programmed.
   _Cons:_ Using them runs the risk that one’s site/app will look and feel similar to other reactstrap sites/apps. While learning to code, reactstrap might deny a student the opportunity to learn how to write and style components on a deeper level. Like styled components and LESS/SCSS, one must spend some energy setting up reactstrap.

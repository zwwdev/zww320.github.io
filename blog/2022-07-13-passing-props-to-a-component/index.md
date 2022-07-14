---
slug: passing-props-to-a-component
title: Passing Props to a Component
authors:
  name: Ziwei Wang
  title: this website owner
  url: https://github.com/zwwang98
  image_url: https://github.com/zwwang98.png
tags: [React, React Docs(Beta) Personal Notes]
---

This is my personal notes on React Docs(Beta) - [Passing Props to a Component](https://beta.reactjs.org/learn/passing-props-to-a-component).

## What are props and why we need to pass them?
The official [docs](https://beta.reactjs.org/learn/passing-props-to-a-component) says that:
> Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an `<img>`:
> ```
> function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}
> ```

> React component use props to communicate with each other. Every parent component can pass some information to its child components by giving them props.

This reminds me [one of Dan Abramov's blogs](https://medium.com/@dan_abramov/youre-missing-the-point-of-react-a20e34a51e1a). He said in a similar but more specific way:
> Now that we’re not surprised by virtual DOM anymore and it is being adopted by other frameworks and libraries, we can focus on examining React’s true strengths: composition, unidirectional data flow, freedom from DSLs, explicit mutation and static mental model.

The point is that using props to do communication work means that the communication is unidirectional. One comopnent could only pass information down, not up or to any other component of another branch of the whole React tree.

## How to pass props?
When saying "pass", it means that we have at least two objects. One is going to pass something and the other is going to receive it.

### Pass props inside JSX tag
First, pass some props to Avatar. For example, let’s pass two props: person (an object), and size (a number):
```
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
```
Now you can read these props inside the Avatar component.

### Read props in React functional component as function's inputs
We could either declare `props` or [destruct](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Unpacking_fields_from_objects_passed_as_a_function_parameter) `props` in separate variables.
```
// Without destructing
function Avatar(props) {
  // person and size are available inside props
  // props.person
  // props.size
}
```
```
// With destructing
function Avatar({ person, size }) {
  // person and size are available here
}
```

### Specifying a default value for a prop
If you want to give a prop a default value to fall back on when no value is specified, you can do it with the destructuring by putting = and the default value right after the parameter:
```
function Avatar({ person, size = 100 }) {
  // ...
}
```

Now, if `<Avatar person={...} />` is rendered with no size prop, the size will be set to 100.

The default value is only used if the size prop is missing or if you pass size={undefined}. But if you pass size={null} or size={0}, the default value will not be used.

### Forward props with JSX spread syntax
When one component doesn't touch anything in the incoming props besides passing them down, we could consider using spread syntax to make it more concise.
```
// Using spread syntax
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```
```
// Not using spread syntax
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}
```

Although it seems more concise, it indicates another problem - do we really need to design our components this way?
Maybe we need to split things up so that we could pass props to whoever truly need them.


### Passing JSX as children
When you nest content inside a JSX tag, the parent component will receive that content in a prop called children.
For example, the Card component below will receive a children prop set to <Avatar /> and render it in a wrapper div:
```
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      {"Das"}
    </Card>
  );
}
```
```
import { getImageUrl } from './utils.js';

export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

```
```
export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}
```

You can think of a component with a children prop as having a “hole” that can be “filled in” by its parent components with arbitrary JSX. You will often use the children prop for visual wrappers: panels, grids, and so on.

This part reminds me of real-world code. I used Meta's Docusaurus to build my personal blog, which is just current website you are visiting.
In the `/pages/index.tsx` file, there is a `<Layout>` component and it is doing exactly the samething we mentioned above - acts as a container and is filled with whatever children passed into it. I found a possible repo for the `<Layout>` component at [here](https://github.com/facebook/docusaurus/blob/73ee356949e6baf70732c69cf6be8d8919f3f75a/packages/docusaurus-theme-classic/src/theme/Layout/index.tsx).


## Recap
- To pass props, add them to the JSX, just like you would with HTML attributes.
- To read props, use the function Avatar({ person, size }) destructuring syntax.
- You can specify a default value like size = 100, which is used for missing and undefined props.
- You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!
- Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.
- Props are read-only snapshots in time: every render receives a new version of props.
- You can’t change props. When you need interactivity, you’ll need to set state.
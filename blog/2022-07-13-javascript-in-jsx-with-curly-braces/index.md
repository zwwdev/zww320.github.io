---
slug: javascript-in-jsx-with-curly-braces
title: JavaScript in JSX with Curly Braces
authors:
  name: Ziwei Wang
  title: this website owner
  url: https://github.com/zwwang98
  image_url: https://github.com/zwwang98.png
tags: [React, React Docs(Beta) Personal Notes]
---

This is my personal notes on React Docs(Beta) - [JavaScript in JSX with Curly Braces](https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces). If interested, check whole series [here](https://zwwang98.github.io/blog/react-docs-beta-notes).

## What are the curly braces used for in JSX?
Add some JavaScript inside the markup in the JSX.

## Where to use curly braces?
1. inside JSX markup's tag
2. as attributes immediately following the `=` sign inside the JSX markup's tag

## Sometimes we see "double curly braces", what does it mean?
Besides string, number and other JavaScript expressions, we could also pass JavaScript objects in JSX.
Objects in JavaScript are also wrapped in curly braces, therefore, to pass a JavaScript objects in JSX, we need two nested pairs of curly braces.
We could often see this happening in React component's inline style:
```
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```
To make JavaScript object more clear, the code above could also be written like:
```
export default function TodoList() {
  return (
    <ul style={
      {
        backgroundColor: 'black',
        color: 'pink'
      }
    }>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```

## Recap
- Curly braces let you bring JavaScript logic and variables into JSX's markup.
- Curly braces could appear 
  - inside the JSX tag content or 
  - immediately after = in attributes.
- `{{` and `}}` is not special syntax: it’s a JavaScript object(inner pair curly braces) tucked inside JSX curly braces(outer pair curly braces).
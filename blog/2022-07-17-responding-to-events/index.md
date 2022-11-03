---
slug: responding-to-events
title: Responding to Events
authors:
  name: Ziwei Wang
  title: this website owner
  url: https://github.com/zwwang98
  image_url: https://github.com/zwwang98.png
tags: [React, React Docs(Beta) Personal Notes]
---

This is my personal notes on React Docs(Beta) - [Responding to Events](https://beta.reactjs.org/learn/responding-to-events). If interested, check whole series [here](https://zwwang98.github.io/blog/react-docs-beta-notes).

## Adding event handlers
- Define and implement a event handler function inside the component and then pass it into the returned JSX tag.
  ```
  export default function Button() {
    function handleClick() {
      alert('You clicked me!');
    }

    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }
  ```
- Define and implement a event handler function inside the JSX tag.
  ```
  ```
- More concisely, using the arrow function.
  ```
  <button onClick={function handleClick() {
    alert('You clicked me!');
  }}>
  ```

Event handlers
- 

## Event propagation
---
slug: rendering-lists
title: Rendering Lists
authors:
  name: Ziwei Wang
  title: this website owner
  url: https://github.com/zwwang98
  image_url: https://github.com/zwwang98.png
tags: [React, React Docs(Beta) Personal Notes]
---

This is my personal notes on React Docs(Beta) - [Conditional Rendering](https://beta.reactjs.org/learn/conditional-rendering). If interested, check whole series [here](https://zwwang98.github.io/blog/react-docs-beta-notes).


This doc introduces how to render lists.

Rendering data from arrays is common.
You will often need to show several instances of the same component using different data when building interfaces: from lists of comments to galleries of profile images. 
In these situations, you can store that data in JavaScript objects and arrays and use methods like map() and filter() to render lists of components from them.

Briefly speaking, there are two major points in this [doc](https://beta.reactjs.org/learn/rendering-lists):
- We could use `map()` or `filter()` function to convert a JavaScript array into an array of React components
- When rendering lists, we should pay attention to `key`


## Rendering data from arrays
Here’s a short example of how to generate a list of items from an array:

1. Move the data into an array:
```
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
```

2. Map the people members into a new array of JSX nodes, listItems:
```
const listItems = people.map(person => <li>{person}</li>);
```

3. Return listItems from your component wrapped in a `<ul>`:
```
return <ul>{listItems}</ul>;
```

Here is the result:
```
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}
```

## Filtering arrays of items
`filter()` method takes an array of items, passes them through a “test” (a function that returns true or false), and returns a new array of only those items that passed the test (returned true).

The code below filter people who are chemists and display their information.

```
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}
```

## Keeping list items in order with `key`
- You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array.
- Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.
- Rather than generating keys on the fly, you should include them in your data.

### Rules of keys
Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
Keys must not change or that defeats their purpose! Don’t generate them while rendering.

### Why does React need keys?
Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.

File names in a folder and JSX keys in an array serve a similar purpose. They let us uniquely identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.

## Recap
On this page I learned:
- How to move data out of components and into data structures like arrays and objects.
- How to generate sets of similar components with JavaScript’s `map()`.
- How to create arrays of filtered items with JavaScript’s `filter()`.
- Why and how to set key on each component in a collection so React can keep track of each of them even if their position or data changes.
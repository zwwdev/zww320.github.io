---
slug: conditional-rendering
title: Conditional Rendering
authors:
  name: Ziwei Wang
  title: this website owner
  url: https://github.com/zwwang98
  image_url: https://github.com/zwwang98.png
tags: [React, React Docs(Beta) Personal Notes]
---

This is my personal notes on React Docs(Beta) - [Conditional Rendering](https://beta.reactjs.org/learn/conditional-rendering).

This doc introduces several ways of conditional rendering. Some of them may seems fancy at first glance, but down to earth they are all just JavaScript.

## Conditionally returning JSX - plain JavaScript `if` and `else` statement
Nothing fancy. Just use JavaScript's `if` and `else` statement to determine what JSX the function return.
```
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```

### Conditionally Retuning `null`
In some situations, you won’t want to render anything at all. For example, say you don’t want to show packed items at all. A component must return something. In this case, you can return null:
```
if (isPacked) {
  return null;
}
return <li className="item">{name}</li>;
```
In practice, returning null from a component isn’t common because it might surprise a developer trying to render it. More often, you would conditionally include or exclude the component in the parent component’s JSX. Here’s how to do that!

## Conditionally including JSX - ternary operator, logic and operator and conditionally assignment
In the previous examples, there are some duplication. We could use some seemly "fancy" syntax to make code more [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) including:
- ternary operator `? : `
- logic and operator `&&`
- conditionally assignment

### Ternary Operator `? : `
```
return (
  <li className="item">
    {isPacked ? name + ' ✔' : name}
  </li>
);
```
This style works well for simple conditions, but use it in moderation. If your components get messy with too much nested conditional markup, consider extracting child components to clean things up.


### Logic And Operator `&&`
Inside React components, it often comes up when you want to render some JSX when the condition is true, or render nothing otherwise. With &&, you could conditionally render the checkmark only if isPacked is true:
```
return (
  <li className="item">
    {name} {isPacked && '✔'}
  </li>
);
```
A JavaScript && expression returns the value of its right side (in our case, the checkmark) if the left side (our condition) is true. But if the condition is false, the whole expression becomes false. React considers false as a “hole” in the JSX tree, just like null or undefined, and doesn’t render anything in its place.

### Conditionally Assignment
When previous shortcuts lead to a complex code, try using plain `if` statement again to modify variable's value.
You can reassign variables defined with let, so start by providing the default content you want to display in a `let` variable and reassign it in `if` statements.

```
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✔";
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

```

This style is more verbose but it looks good to me, since this is just JavaScript reassigning variable. After all conditions checking, we insert the variable using curly braces into JSX. Period.


## Recap
- In React, you control branching logic with JavaScript.
- You can return a JSX expression conditionally with an if statement.
- You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.
- In JSX, `{cond ? <A /> : <B />}` means “if cond, render `<A />, otherwise <B />”.`
- In JSX, `{cond && <A />}` means “if cond, render `<A />`, otherwise nothing”.
- The shortcuts are common, but you don’t have to use them if you prefer plain `if`.
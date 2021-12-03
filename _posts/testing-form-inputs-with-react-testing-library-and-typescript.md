---
title: Wrap your component in battle armor with  React Testing Library and Typescript
date: '2021-11-31'
description: 'What are web components? They are a set of browser APIs that give the developer the ability to create reusable customizable elements within a web application.'
tagLine: 'Text input element with Typescript and React Testing Library'
tags: post
---

# Wrap your component in battle armor with React Testing Library and Typescript

## In this post, I provide a hefty overview on using Typescript and React Testing Library to improve the code quality of a dynamic input element component.

![A light introduction to web components](https://res.cloudinary.com/tumulty-web-services/image/upload/v1638490898/tumulty.me/code-snippet-cover.webp)

To get started, let's take a look at the component I'm going to test.

```
type InputElementTypes = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

interface Props {
  label: string
  handleOnChange: (e: InputElementTypes) => void
  value: string
  placeHolder: string
  type: string
}

const TextInput = ({ label, handleOnChange, value, placeHolder, type }: Props) => {

  return (
    <label htmlFor={label}>
      {placeHolder}
      {type === "input" && (
        <input
          onChange={handleOnChange}
          aria-label={label}
          value={value}
          name={label}
          id={label}
          type="text"
          placeholder={placeHolder}
        />
      )}

      {type === "textarea" && (
        <textarea
          onChange={handleOnChange}
          aria-label={label}
          value={value}
          name={label}
          id={label}
          placeholder={placeHolder}
        ></textarea>
      )}
    </label>
  );
};
```

The react component above uses Typescript, so there are a few things you'll notice that are a bit different than a component written in JavaScript.

Like these first two lines...

```
type InputElementTypes = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>

interface Props {
  label: string
  handleOnChange: (e: InputElementTypes) => void
  value: string
  placeHolder: string
  type: string
}
```

**So what's "type InputElementTypes" and "interface Props"?**

I'll quickly reduce some confusion by stating the words "Props" and "InputElementTypes" are just labels, so you can change them to whatever word you want. The only rule is they have to be capitalized. Outside of that, you can call them whatever you want, though I recommend trying to be a descriptive as possible with your names.

For example, I can say `type ButtonElmTypes` or `interface TextInputProps`. What's important here is understanding what `type` and `interface` are.

So before we go and define what type and interface are, let's take a step back and make clear the purpose of using Typescript. We use Typescript because we want to ensure that the data being passed through our code is consistent and reliable. For example, when we use this `<TextInput />` component, we want to ensure that the prop `label` is always a string because we use it for the elements name, id, and aria-label. If, for some reason, the prop `label` was somehow a number or a function, it would break our code and through a bunch of errors. Typescript can help us reduce errors in our code by ensuring we pass information throughout the app with its intended data type.

So, `type` and `interface` are two ways we can define what data our component's properties will be.

Let's take another look at our interface...

```
interface Props {
  label: string
  handleOnChange: (e: InputElementTypes) => void
  value: string
  placeHolder: string
  type: string
}
```

An interface is an object, and inside this object, we list the component's properties as the keys and then set their values to the datatype of the property's value. We want to make sure that when we use the `<TextInput />` component, the label property is always a string, so we state `label: string` inside our interface.

I know that this upfront may seem a little confusing, but trust me, the interface concept will become much more straightforward if you read the previous paragraph at least two more times.

Let's take a look at `handleOnChange: (e: InputElementTypes) => void`. What in the heck is going on here?

We'll `handleOnChange` is the value, which is one of the component's properties. The `(e: InputElementTypes) => void`, is a way state that this property is a function in Typescript. Inside the parentheses, we have `e.InputElementType,` 'e' is the parameter's name, and 'InputElementTypes' is the type of that parameter.

So where have we seen 'InputElementType' before?

That's right we defined it just above our interface!

In Typescript, we can build some complex shapes for our data by combining types and interfaces. So let's look at this type.

```
type InputElementTypes = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
```

The type "InputElementType" is set to a couple of things that at first sight may be confusing if you don't know that types that come with `@types/react`.

`React.ChangeEvent<HTMLInputElement>` is a type that comes from `@types/react` library that allows us to define the shape of data used by an input element.

The `React.ChangeEvent<HTMLTextAreaElement>` also comes from `@types/react`, and this allows us to define the shape of data used by a text element.

And, the `|` is away say this type can either be one thing or another. So in this instance, the type "InputElementType" can either be an InputElement or a TextAreaElement.

Now why are we doing this?

We'll the `<TextInput />` component conditionally renders either a `<input type="text">` or a `<textarea/>` element depending on the `type` property. So we need to make the type that `handleOnChange` is going to be dynamic to as well, hence the crazy `type InputElementTypes`.

Now with the interface defined, we can apply to the component like so...

```
const TextInput = ({ label, handleOnChange, value, placeHolder, type }: Props)
```

I am deconstructing the props in an object, and followed by the closing bracket applying the Props with `: Props.` With the interface connected to our component, we officially wrapped our component in Typescript. We've drastically reduced potential errors when integrating this component with the rest of our app.

So, the big takeaway when using Typescript is that it reduces errors made by the programmer. On the flip side, the big takeaway of writing tests is that it reduces the number of errors when the app interacts with the users. You can see what Typescript and React Testing Library can be a lethal combination when developing a large-scale application.

**Now for the tests!**

At this point, I am somewhat confident that this input component will work as designed, but you still never actually know. That's why I'll write a test for it. Once you see this first test, you may ask yourself, "Why even bother? Isn't this a lot of unnecessary work for a silly input element?"

So let's clear the air.

You may not need tests for something basic like a standard input element, but what we are doing is wrapping armor around the component and preparing it for the unknown.

_All tests need to start simple and grow more complex when your application does._ Since this is component generates a text element based on a prop, my tests will revolve around the component actually creating these elements based on the prop.

To get started we need to have a few things installed.

```
npm i -D @babel/preset-env @babel/preset-react @babel/preset-typescript @testing-library/dom @testing-library/react @types/jest jest
```

Then we need to create a `.babelrc` to enable the babel packages we just installed. The reason why we need babel is that Typescript and React aren't considered "standard" JavaScript. Jest out of the box only runs with JavaScript, so we babel to transpile Typescript and React into JavaScript that Jest can run properly.

In the root directory of the app create the `.babelrc` file and put the following code in there. It should look familiar, since we just installed these a packages a few moments ago.

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
}
```

Next create a folder called `__tests__` inside the `src` directory this is where we'll be putting our tests. Th create a file called `TextInput.test.tsx` or the name of the file that contains your input element component followed by `.test.tsx.`

Inside our `TextInput.test.tsx` file load the required dependencies

```
import React from "react";
import { screen, render } from "@testing-library/react";
import TextInput from "./TextInput";
```

We are loading in two functions from React Testing Library `'@testing-library/react'` to write the tests. The first one is `screen,` a class that includes a family of methods that allow us to probe what's being rendered by the component in the DOM. The second one is `render`, which is a function that takes in the component as an argument and appends it to the DOM.

After we load these functions from `'@testing-library/react'` we load in the component we want to test, in this case its `<TextInput />`. This component requires props to be executed properly, remember all that fuss we made over our component props with Typescript? 😅

So next, create dummy props so the test can mock the functionality of the component

```
const mockProps = {
  label: 'text-input',
  handleOnChange: jest.fn(),
  value: 'Hello!',
  placeHolder: 'Text input here',
}
```

Some things look familiar, right? Our `mockProps` is an object with properties we've seen before. We are recreating an example of properties used by the `<FormInput/>` component. You'll notice that keys all match the data type described in the components interface.

One thing that may not make sense is `jest.fn()`. We need to set `handleOnChange` to some function for the input element to use. The `jest.fn()` is a mock function from the Jest library that is designed to mimic the interaction of a function execution.

The setup is now over, let's start with writing a test.

Jest provides a global function called `describe()`. The `describe()` function is a higher-order function that takes in two arguments. The first argument is a string used as a label for the aspect of the code being tested. In this case, it's the `<FormInput />` component. The second argument is the callback function containing a series of more functions that will test the component.

```
describe('<FormInput />', () => {

})
```

Inside the `describe()` callback, write your first test starting with another jest function, `it()` like the `describe()` function, the `it()` function takes in the same arguments; the first one a string used to label the test, and then a call back to execute the tests.

```
describe('<FormInput />', () => {
  it('renders a text input with the value "Hello!"', () => {

  });
})
```

Notice how this label is a bit more descriptive. I want to relay exactly what I want to test.

Finally, we write the code that will do the testing.

```
describe('<FormInput />', () => {
  it('renders a text input with the value "Hello!"', () => {
      render(<TextInput {...mockProps} />);

      const input: HTMLInputElement = screen.getByRole("textbox", {
          name: /test\-input/i,
      });

      expect(input.value).toBe(mockProps.value);
  });
})
```

We only wrote four additional lines of code, but there is a lot to unpack there, so let's start with the first line.

The first line, `const form = render(<FormInput {...mockProps} />)`, is where we allow React Testing Library to build out the form component in the DOM. We are setting the output of render() to the variable `form` to apply different functions to test what's being rendered.

`{...mockProps}` may look a little strange to you, but don't worry all I am doing is deconstructing the props into the component. It's the same thing as this...

```
<FormInput
  label='text-input',
  handleOnChange={jest.fn()}
  value='Hello!'
  placeHolder='Text input here'
/ >
```

The second line, `const input = screen.getByRole('input', { name: 'text-input' });` is where we reach into the render() output and grab some aspect of it to test. What `screen.getByRole('input', { name: 'text-input' });` is doing is targeting the `input` element, by the name attribute.

You'll notice that Typescript is sneaking into our tests. I am ensuring that the value of `input` is an input element by applying `HTMLInputElement` type assertion to it.

Since render() created the input element with our properties, what we are testing is an input element that looks like this...

```
<input
  onChange={jest.fn()}
  value='Hello!'
  name='text-input'
  id='text-input'
  type="text"
  placeholder='Text input here'
/>
```

Now that we set this input element, we can operate on it and make sure it works the way it was intended too.

**Our first test is complete!**

Now all we have to do is execute it. You execute your test by typing `npx jest FormInput.test.tsx` into terminal.

What should output is that we do expect the value of the input element to be 'Hello!' after the on change event occurs. So your results should look something like this...

![success test](https://res.cloudinary.com/tumulty-web-services/image/upload/v1638488534/tumulty.me/passed-test-1.webp)

You may be thinking to yourself well duh! Why do we need to write a test for a prop that we set? It may seem sort of silly, but as I mentioned we need to start simple. We checked if our component ran as it was intended.

Let's write another test to see what happens if we change the prop in some way.

```
  it('renders a text input with the value "Good Day" after prop change', () => {
    render(<TextInput {...mockProps} value="Good Day" />);
    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: /test\-input/i,
    });

    expect(input.value).toBe("Good Day");
    expect(input.value).not.toBe("Hello!");
  });
```

As you can see here, this test looks virtually the same as our previous test, except in two key areas.

The first change is we now have a `value="Good Day"` prop next to our deconstructed props. We will test if "Good Day" is rendered in the component over "Hello" from our initial `mockProps.`

We also now have two `expect` statements and the first one checks to see if our "Good Day" value is rendered while the second one checks if our initial value is not rendered.

If you run it, you'll see that it does pass! Ok, that proves that when the prop changes, the output will change along with it. We can confidently state that our component renders the props without any issues.

Now I want to check the uncommon aspects of this component. You see this component, as previous stated, was designed to toggle between `<input type="text">` or a `<textarea/>`. Let's see if we can write some tests that will check if the value of the prop `type` changes so will the element.

```
  it('renders the input element when the type prop is "input"', () => {
    const { container } = render(<TextInput {...mockProps} />);
    const input: HTMLInputElement | HTMLTextAreaElement | null =
      container.querySelector(mockProps.type);


    expect(input).not.toBeNull();
  });

```

What's different about this test from our previous test is that we extract a `container` object from render. With the `container` object, we can use standard JavaScript selector methods to get properties within the DOM.

So with this line...

```
const input: HTMLInputElement | HTMLTextAreaElement | null =
      container.querySelector(mockProps.type);
```

We are looking for an input element in the DOM, because `mockProps.type` is set to `input`.

Now all we want to do is check if the input element exists, and we do that with this line of code.

```
expect(input).not.toBeNull();
```

If you run it you'll see that the test passes. Great so the `type` property works as it was intended. What happens when we change the `type` property to something neither "input" nor "textarea"?

```
  it("renders the correct element when the type prop is changed to textarea", () => {
    const { container } = render(<TextInput {...mockProps} type="textarea" />);
    const input: HTMLInputElement | HTMLTextAreaElement | null =
      container.querySelector("textarea");

    expect(container.querySelector('input')).toBeNull();
  });
```

You can see the `type` is set to "paragraph," and my `input` variable is set to look for a `<textarea />.` We'll see that we have a passing test when we run the following expect statement with `.toBeNull()` because the `<textarea />` was not generated when the type was a paragraph.

I can now safely say the component is battle-tested against different use case scenarios because it's be integrated with the rest of the app. With the combination of Typescript and testing, I am confident that this component will work as it was intended no matter where I use it in the application. No unintended side effects will break this component. It's ready for anything!

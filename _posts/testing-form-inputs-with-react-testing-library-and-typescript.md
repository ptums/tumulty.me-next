---
title: Wrap your code in battle armor with  React Testing Library and Typescript
date: '2021-11-31'
description: 'What are web components? They are a set of browser APIs that give the developer the ability to create reusable customizable elements within a web application.'
tagLine: 'Text input element with Typescript and React Testing Library'
tags: post
---

# Wrap your code in battle armor with React Testing Library and Typescript

## In this post, I provide a light introduction on using Typescript and React Testing Library to improve the code quality of a simple text input element.

![A light introduction to web components](https://res.cloudinary.com/tumulty-web-services/image/upload/v1638304405/tumulty.me/typescript-react-testing-cover.webp)

So first things first, let's take a look at the component I'm going to test.

```

interface Props {
  label: string
  handleOnChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
  value: string
  placeHolder: string
}

const FormInput = ({
  label,
  handleOnChange,
  value,
  placeHolder
  }: Props) => (
    <label htmlFor={label}>
      {placeHolder}
      <input
        onChange={handleOnChange}
        value={value}
        name={label}
        id={label}
        type="text"
        placeholder={placeHolder}
      />
    </label>
  )

```

The react component above uses Typescript, so you'll notice `interface Props` at the top of the file.

**What is interface Props?**

"Props" is the label I am giving the interface, so I could call this anything. I am calling the interface "Props" because I applied this interface to the component's properties. And, what's a quick way of saying properties? " Props."

_So, what's an interface?_ An interface is a core part of Typescript. When we use Typescript, we want to describe the data throughout the application based on its data types. So an interface is a way to collect a set of attributes and their data types you'll use grouped in your application. The benefit of using an interface with your component is that it ensures that your component always has the correct set up of props.

Take a closer look at this line...

```
({
  label,
  handleOnChange,
  value,
  placeHolder
  }: Props)
```

Label, handleOnChange, value, placeHolder are all the properties of the component. By wrapping these values in {} I am desctructuring them, which frees me from writing `props.label, props.handleOnChange,...` and what I am doing at the end of the closing brack is setting ` : Props`, which is applying that interface to these component props.

The rest of this component is a standard `input` element. The benefit of applying Typescript is that I ensure that the data this input element will process will always be the same and reduce any unpredictable behavior.

**Now on to the tests**

I am somewhat confident that this input component will work as designed, but you still never actually know. That's why I'll write a test for it. Once you see this first test, you may ask yourself, "Why even bother? Isn't this a lot of unnecessary work for a silly input element?" So let's clear the air. You may not need tests for something basic like a standard input element, but what we are doing is wrapping armor around the component and preparing it for the unknown.

You may find that you are reusing this input component repeatedly since it's so simple. In the future, you may be building a form that that needs to mutate the input. Well, we didn't design that input to perform that task. Typescript won't inform you if the string was mutated, but the test will.

_All tests need to start simple and grow when your application does._ The test I'll cover is to make sure that when the user types in the text, the value of the input changes to that input.

**Install the proper dependencies**

```
  npm install -D jest ts-jest @testing-library/jest-dom
  @testing-library/react @types/jest

```

If you are following along with your own application, there is additional configurations to get Jest working with React and Typescript. Feel free to email me ptumulty923@gmail.com, and I'll walk you through it.

**Create a file called FormInput.test.tsx or the name of the file that contains your input element component followed by .test.tsx.**

**Load up the required dependencies in this file**

```
import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'

import FormInput from './FormInput.tsx'
```

We are loading in two functions from React Testing Library `'@testing-library/react'` to write the tests. The first one is `fireEvent` this class contains a family of methods that will help us mimic DOM changes in the component. The second one is `screen,` a class that includes a family of methods that allow us to probe what's being rendered by the component in the DOM. The third one is `render`, which is a function that takes in the component as an argument and appends it to the DOM.

Below that we are loading in the component, how else are we going to test it?

**Next, create dummy props so the test can mock the functionality of the component**

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

**The setup is now over, let's start with writing a test**

```
describe('<FormInput />', () => {

})
```

Jest provides a global function called `describe()`. The `describe()` function is a higher-order function that takes in two arguments. The first argument is a string used as a label for the aspect of the code being tested. In this case, it's the `<FormInput />` component. The second argument is the callback function containing a series of more functions that will test the component.

**describe() is used to group tests, it() is used to execute the test**

```
describe('<FormInput />', () => {
    it('renders the text input value', () => {

  })
})
```

Inside the `describe()` callback, write your first test starting with another jest function, `it()` like the `describe()` function, the `it()` function takes in the same arguments; the first one a string used to label the test, and then a call back to execute the tests.

Notice how this label is a bit more descriptive. I want to relay exactly what I want to test.

**Finally, we write the code that will do the testing**

```
describe('<FormInput />', () => {
    it('renders the text input value', () => {
      const form  = render(<FormInput {...mockProps} />)
      const input = screen.getByRole('input', { name: 'text-input' });

      fireEvent.change(input, { target: { value: 'Hello!' } })
      expect((input as HTMLInputElement).value).toBe('Hello!')
  })
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

The next line is pretty cool . `fireEvent.change(input, { target: { value: 'Hello!' } })` is mimicking someone typing into the input the words "Hello!". It's essentially a small bot recreating how an actual person will use the input. `FireEvent`, as I mentioned before comes from the React Testing Library and `.change()` is one of the many methods coming from `fireEvent`.

The `.change()` method takes in two arguments. The first argument is the element we want to mimic the changes, and in this case, we want to do it on the form element, the `input` variable. The second argument is what we should change the value to, which is the value we passed into the component 'Hello!'.

Note: Outside of the test, I forgot the mention that the properties value and the handleOnChange function should be set to getters and setters of a react hook. So commonly, this is how you would use the `FormInput` component.

```
const [ fullName, setFullName] = useState('')

return (
  <FormInput
    label="full-name"
    handleOnChange={(e) => setFullName(e.target.value)}
    value={fullName}
    placeHolder: "Enter your full name"
  />
)
```

So in the world of the test, `fullName` is `{ target: { value: 'Hello!' } }` and `fireEvent.change` will trigger `handleOnChange` which is `(e) => setFullName(e.target.value)`.

The final line, `expect((input as HTMLInputElement).value).toBe('Hello!')` is checking if the change we set up works properly. The function `except()` takes in two arguments. The first one is the element we want to check and the second argument is what we expect the outcome to be.

In this case the first argument is `(input as HTMLInputElement).value`, this is a bit more complex since this line is using Typescript. If it were just JavaScript the first argument would be `input.value`. So lets' take a closer look at `(input as HTMLInputElement)`.

[The 'as' keyword in TypeScript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) is a way for us to convert the type of an element to a more specific element. By default `input` would be `HTMLElement`, which has a long list of characteristics, but none of the are `.value`, so we need to get more specific on the type of HTMLElement we are using. By changing `input` to `(input as HTMLInputElement)` we are staging that this element needs to take on the common attributes of an input element.

Another way we could have written it is without 'as' and using type annotation. From the start, we declare that the value of `input` is goin to be `HTMLInputElement`. So the test will look like this...

```
it('renders the text input value', () => {
    const form  = render(<FormInput {...mockProps} />)
    const input: HTMLInputElement = screen.getByRole(
      'input',
      { name: 'text-input' }
    );

    fireEvent.change(input, { target: { value: 'Hello!' } })
    expect(input.value).toBe('Hello!')
})
```

I think this way is a little simpler and uses less code. _Fun fact:_ The less code you write the faster your program runs. 😅

**The test is complete!**

Now all we have to do is execute it. You execute your test by typing `npx jest FormInput.test.tsx` into terminal.

What should output is that we do expect the value of the input element to be 'Hello!' after the on change event occurs. So your results should look something like this...

![success test](https://res.cloudinary.com/tumulty-web-services/image/upload/v1638304461/tumulty.me/success-test.webp)

Now, just for fun I tricked my test into failing just to see what would happen. I changed the word 'Hello!' to 'Hello'. This was the results...

![failed test](https://res.cloudinary.com/tumulty-web-services/image/upload/v1638304439/tumulty.me/failed-test.webp)

Wow, what an output!

React Testing Library is showing us exactly why our test failed. The input element isn't designed to mutate the value. So we set the test to expect a different value from what is being entered, then the test fails.

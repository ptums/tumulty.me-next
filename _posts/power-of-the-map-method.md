---
title: The power of the map method
date: '2017-05-06'
description: 'I first came across the map method about a year ago in a React.js application. In the app, this method iterated over this.props.someArray and ran a callback function that spit that data into some JSX code . Thinking nothing of it, I assumed it was a neater, more modern way to iterate over data.Boy, was I wrong…'
tagLine: 'Go all mad scientist on your arrays'
tags: post
---

# The power of the map method

## I first came across the map method about a year ago in a React.js application. In the app, this method iterated over this.props.someArray and ran a callback function that spit that data into some JSX code . Thinking nothing of it, I assumed it was a neater, more modern way to iterate over data.

![map method](https://res.cloudinary.com/tumulty-web-services/image/upload/v1637275415/tumulty.me/1_oVv2u4W4fh41NtNyzI35vw.png)

_Boy, was I wrong…_

Recently, I discovered that the map method can perform more complex tasks than any procedural loop or functional loop. I made this discovery by setting up an experiment that compares how this method and the forEach method handled the same array.

You can see the full experiment here in this [github repo](https://github.com/ptums/using-javascript-array-methods).

From the experiment, this is what I learned about the **map method.**

**It is similar to forEach in the following ways:**

1. Both require data to iterate over in the form of an array.
2. Both are a functional way of iteration.
3. Both require a callback function.
4. That callback function can take in three arguments: value, index, array.
5. If not utilized as it was intended the **map method** can work similar **forEach.**

**Differences**

1. The use of the callback function.

The purpose of the callback function in the map method is intended to allow the data to be changed. What this method does to your array is it makes a copy of it and then runs a callback function on every element inside that copy.

That is straight out of the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

_"The map() method creates a new array with the results of calling a provided function on every element in this array."_

Unlike the map method, the purpose of the callback function in the forEach method is simple. It’s callback is intended to perform an operation directly on, or based on, the data in each element of the array.

Let me demonstrate.

Below I have a function that will change the argument passed into it to lowercase (assuming its a string).

```
function transformArray(elm) {
    return elm.toLowerCase();
}
```

If I were to try and run this function as the callback for a forEach loop like so, I would get 'undefined' printed in the console.

```
var data = ["Happy", "Birthday", "To", "Me"];
data.forEach(transformArray);
returns 'undefined'
```

This is because forEach’s callback restricts any modification to the elements inside the array.

This is an example of a working callback function in a forEach.

```
function transformArray(element) {
  console.log("Hello from " + element);
}

var nicePeople = ["Bob", "Kam", "Tucker"];

nicePeople.forEach(transformArray);

// returns "Hello from Bob" , "Hello from Kam", "Hello from Tucker"
```

We aren't changing the elements in any way shape or form. We are simply consoling a message that contains those elements.

That is how map is different. If necessary map can use both examples of the transformArray function as its callback function. Since map makes a copy of the array it has the ability to be operated on and modified.

```
function transformArray(elm) {
    return elm.toLowerCase();
}

var data = ["Happy", "Birthday", "To", "Me"];
data.map(transformArray);

returns ["happy", "birthday", "to" ,"me"]

```

works…

And

```
function transformArray(elm) {
  console.log("Hello from " + elm);
}

var nicePeople = ["Bob", "Kam", "Tucker"];
nicePeople.map(transformArray);

// returns "Hello from Bob" , "Hello from Kam", "Hello from Tucker"
```

works…

This is a true testament of the capabilities of the map method.

Through this comparison experiment, I gained a deeper understanding of these methods. I learned they operate on arrays differently and were designed for different purposes. However, ultimately when it comes to more complex data manipulation map is the way to go.

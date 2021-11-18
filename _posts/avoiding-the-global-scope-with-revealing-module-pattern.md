---
title: Avoiding the global scope with the revealing module pattern
date: "2017-05-08"
description: "I am guilty of writing global variables. That’s not something I’m proud to admit, but it’s the truth.
When I started programming, relying on the global space seemed like the most sensible approach — this allowed me easy access to all of my variables and functions."
tagLine: "The top way to make your JavaScript code more secure"
tags: post
---

# Avoiding the global scope with the revealing module pattern

## I am guilty of writing global variables. That’s not something I’m proud to admit, but it’s the truth.

![avoiding the global scope](https://res.cloudinary.com/tumulty-web-services/image/upload/v1637274973/tumulty.me/1_PhHed6b7k3unUVgBgvcemA.png)

When I started programming, relying on the global space seemed like the most sensible approach — this allowed me easy access to all of my variables and functions. My first apps were small, though — the inherent problems of writing code this way inevitably showed up as I took on larger projects.

Think of any big website — let’s use Amazon for example. If the developers of that site stored all their variables globally, their code would take up hundreds of lines of the code base and drastically slow down the site.

*"Global scopes can be slow, because each time a function executes, it cause a temporary calling scope to be created. JavaScript searchers for the first item in the scope chain, and if it doesn’t find the variable, it swells up the chain until it hits the global object."* 

[http://www.monitis.com/blog/30-tips-to-improve-javascript-performance/](http://www.monitis.com/blog/30-tips-to-improve-javascript-performance/)

Global variables can also lead to security flaws. Functions can be invoked through the browser when they’re defined in the global space — if the wrong person tampers with those functions, they might find a way to penetrate the site. Think back to Amazon — if the site relied on global functions for handling financial transactions, anyone shopping there would be taking a risk.

Beyond these two issues, there are a many other problems with populating the global space. Here is a link to a good thread on the topic on Stack [Overflow](https://stackoverflow.com/questions/10525582/why-are-global-variables-considered-bad-practice).

A site that size needs an architecture that will ensure those types of issues never occur.

**So, how do we avoid using the global space?**

Well, there are a few different approaches, each one called a 'Design Pattern'.

One interesting 'Design Pattern' is the Revealing Module Pattern.

Let me demonstrate.

```
// Here are some global variables

var phraseOne = "Life";
var phraseTwo = "Begins";
var phraseThree = "After";
var phraseFour = "Coffee";
```


Our goal is to have access to these variables while still keeping them out of the global space.

Here's how it is done.


```
/* I define a variable that is going to run an
   immediately-invoked-function-expression
*/

  var coffeeProgram = (function (){

  }());
```

*Quick background: What we are setting up here is called a module, which is like a “class” in JavaScript. Using a module protects the code from being accessed from the outside and while allowing us to set up public and private variables and functions on the inside.*

The *immediately-invoked-function-expression* does exactly what the name suggests, it automatically initializes itself when the script is called. By setting the *immediately-invoked-function-expression* to a variable we are turning it into a module.

**This is what sets us free from the global space!**

But…

There is an issue. We can’t just declare our variables inside the module and expect them to be automatically accessible.

```
var coffeeProgram = (function () {
    var phraseOne = "Life";
    var phraseTwo = "Begins";
    var phraseThree = "After";
    var phraseFour = "Coffee";
}());
```

If we tried running *console.log(coffeeProgram.phraseOne);* our browser would return an error that looks something like this.

```
Uncaught TypeError: Cannot read property 'phraseOne' of undefined at
<anonymous>:
```

The way we have it now our variables are private and only accessible to other elements in the module.

**So, how can we gain access these variables?**

The answer is by setting up a public space inside the module.

```
/* By adding return{ } anything inside those brackets is now
  public and completely accessible.
*/

var coffeeProgram = (function () {
    var phraseOne = "Life";
    var phraseTwo = "Begins";
    var phraseThree = "After";
    var phraseFour = "Coffee";
    return {
    };
}());
```

Now, we can provide access to our private variables by modifying our public space:

```
var coffeeProgram = (function () {
    var phraseOne = "Life";
    var phraseTwo = "Begins";
    var phraseThree = "After";
    var phraseFour = "Coffee";
    return {
        phraseOne: phraseOne
    };
}());
```
Notice that return is an object; we can assign our private variables to its keys. Here, I created a key called phraseOne and set the value to our private variable *phraseOne.*

Now when we can *console.log(coffeeProgram.phraseOne);* and instead of an error we will get "Life".

So, we did it! If we continue to put all our code inside the *coffeeProgram* module we are totally free of the global space and still have access to our variables. From this point onward you can completely avoid the global space.

*This post was original published on [Medium.com](https://medium.com/@petertumulty/avoiding-the-global-scope-with-the-revealing-module-pattern-6796ae7af1b9)*
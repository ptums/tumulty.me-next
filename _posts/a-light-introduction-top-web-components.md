---
title: A light introduction to web components
date: '2021-01-17'
description: 'What are web components? They are a set of browser APIs that give the developer the ability to create reusable customizable elements within a web application. A browser native way of designing sites in a similar way to using a JS framework.'
tagLine: 'Component based development with browser APIs'
tags: post
---

# A light introduction to web components

## What are web components? They are a set of browser APIs that give the developer the ability to create reusable customizable elements within a web application.

![A light introduction to web components](https://res.cloudinary.com/tumulty-web-services/image/upload/v1637273811/tumulty.me/tekton-SVpCSOCcCwA-unsplash_1.jpg)

Source material for this post

- [Web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
- [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
- [Using templates and slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

### From a Birds-eye view

One of the main reasons developers flock to frameworks like [React.js](https://reactjs.org/) or [Vue.js](https://vue.org) is because they 10x site development by allowing the developer to reuse different aspects of a website in different areas. Great example is a button. In one of these frameworks, a developer can code out the style and functionality of a button and then have the ability to splatter it in as many areas of the website they desire.

Until now achieving something like this natively using basic HTML & JavaScript was nearly impossible...

**In comes, web components!**

Web components are made up of three technologies that will allow you to create reusable components of complex site elements when used together.

- Custom Elements API
- Shadow DOM
- HTML templates

### Custom Elements API

The Custom Elements API allows the developer to create custom elements [that encapsulate an HTML document's functionality.](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)

Creating a custom element starts with `CustomElementRegistry` object, which allows the developer to register a custom element and return new information on that element.

To get things start you use `CustomElementRegistry.define()`

This method takes in two arguments:

**A label for your custom element as a string**

```
CustomElementRegistry.define('first-web-component')
```

**A class name that contains the functionality that'll be applied to the element**

```
class FirstComponent extends HTMLParagraphElement {
    constructor() {
      // Always call super first in constructor

       super();
    }
}

CustomElementRegistry.define(
   'first-web-component',
    FirstComponent,
    ...
)
```

**The third option is an object that contains an extends property with a DOM element as its value**

```
CustomElementRegistry.define(
   'first-web-component',
    FirstComponent,
    { extends: 'p'}
)
```

That's sort of an overview of Custom Elements API. I plan to report my findings when I begin building apps with it.

### Shadow DOM

Keeping the structure, style, behavior of your code hidden and separate from other code on other pages is essential using web components. Using the second technology in the Web Components stack, the Shadow DOM gives you the ability to do that. The Shadow DOM provides a way to attach a separate and hidden DOM to an element.

These are the basic aspects of the Shadow DOM.

- Shadow host: Is a normal DOM node element that connects to the shadow DOM
- Shadow tree: the DOM tree that makes up the Shadow DOM
- Shadow boundary: The end of the Shadow DOM and where the regular DOM begins again.
- Shadow root: The first parent node of the Shadow DOM tree

The way the DOM is changed using code is no different from changing the Shadow DOM's DOM. You can use all the same Web APIs on the Shadow DOM. The only difference between the actual DOM and the Shadow DOM is that the code written to change the Shadow DOM won't affect the regular DOM.

Also, the Shadow DOM actually has been around for quite a while. An excellent example of the Shadow DOM in action is using the video tag. The buttons to play, rewind, fast forward, or pause the video seen by the user is actually a small part of a list of elements available. The rest of the elements are hidden by the shadow DOM.

**To get started...**

To implement the shadow DOM, you use the `Element.attachShadow()` method, which takes in one parameter. The parameter is the option to either open or close the Shadow DOM.

To open

```
Element.attachShadow({ mode: open })
```

To close

```
Element.attachShadow({ mode: closed })
```

To apply the { mode: open }, to the method means that you can now access and write could to the Shadow DOM. If you were thinking `{ mode: closed }` prohibits that ability, you'd be correct.

Once you initialize the Shadow DOM, you can use JavaScript to create elements and execute DOM manipulations code.

**For example**

```
const shadow = Element.attachShadow({ mode: open });
const shadowDiv = document.createElement('div');
shadow.appendChild(shadowDiv);
```

### HTML Templates

To create HTML templates there are two available elements `<template>` and `<slot>`. Any HTML code wrapped in these tags is now reusable.

Here's a basic HTML template

```
<template id="main-header"> <h1> Hello World </template>
```

If you want to apply this template to a webpage, you'll have to do so using the technologies we just talked about **Custom Elements API** and the **Shadow DOM.**

**HTML**

```
<template id="main-header"> <h1> Hello World </template>
```

**JavaScript\***

```
customElements.define(
      'header-components',
      class extends HTMLElement {
         constructor() {
           super();

           let template = document.getElementById('main-header');
           let templateContent = template.content;

           const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(templateContent.cloneNode(true));


         }
      });
```

Now, if you run this code in the browser the content of the main-header template is now visible.

This is my first introduction to Web Components, and after wrapping my head around it, I think this is a way native way to do a lot of the things a framework like React.js can do. I also believe that Web Components are still primitive and doesn't have the support that React.js does. However, once it matures, I'll definitely be switching over to Web Components over React.js for the simple reason that the less I need to rely on external libraries to build applications, the better.

---
title: The pieces that make up browser caching
date: "2021-02-10"
description: "To start learning to love and understand caching, let's take a look at it's pieces and what sort of problems caching is trying to solve when it comes to user asking for a web page."
tagLine: "Stop hating brower cache and learn to love it!"
tags: post
---

# The pieces that make up browser caching
## To start learning to love and understand caching, let's take a look at it's pieces.

![A light introduction to web components](https://res.cloudinary.com/tumulty-web-services/image/upload/c_scale,w_750/v1630949949/tumulty.me/legos.jpg)


### Where to begin? Well what problem is caching trying to solve?

You might never think about it this way, but the idea of going to website is completely wrong. In reality, you are asking for the website to come to you.

And the problem that caching is trying to solve is when you ask for a website that has loads and loads of conent such as big pictures, videos, ads etc., how is all that going to be delievered quickly?

Before I go into caching I'd like to mention a few facts on [requesting web pages with large amounts of content](https://web.dev/http-cache/), just so we are on the same page.

- Pages that have loads of content often require multiple round trips to the server to grab all the content and resources
- You'll wait for your page to load until all essential resources and contents have been requested
- Having a poor network connection makes this entire process much more difficult

And,  caching is a feature built into the browser that helps manage these issues with pages that have loads of content.

### The pieces that make up browser caching

Browser caching is a collection of Web API's that are found in all browsers.

- Cache-Control
- ETag
- Last-Modified

### Cache-Control

Cache-Controls header allows you to control the cache on both the browser and server response. Along with the file, the server also sends instructions for how the file should be processed. In these instructions is where you would declare the `Cache-Control` header and a [directive to it.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#cache_request_directives)

### ETag

The ETag header [controls the version of a resource](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) and enables the cache to be more efficient and save bandwidth. By applying ETags to cached resources, the server can make requests better based on the tag, rather than scanning through the entire file again to see if it's the same or different.

### Last-Modified

Last-Modified is a record of the date the resource was last changed.

## How this process works

When the user requests a web page, the request is first routed to the cache. To check if there are any of the resources already there. If the resources are in the cache, the page will use those resources and send fewer requests to the network.

Managing how the request routes to caching is controlled by messages attached to the request. These messages are called request headers and response headers. The request headers are the messages that deal with the browser asking for information. While the response headers are the messages that deal with sending information. The combination of these request/response headers serve as a way to configure and integrate cache is the information flow back n' forth between the browser and the server.

### Request headers

As a developer, I don't have to touch these headers all that often from what I am gathering. The request headers are pre-configured and never really touched ever again. The request headers are made up of two messages `If-None-Match` and `If-Modified-Since`.

- The `If-Modified-Since` header can be used to make a request coming in conditional. Its often used as a way to compare a list of E-Tags on the browser side and a list of E-Tags on the server side. The purpose of this header is to [allow cache to update resources only if they are changed.](https://www.oreilly.com/library/view/http-the-definitive/1565925092/re30.html)

- The ``If-None-Match` header also makes the request coming in conditional, but used if either browser or server doesn't have the [target resource stored anywhere](https://tools.ietf.org/html/rfc7232#page-14)

### Response Headers

The response headers is where you as the developer set up the caching strategy for the page. The `Cache-Control`, `ETag`, and `Last-Modified` headers all belong here.

In the wild, you'll find that some web servers handle this aspect of caching for you, and others don't. Some web servers don't preconfigure the response headers because it's designed for the developer to integrate a custom caching strategy. If you need that level of control over caching and need to get very granular with caching, I would choose one of these web servers that leave your hands' caching strategy.

Configuring the `Cache-Control`, `ETag`, and `Last-Modified` in different ways is essentially how you develop a caching strategy. Here's a short video demonstrating how these work in the browser .

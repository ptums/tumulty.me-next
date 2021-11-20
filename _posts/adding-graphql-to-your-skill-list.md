---
title: Adding GraphQL to your skill list
date: '2018-05-26'
description: "It took me three years to learn how RESTful APIs work and how to build them — and that's a long time to learn something. So when I first read about GraphQL, I could feel the world crashing down around me. It was frustrating at first. I didn't want to pick up another way to build APIs because it took me..."
tagLine: 'A comparison between RESTful APIS and GraphQL'
tags: post
---

# Adding GraphQL to your skill list

## It took me three years to learn how RESTful APIs work and how to build them — and that's a long time to learn something. So when I first read about GraphQL, I could feel the world crashing down around me.

![A light introduction to web components](https://res.cloudinary.com/tumulty-web-services/image/upload/v1637273891/tumulty.me/1_rj-C66EPN2lg5pMARuk-eA.png)

_"a technology that is poised to replace, or at the very least, drastically change the way APIs are designed and presented — GraphQL."_

It was frustrating at first. I didn't want to pick up another way to build APIs because it took me forever to understand how to build them using REST. But I recently pushed myself to build something with GraphQL anyway and made a demo application using [Express](https://expressjs.com/) & [Apollo](https://www.apollographql.com/). After working on it for a week, I realized using GraphQL makes API development much easier, especially if you expect your application to grow in size.

Here's why it is easier.

Here we have a server file with REST based routes.

```
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Guests = require('../models/Guests');
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

app.get('/guests', async (req, res) => {
 const guests = await Guests.find({}, (err, data) => data);
 res.json(guests);
});

app.post('/guest', async (req, res) => {
  const guest = await Guests.create(res);
  return guest;
});

app.put('/guest/:id', async (req, res) => {
 const updatedGuest =  await Guests.update({ _id: req.params.id },
 {name: req.body.name, contact: req.body.contact});
 return updatedGuest;
});

app.delete('/guest/:id', async (req, res) => {
 const deletedGuest = await Guests.findByIdAndRemove(req.params.id);
  return deletedGuests;
});

app.listen(port, () => {
  console.log(`Server running on: ${port}`);
});

```

Nothing too crazy, but if this application were to grow this file would start to look messy with new routes. The problem with routes is they are a variation of the same bit of code. You can even claim that its DRY code because you are repeating similar code again and again.

GraphQL isn't designed to build on routes. GraphQL is designed to streamline your entire API through a single route. Your focus isn't on mapping data to urls, but on translating queries and data mutations to GraphQL syntax.

---

Let's rebuild the REST API above with a GraphQL server using Apollo & Express.

This is the basic skeleton of a GraphQL server.

```
const express = require('express');
const bodyParser = require('body-parser');
const { makeExecutableSchema } = require('graphql-tools');
const cors = require('cors');
const Guests = require('../models/Guests');
const { graphqlExpress } = require('apollo-server-express');
const app = express();
const port = 8080;

const typeDefs = `

`;

const resolvers = {
  Query: {

  },
  Mutation: {

  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(cors());

app.use('/guests',
  cors(),
  bodyParser.json(),
  graphqlExpress({ schema })
);

app.listen(port, () => {
  console.log(`Server running on: ${port}`);
});
```

Much different than the file we saw before. The key differences are we have a single route, two new functions, and three new variables.

Let's go through this file from top to bottom to cover everything. The two new functions are _makeExecutableSchema_ and _graphqlExpress._

```
const { makeExecutableSchema } = require('graphql-tools');
const { graphqlExpress } = require('apollo-server-express');
```

The makeExecutableSchema function from the graphql-tools library has a single purpose. This function takes in a schema and related queries and mutations as a single argument and transforms them into executable javascript code.

Note: the bulk of the custom code written by the developer of a GraphQL application revolves around building out this schema and related queries and mutations.

The second function, the graphqlExpress function from the apollo-server-express also has a single purpose. Its purpose is to connect this new javascript code to the route.

```
app.use('/guests',
  cors(),
  bodyParser.json(),
  graphqlExpress({ schema })
);
```

-Note: I added bodyParser.json() and cors() middleware to the route to enable posting and prevent Cross-Origin Resource Sharing issues.
That's it for the setup. Now let's focus on building out the code specific for this CRUD application.-

---

We start with the schema. As I mentioned, the makeExecutableSchema function requires a schema as an argument. The purpose of the schema is to translate the data and functions used by the application into GraphQL syntax.

```
const typeDefs = `
  type Query { guest: [Guest]},

  type Mutation {
    addGuest( name: String, contact: String): Guest,
    updateGuest (_id: String) : Guest,
    removeGuest (_id:String) : Guest
  }

  type Guest { _id: String, name: String, contact: String}
`;
```

Above we have a variable called _typeDefs,_ and it equals a schema written entirely in GraphQL. Here’s the breakdown:

_type Query { guest: [Guest]}_ — This is the GraphQL way of saying we want to write a query called guest that will receive all the documents inside the Guest collection when executed.

It'll look something like this.

```
query {
  guest
}
```

**type Mutation { addGuest( name: String, contact: String): Guest, updateGuest (\_id: String) : Guest, removeGuest (\_id:String) : Guest }** — This is the GraphQL schema for the list of CRUD functions used to mutate the documents in the Guest collection.

**type Guest { \_id: String, name: String, contact: String}** — We do all this querying and mutating of the Guest collection, but GraphQL doesn’t understand the shape of the documents inside this collection. So, we need to write the schema for the type of data stored in the Guest collection.

The second argument for the _makeExecutableSchema_ is called **resolvers** and its purpose is to bring the **typeDefs** schema to life. The _resolvers_ is an object that contain methods that correlate with queries and mutations defined in the GraphQL schema. These methods will directly interact with our guest Model and execute all the CRUD operations.

```
const resolvers = {
  Query: {
    guests: () => Guests.find({}, (err, data) => data),
  },
  Mutation: {
    addGuest: async (root, args) => {
      const guest = await Guests.create(args);
      return Guests.findOne({ _id: guest._id });
    },
    updateGuest: async (root, args) => {
      const id = await JSON.parse(args._id);
      return Guests.update({ _id: id },
      {name: args.name, contact: args.contact},
      (data => data));
    },
    deleteGuest: async (root, args) => {
       const del = await Guests.findByIdAndRemove(req.params.id);
       return del;
    },
  },
};
```

Look familiar? Here we are conflating terms defined in the GraphQL schema and mongoose methods inside a single object by organizing them in either the Query key or the Mutations key.

That’s all we have to do to make our GraphQL functional inside of a JavaScript application. When finished, we bring them together by passing them in as a single object into the **makeExectuableSchema** function and setting that function to a variable called **schema.**

```
const schema = makeExecutableSchema({ typeDefs, resolvers });
```

Now we connect the variable **schema** to the single express route by doing the following:

```
app.use('/guests', cors(), bodyParser.json(), graphqlExpress({ schema }));
```

And that’s it! That’s all it takes to refactor a RESTful API into a GraphQL API.

_This post was original published on [Medium.com](https://medium.com/@petertumulty/adding-graphql-to-your-skill-list-74239f607be2)_

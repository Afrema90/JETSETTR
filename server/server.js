const express = require('express');
const{ApolloServer, gql} = require('apollo-server-express');
const {typeDefs, resolvers} = require('./schema');

const app = express();

const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));






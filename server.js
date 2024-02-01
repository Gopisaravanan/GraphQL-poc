const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const PORT = 4001;
const app = express();

const schema = buildSchema(`
type Query {
    hello: String!
    welcomeMessage(name : String) : String
    userName : String
    age : Int
}
`);

const root = {
  hello: () => {
    return "hello world";
  },
  welcomeMessage: (params) => {
    console.log(params);
    return `Welcome ${params.name}`;
  },
  userName: () => "Gopi",
  age: () => 25,
};

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root,
  })
);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT} 🔯💫`);
});

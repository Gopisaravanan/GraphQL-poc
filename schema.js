import { buildSchema } from "graphql";

// types are :
// ID
// String
// Int
// float
// Boolean
// List-[]

const schema = buildSchema(`

type User {
    name : String,
    age: Int,
    city : String,
    indian : Boolean,
}

type Post {
    userId :Int,
    id: Int,
    title: String,
    body : String
}

type Query {
    hello: String!
    welcomeMessage(name : String) : String
    getUser : User
    getUsers:[User]
    getAPIData : [Post]
}
`);

export default schema;

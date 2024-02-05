import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema.js";
import root from "./root.js";

const PORT = 4001;
const app = express();

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

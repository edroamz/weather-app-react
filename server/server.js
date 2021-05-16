const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./Schemas");
const { port } = require("./config");

const app = express();

// Allow cross-origin
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

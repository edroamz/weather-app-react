const { GraphQLFloat, GraphQLObjectType } = require("graphql");

const TempType = new GraphQLObjectType({
  name: "Temp",
  fields: () => ({
    min: { type: GraphQLFloat },
    max: { type: GraphQLFloat },
  }),
});

module.exports = TempType;

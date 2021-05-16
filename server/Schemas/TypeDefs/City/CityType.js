const { GraphQLInt, GraphQLString, GraphQLObjectType } = require("graphql");
const CoordType = require("./CoordType");

const CityType = new GraphQLObjectType({
  name: "City",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    state: { type: GraphQLString },
    country: { type: GraphQLString },
    coord: { type: CoordType },
  }),
});

module.exports = CityType;

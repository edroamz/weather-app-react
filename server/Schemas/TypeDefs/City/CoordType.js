const { GraphQLFloat, GraphQLObjectType } = require("graphql");

const CoordType = new GraphQLObjectType({
  name: "Coord",
  fields: () => ({
    lon: { type: GraphQLFloat },
    lat: { type: GraphQLFloat },
  }),
});

module.exports = CoordType;

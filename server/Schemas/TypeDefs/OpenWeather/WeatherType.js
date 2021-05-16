const { GraphQLInt, GraphQLString, GraphQLObjectType } = require("graphql");

const WeatherType = new GraphQLObjectType({
  name: "Weather",
  fields: () => ({
    id: { type: GraphQLInt },
    main: { type: GraphQLString },
    description: { type: GraphQLString },
    icon: { type: GraphQLString },
  }),
});

module.exports = WeatherType;

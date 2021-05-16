const {
  GraphQLInt,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLList,
} = require("graphql");
const WeatherType = require("./WeatherType");

const HourlyType = new GraphQLObjectType({
  name: "Hourly",
  fields: () => ({
    dt: { type: GraphQLInt },
    temp: { type: GraphQLFloat },
    weather: { type: new GraphQLList(WeatherType) },
  }),
});

module.exports = HourlyType;

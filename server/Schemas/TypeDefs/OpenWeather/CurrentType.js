const {
  GraphQLInt,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLList,
} = require("graphql");
const WeatherType = require("./WeatherType");

const CurrentType = new GraphQLObjectType({
  name: "Current",
  fields: () => ({
    dt: { type: GraphQLInt },
    temp: { type: GraphQLFloat },
    clouds: { type: GraphQLInt },
    uvi: { type: GraphQLFloat },
    feels_like: { type: GraphQLFloat },
    pressure: { type: GraphQLInt },
    humidity: { type: GraphQLInt },
    weather: { type: new GraphQLList(WeatherType) },
  }),
});

module.exports = CurrentType;

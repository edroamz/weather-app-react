const { GraphQLInt, GraphQLObjectType, GraphQLList } = require("graphql");
const WeatherType = require("./WeatherType");
const TempType = require("./TempType");

const DailyType = new GraphQLObjectType({
  name: "Daily",
  fields: () => ({
    dt: { type: GraphQLInt },
    temp: { type: TempType },
    weather: { type: new GraphQLList(WeatherType) },
  }),
});

module.exports = DailyType;

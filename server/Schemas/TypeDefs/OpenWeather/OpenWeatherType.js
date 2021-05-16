const { GraphQLFloat, GraphQLObjectType, GraphQLList } = require("graphql");
const CurrentType = require("./CurrentType");
const HourlyType = require("./HourlyType");
const DailyType = require("./DailyType");

const OpenWeatherType = new GraphQLObjectType({
  name: "OpenWeather",
  fields: () => ({
    lat: { type: GraphQLFloat },
    lon: { type: GraphQLFloat },
    current: { type: CurrentType },
    hourly: { type: new GraphQLList(HourlyType) },
    daily: { type: new GraphQLList(DailyType) },
  }),
});

module.exports = OpenWeatherType;

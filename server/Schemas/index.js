const fetch = require("node-fetch");
const {
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");
const { apiUri, apiKey } = require("../config");
const CityType = require("./TypeDefs/City/CityType");
const OpenWeatherType = require("./TypeDefs/OpenWeather/OpenWeatherType");

const cityData = require("../MOCK_DATA.json");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllCities: {
      type: new GraphQLList(CityType),
      resolve(parent, args) {
        return cityData;
      },
    },
    getCity: {
      type: CityType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return cityData.find((item) => item.id === args.id);
      },
    },
    searchCityByName: {
      type: new GraphQLList(CityType),
      args: {
        search: { type: GraphQLString },
      },
      resolve(parent, args) {
        return cityData
          .filter(({ name }) =>
            name.toLowerCase().includes(args.search.toLowerCase())
          )
          .slice(0, 5);
      },
    },
    OpenWeather: {
      type: OpenWeatherType,
      args: {
        lat: { type: GraphQLFloat },
        lon: { type: GraphQLFloat },
        units: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const { lat, lon, units } = args;

        return await fetch(
          `${apiUri}/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
            },
          }
        ).then((resp) => resp.json());
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });

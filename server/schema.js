const {
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

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

const CoordType = new GraphQLObjectType({
  name: "Coord",
  fields: () => ({
    lon: { type: GraphQLFloat },
    lat: { type: GraphQLFloat },
  }),
});

const cityData = require("./MOCK_DATA.json");

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
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });

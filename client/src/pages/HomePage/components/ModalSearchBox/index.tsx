import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import Modal from "@Components/Modal";
import Text from "@Components/Text";
import SearchIcon from "./assets/search-outline.svg";
import { useQuery, gql } from "@apollo/client";

interface IModalSearchBoxProps {
  setCity: Dispatch<SetStateAction<ICity>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  displaySearchModal: boolean;
  setdisplaySearchModal: Dispatch<SetStateAction<boolean>>;
  closeSearchModal: CallableFunction;
}

interface ICity {
  id: number;
  lat: number;
  lon: number;
  name: string;
  country: string;
}

interface ISearchCityData {
  searchCityByName: ISearchCity[];
}

interface ISearchCityVars {
  search: string;
}

interface ISearchCity {
  country: string;
  id: number;
  name: string;
  coord: ICoord;
}

interface ICoord {
  lat: number;
  lon: number;
}

export default function modalSearchBox({
  setCity,
  search,
  setSearch,
  displaySearchModal,
  setdisplaySearchModal,
  closeSearchModal,
}: IModalSearchBoxProps) {
  const SEARCH_CITY = gql`
    query SearchCityByName($search: String!) {
      searchCityByName(search: $search) {
        id
        name
        country
        coord {
          lat
          lon
        }
      }
    }
  `;

  function SelectCity(
    id: number,
    name: string,
    country: string,
    lat: number,
    lon: number
  ) {
    setCity({
      id,
      name,
      country,
      lat,
      lon,
    });
    setdisplaySearchModal(false);
  }

  function RenderModalHeader() {
    return (
      <div className="modal-header-search-box">
        <SearchIcon className="modal-header-search-box__icon"></SearchIcon>
        <input
          type="text"
          className="modal-header-search-box__input"
          placeholder="Search city..."
          autoFocus
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
    );
  }

  const RenderModalBody = (search: string) => {
    const { loading, error, data } = useQuery<ISearchCityData, ISearchCityVars>(
      SEARCH_CITY,
      {
        variables: { search },
      }
    );
    if (loading) return null;
    if (error) return `Error! ${error}`;
    if (data) {
      return (
        <ul className="modal-body-search-list">
          {(() => {
            if (!search)
              return (
                <Text className="modal-body-search-list__text">
                  No recent searches
                </Text>
              );
            if (!data?.searchCityByName?.length)
              return (
                <Text className="modal-body-search-list__text">
                  No results for{" "}
                  <Text className="modal-body-search-list__text--bold">
                    "{search}"
                  </Text>
                </Text>
              );
            return data?.searchCityByName?.map(
              ({ id, name, country, coord: { lat, lon } }: ISearchCity) => {
                return (
                  <li
                    key={id}
                    tabIndex={0}
                    className="modal-body-search-list__item"
                    onClick={() => SelectCity(id, name, country, lat, lon)}
                  >
                    {(() => {
                      name = name.toLowerCase();
                      search = search.toLowerCase();

                      const city = name.split(
                        name.substring(
                          name.substring(parseInt(name)).indexOf(search),
                          name.indexOf(search) + search.length
                        )
                      );

                      return (
                        <Text style={{ textTransform: "capitalize" }}>
                          {city[0]}
                          <mark>{search}</mark>
                          {city[1]}, {country}
                        </Text>
                      );
                    })()}
                  </li>
                );
              }
            );
          })()}
        </ul>
      );
    }
  };

  return (
    <Modal
      show={displaySearchModal}
      handleClose={closeSearchModal}
      header={RenderModalHeader()}
    >
      {RenderModalBody(search)}
    </Modal>
  );
}

import React from "react";
import Modal from "@components/common/modal.jsx";
import SearchIcon from "@icons/search-outline.svg";
import { useQuery, gql } from "@apollo/client";
import Text from "@components/common/text.jsx";

export default function modalSearchBox({
  setCity,
  search,
  setSearch,
  displaySearchModal,
  setdisplaySearchModal,
  closeSearchModal,
}) {
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

  function SelectCity(id, name, country, lat, lon) {
    setCity({
      id,
      name,
      country,
      lat,
      lon,
    });
    setdisplaySearchModal(false);
  }

  function RenderHeader() {
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

  const RenderBody = (search) => {
    const { loading, error, data } = useQuery(SEARCH_CITY, {
      variables: { search },
    });
    if (loading) return null;
    if (error) return `Error! ${error}`;
    if (data) {
      return (
        <ul className="modal-body-search-list">
          {RenderSearchItems(search, data)}
        </ul>
      );
    }
  };

  function RenderSearchItems(search, data) {
    if (!search)
      return (
        <Text className="modal-body-search-list__text">No recent searches</Text>
      );
    if (!data?.searchCityByName?.length)
      return (
        <Text className="modal-body-search-list__text">
          No results for{" "}
          <Text className="modal-body-search-list__text--bold">"{search}"</Text>
        </Text>
      );
    return data?.searchCityByName?.map(
      ({ id, name, country, coord: { lat, lon } }) => {
        return (
          <li
            key={id}
            tabIndex="0"
            className="modal-body-search-list__item"
            onClick={() => SelectCity(id, name, country, lat, lon)}
          >
            {(() => {
              name = name.toLowerCase();
              search = search.toLowerCase();

              const city = name.split(
                name.substring(
                  name.substring(name).indexOf(search),
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
  }

  return (
    <Modal
      show={displaySearchModal}
      handleClose={closeSearchModal}
      header={RenderHeader()}
    >
      {RenderBody(search)}
    </Modal>
  );
}

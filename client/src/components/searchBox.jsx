import React, { useState } from "react";
import SearchIcon from "@icons/search-outline.svg";
import Modal from "@components/common/modal.jsx";
import Text from "@components/common/text.jsx";
import { useQuery, gql } from "@apollo/client";

export default function searchBox({ setCity }) {
  const [search, setSearch] = useState("");
  const [displayModal, setDisplayModal] = useState(false);

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

  const showModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setSearch("");
    setDisplayModal(false);
  };

  function selectCity(id, name, country, lat, lon) {
    setCity({
      id,
      name,
      country,
      lat,
      lon,
    });
    setDisplayModal(false);
  }

  function renderItem(name, search, country) {
    name = name.toLowerCase();
    search = search.toLowerCase();

    const CityName = name.split(
      name.substring(
        name.substring(name).indexOf(search),
        name.indexOf(search) + search.length
      )
    );

    return (
      <span style={{ textTransform: "capitalize" }}>
        {CityName[0]}
        <mark>{search}</mark>
        {CityName[1]}, {country}
      </span>
    );
  }

  function renderBody(search, data) {
    if (!search)
      return <span style={{ fontSize: "1.25rem" }}>No recent searches</span>;
    if (!data?.searchCityByName?.length)
      return (
        <span style={{ fontSize: "1.25rem" }}>
          No results for <span style={{ fontWeight: 700 }}>"{search}"</span>
        </span>
      );
    return data?.searchCityByName?.map(
      ({ id, name, country, coord: { lat, lon } }) => {
        return (
          <li
            key={id}
            tabIndex="0"
            onClick={() => selectCity(id, name, country, lat, lon)}
          >
            {renderItem(name, search, country)}
          </li>
        );
      }
    );
  }

  const ShowCities = (search) => {
    const { loading, error, data } = useQuery(SEARCH_CITY, {
      variables: { search },
    });
    if (loading) return null;
    if (error) return `Error! ${error}`;
    if (data) {
      return <ul className="list">{renderBody(search, data)}</ul>;
    }
  };

  return (
    <div className="searchbox">
      <button className="searchbox__btn" onClick={showModal}>
        <SearchIcon className="searchbox__btn__icon"></SearchIcon>
        <Text className="searchbox__btn__text">Search city...</Text>
      </button>
      <Modal
        show={displayModal}
        handleClose={closeModal}
        search={search}
        setSearch={setSearch}
      >
        {ShowCities(search)}
      </Modal>
    </div>
  );
}

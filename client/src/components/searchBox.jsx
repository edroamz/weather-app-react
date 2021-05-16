import React, { useState } from "react";
import SearchIcon from "@icons/search-outline.svg";
import Modal from "@components/common/modal.jsx";
import { useQuery, gql } from "@apollo/client";

export default function searchBox({ setCity }) {
  const [cities] = useState({});
  const [search, setSearch] = useState("");
  const [displayModal, setDisplayModal] = useState(false);

  const SEARCH_CITY = gql`
    query SearchCityByName($search: String!) {
      searchCityByName(search: $search) {
        id
        name
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

  function selectCity(id, name, lat, lon) {
    setCity({
      id,
      name,
      lat,
      lon,
    });
    setDisplayModal(false);
  }

  const ShowCities = (search) => {
    const { loading, error, data } = useQuery(SEARCH_CITY, {
      variables: { search },
    });
    if (loading) return null;
    if (error) return `Error! ${error}`;
    if (data) {
      if (!search)
        return <span style={{ fontSize: "1.15rem" }}>No recent searches</span>;

      return (
        <ul className="list">
          {data.searchCityByName.map(({ id, name, coord }) => {
            return (
              <li
                key={id}
                tabIndex="0"
                onClick={() => selectCity(id, name, coord?.lat, coord?.lon)}
              >
                {name}
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <div className="searchbox">
      <button className="searchbox__btn" onClick={showModal}>
        <SearchIcon className="searchbox__btn__icon"></SearchIcon>
        <span className="searchbox__btn__span">Search city...</span>
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

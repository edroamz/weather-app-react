import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@icons/search-outline.svg";
// import cityList from "./../data/cityList.json";
import Modal from "@components/common/modal.jsx";
import { useQuery, gql } from "@apollo/client";

export default function searchBox({ setCity }) {
  const [cities] = useState({});
  // const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");
  // const wrapperRef = useRef(null);
  const [displayModal, setDisplayModal] = useState(false);

  // const CITIES = gql`
  //   query GetAllCities {
  //     getAllCities {
  //       id
  //       name
  //       state
  //       country
  //       coord {
  //         lon
  //         lat
  //       }
  //     }
  //   }
  // `;

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   document.addEventListener("keydown", handleEscKeyCap);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     document.removeEventListener("keydown", handleEscKeyCap);
  //   };
  // }, []);

  const showModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setSearch("");
    setDisplayModal(false);
  };

  // const handleClickOutside = (event) => {
  //   const { current: wrap } = wrapperRef;
  //   if (!wrap?.contains(event.target)) {
  //     setDisplay(false);
  //   }
  // };

  // const handleEscKeyCap = (event) => {
  //   if (event.keyCode === 27) {
  //     setDisplay(false);
  //   }
  // };

  function selectCity(id, name, lat, lon) {
    setCity({
      id,
      name,
      lat,
      lon,
    });
    setDisplayModal(false);
  }

  // const { loading, error, data } = useQuery(CITIES);
  // if (data) console.log(data);

  return (
    <div /*ref={wrapperRef}*/ className="searchbox">
      <button className="searchbox__btn" onClick={showModal}>
        <SearchIcon className="searchbox__btn__icon"></SearchIcon>
        <span className="searchbox__btn__span">Search city...</span>
      </button>
      {/* <input
        className="searchbox__input"
        type="text"
        placeholder="Search city..."
        onClick={showModal}
        // onClick={() => {
        //   if (!display) setDisplay(true);
        // }}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      /> */}
      {/* <button className="searchbox__btn" onClick={selectCity}>
        <Icon className="searchbox__btn__icon"></Icon>
      </button> */}
      {/* {display && (
        <ul className="list">
          {cities
            ?.filter(({ name }) =>
              name.toLowerCase().includes(search.toLowerCase())
            )
            .slice(0, 5)
            .map(({ id, name, coord }) => {
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
      )} */}

      <Modal
        show={displayModal}
        handleClose={closeModal}
        search={search}
        setSearch={setSearch}
      >
        {!search ? (
          <span style={{ fontSize: "1.15rem" }}>No recent searches</span>
        ) : (
          <ul className="list">
            {cities
              ?.filter(({ name }) =>
                name.toLowerCase().includes(search.toLowerCase())
              )
              .slice(0, 5)
              .map(({ id, name, coord }) => {
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
        )}
      </Modal>
    </div>
  );
}

import React, { useState } from "react";
import Container from "@components/common/container.jsx";
import SearchIcon from "@icons/search-outline.svg";
import Text from "@components/common/text.jsx";
import ModalSearchBox from "@components/modalSearchBox.jsx";

export default function searchCity({ setCity }) {
  const [search, setSearch] = useState("");
  const [displaySearchModal, setdisplaySearchModal] = useState(false);

  const showSearchModal = () => {
    setdisplaySearchModal(true);
  };

  const closeSearchModal = () => {
    setSearch("");
    setdisplaySearchModal(false);
  };

  return (
    <section id="search-city">
      <div style={{ padding: "0 1rem" }}>
        <Container>
          <div className="search-city__wrapper">
            <button
              className="search-city__wrapper__btn-search"
              onClick={showSearchModal}
            >
              <SearchIcon className="search-city__wrapper__btn-search__icon"></SearchIcon>
              <Text className="search-city__wrapper__btn-search__text">
                Search city...
              </Text>
            </button>
            <ModalSearchBox
              setCity={setCity}
              search={search}
              setSearch={setSearch}
              displaySearchModal={displaySearchModal}
              setdisplaySearchModal={setdisplaySearchModal}
              closeSearchModal={closeSearchModal}
            ></ModalSearchBox>
          </div>
        </Container>
      </div>
    </section>
  );
}

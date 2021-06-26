import * as React from "react";
import { useState } from "react";
import { ModalSearchBox } from "@Pages/HomePage";
import ContainerBox from "@Components/ContainerBox";
import Text from "@Components/Text";
import SearchIcon from "./assets/search-outline.svg";

interface ISearchCityProps {
  setCity: React.Dispatch<React.SetStateAction<ICity>>;
}

interface ICity {
  id: number;
  lat: number;
  lon: number;
  name: string;
  country: string;
}

export default function searchCity({ setCity }: ISearchCityProps) {
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
        <ContainerBox>
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
        </ContainerBox>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Search from "./Search";

const Banner = () => {
  const styles = {
    backgroundColor: "white !important",
    fontWeight: "900 !important",
    textTransform: "inherit !important",
    alignItem: "center",
    marginRight: "400px",
    color: "#ff7779 !important",
  };

  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Baner>
      <BannerSearch>
        {showSearch && <Search />}

        <Button
          variant="contained"
          styles={styles}
          onClick={() => {
            showSearch ? setShowSearch(!showSearch) : setShowSearch(true);
          }}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </BannerSearch>

      <BannerInfo>
        <h1>Get out and stretch your imagination</h1>
        <h3>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h3>
        <button
        // variant="outlined"
         onClick={() => {
          history.push("/search");
        }}
        >
          Explore Nearby
        </button>
      </BannerInfo>
    </Baner>
  );
};

export default Banner;

// const H= styled.h5`
//     color: blue;
//     margin-top: 10px;
//     background-color: transparent;

// `
const Baner = styled.div`
  background: url("https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg")
    center center;
  height: 50vh;
  position: relative;
`;

const BannerSearch = styled.div`
  display: flex;
  flex-direction: column;
`;

const BannerInfo = styled.div`
  background-color: transparent;
  color: white;
  text-transform: inherit;
  margin-top: 20px;
  font-size: 30px;
  font-weight: 600;
  & > h1 {
    background-color: transparent;
    color: black;
    text-transform: inherit;
    font-size: 30px;
    text-align: center;
    hidden: true;
    display: none;
  }
  & > h3 {
    margin-top: 10px;
    color: alicewhite;
    text-transform: inherit;
    text-align: center;
    box-shadow: 10px 6px 18px -9px rgba(100, 200, 200, 0.85);
  }

  & > button {
    background-color: lightgrey;
    padding: 10px;
    align-items: center;
    margin-top: 10px;
    border: 1px solid white;
    font-size: 20px;
    border-radius: 10px;
    margin-left: 40vw;
  }
  & > button:hover {
    background-color: transparent;
    color: black;
    padding: 20px;
    font-size: 25px;
    font-weight: 600;
    border-radius: 10px;
    z-index: 10;
    ttransform: scale(1.05);
    transition: transform 100ms ease-in;
  }
`;

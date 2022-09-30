import React, { useState } from "react";
import styled from "styled-components";
import { DateRangePicker } from "react-date-range";
import Button from "@mui/material/Button";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";

// import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { useHistory } from "react-router-dom";

const Search = () => {


    // custom useHooks for history of user
  const history = useHistory();
//   UseState Hooks for startDate and End date 
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

//   Object for stratdate and Enddate
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  //On Change Function logic
  const handleSelect = () => {
    setStartDate(selectionRange.startDate);
    setEndDate(selectionRange.endDate);
  };

  return (
    <SearchContainer>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>Number of Guest 🧑🏻‍🤝‍👩🏽</h2>
      <input type="number" min={0} defaultValue={2} />
      <Button
        onClick={() => {
          history.push("/search");
        }}
      >
        Search AirBnb
      </Button>
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  position: absolute;
  top: 35px;
  left: 25%;
  width: 100vw;

  & > h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 559px;
    padding: 10px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 380px;
  }

  & > input {
    width: 539px;
    padding: 20px;
    position: absolute;
    left: 0;
    height: 30px;
    top: 420px;
    border: none;
  }
  & > input:focus {
    outline-width: 0;
  }
  & > button {
    position: absolute;
    left: 0;
    top: 480px;
    text-transform: inherit !important;
    background-color: #ff7779;
    color: white;
    width: 579px;
  }
  & > button:hover {
    background-color: white;
    color: #ff7779;
  }
`;

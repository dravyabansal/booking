import React from "react";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import StarIcon from '@mui/icons-material/Star';
import styled from "styled-components";

const Searchresult = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <>
      <SearchResult>
        <img src={img} alt="" />

        <SearchResultinfo>
          <SearchresultInfoTop>
            <p>{location}</p>
            <h3>{title}</h3>
            <p>______</p>
            <p>{description}</p>
          </SearchresultInfoTop>

          <SearchResultinfoBottom>
            <SearchResultStar>
              <p>
                <strong>✨{star}</strong>
              </p>
            </SearchResultStar>
            <SearchresultPrice>
              <h2>{price}</h2>
              <p>{total}</p>
            </SearchresultPrice>
          </SearchResultinfoBottom>
        </SearchResultinfo>
      </SearchResult>
    </>
  );
};

export default Searchresult;
const SearchresultPrice = styled.div`
  position: absolute;
  right: 30px;
  bottom: 20px;
  & > p {
    text-align: center;
  }
`;
const SearchResult = styled.div`
  display: flex;
  position: relative;
  margin: 20px;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  & > img {
    height: 200px;
    width: 350px;
    border-radius: 10px;
    overflow: hidden;
  }
`;

const SearchResultinfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
`;

const SearchresultInfoTop = styled.div`
  width: 40vw;

  & > h3 {
    font-weight: 300;
    margin-top: 10px;
  }

  & > p {
    margin-top: 10px;
    font-size: 14px;
    color: gray;
  }
`;

const SearchResultinfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SearchResultStar = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

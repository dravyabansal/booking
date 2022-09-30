import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import SearchIcon from '@mui/icons-material/Search';
import Avatar from "@mui/material/Avatar";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Header = () => {
  return (
    <Head>
      <Link to="/">
        <Img
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt="doremoll"
        />
      </Link>

      <Center>
        <Input type="text" />
        {/* <SearchIcon /> */}
      </Center>
      <RightHeader>
        <p>Become a host</p>
        {/* <LanguageIcon /> */}
        {/* <ExpandMoreIcon /> */}
        <Avatar />
      </RightHeader>
    </Head>
  );
};

export default Header;

const Head = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 10vh;
`;
const RightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15vw;
  margin-right: 80px;
`;

const Img = styled.img`
  object-fit: contain;
  height: 100px;
  margin-left: 20px;
`;
const Input = styled.input`
  border: none;
  width: 40vw;
//   padding: 10px;
  font-size: 14px;
  font-family: "Work Sans", sans-serif;

    &:focus {
    outline: black;
    border: none;
    box-shadow: 2px 2px 2px 2px lightgray;
    border-radius: 999px
    }
  outline-width: 0;
`;
const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  max-width: fit-content;
  padding: 10px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 999px;
`;

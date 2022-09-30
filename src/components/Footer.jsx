import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  const styles= {
    color: "black",
    textDecoration: "none",
    fontSize: "14px",
    opacity: "0.7",
  }
  return (
    <FooterContainer>
      <p>&copy; AieBnb Clone. The SHs TechnoVisions😊.</p>
      <Link styles={styles} href="https://www.linkedin.com/in/dravya-bansal-664213224">
        Dravya Bansal
      </Link>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  border-top: 1px solid lightgray;
  padding: 20px;
  background-color: #f7f7f7;
  text-align: center;

  & > p {
    padding: 5px;
    font-size: 14px;
  }
`;

import React from "react";
import styled from "styled-components";

const Card = ({ src, title, description, price }) => {
  return (
    <CardComp>
      <Img src={src} alt="airbnb" />
      <CardInfo>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </CardInfo>
    </CardComp>
  );
};

export default Card;

const Img = styled.img`
  object-fit: fill;
  min-width: auto;
  min-height: auto;
  width: 100%;
`;

const CardComp = styled.div`
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
  transition: transform 100ms ease-in;
  cursor: pointer;
  &:hover {
    taransform-x: scale(1.05);
  }
`;

const CardInfo = styled.div`
  margin-top: -9px;
  border-radius: 10px;
  padding: 20px;
  padding-top: 20px;
  border: 1;

  &>h2 {
    font-size: 18px;
    font-weight: 600;
  }
 &> h4 > {
    font-size: 14px;
    font-weight: 900;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

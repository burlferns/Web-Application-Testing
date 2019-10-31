import React from 'react';
import styled from "styled-components";

const StylDiv = styled.div`
  max-width: 800px;
  margin:10px auto;
  border:1px solid orange;
`;

const StylH1 = styled.h1`
width:fit-content;
  margin:10px auto;
  font-size:40px;
  text-align: center;
  text-decoration: underline;
`;

const StylH2 = styled.h2`
width:fit-content;
  margin:10px auto;
  font-size:30px;
  text-align: center;
`;

export default function Display({balls,strikes}) {
  return ( 
    <StylDiv>
      <StylH1>Display</StylH1>
      <StylH2>{`Balls=${balls}`}</StylH2>
      <StylH2>{`Strikes=${strikes}`}</StylH2>
    </StylDiv> 
  );
}
import React from 'react';
import styled from "styled-components";

import Button from "./Button";

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

const StylDiv2 = styled.div`
    display: flex;
    justify-content: space-around;
`;

export default function Dashboard({strike,ball,foul,hit}) {
  return ( 
    <StylDiv>
      <StylH1>Dashboard</StylH1>
      <StylDiv2>
        <Button textDisplay="Strike" runFunc={strike} />
        <Button textDisplay="Ball" runFunc={ball} />
        <Button textDisplay="Foul" runFunc={foul} />
        <Button textDisplay="Hit" runFunc={hit} />
      </StylDiv2>
    </StylDiv> 
  );
}
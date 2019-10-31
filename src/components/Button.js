import React from 'react';
import styled from "styled-components";

const boxLength="60px";
const boxHeight="30px;"

const StyledButton = styled.button`
  border:1px solid blue;
  background-color:blue;
  color:white;
  border-radius:5px;
  width:${boxLength};
  height:${boxHeight};
  font-size:16px;
`;

export default function Button({textDisplay,runFunc}) {
  return (
    <>
      <StyledButton type="button" onClick={runFunc}>
        {textDisplay}
      </StyledButton>
    </>
  );
} 
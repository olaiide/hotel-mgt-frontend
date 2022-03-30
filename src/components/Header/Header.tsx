import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  div {
    color: white;
    font-size: 1.7rem;
    font-family: Montserrat;
    text-align: center;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <div>
        <h1>MAKE YOURSELF</h1>
        <h1>AT HOME.</h1>
        {/* <h3>Search through array of rooms we've prepared for you.</h3> */}
        <h6>SIMPLE - UNIQUE - FRIENDLY</h6>
      </div>
    </Wrapper>
  );
};

export default Header;

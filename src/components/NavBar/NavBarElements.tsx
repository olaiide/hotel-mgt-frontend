import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  height: 80px;
  width: 100%;
  background: black;
  background-color: #2695c9;
`;

export const HeaderWrapper = styled.div`
  width: 80%;
  height: inherit;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
 
`;

export const Logo = styled.div`
color : white;
font-weight : 750;
font-size : 1.5rem;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const ButtonContainer = styled.div`
  width: 300px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    height: 100px;
  }
`;

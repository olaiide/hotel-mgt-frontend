import styled from "styled-components";
import Landing from "../../assets/images/Landing2.jpg";
export const Container = styled.div`
  background-image: url(${Landing});
  height: 350px;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow : hidden;
`;
export const Header = styled.div`
  color: white;
  font-weight: 600;
  font-size: 2rem;
  display : flex;
  justify-content : center;
  align-items : center;
  height : 100%;
  div{
      text-align : center;
  }
`;

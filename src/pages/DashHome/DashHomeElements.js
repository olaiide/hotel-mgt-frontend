import styled from "styled-components";
import Landing from "../../assets/Landing2.jpg";

export const Container = styled.div`
  min-height: 100vh;
  padding-bottom: 2rem;
`;
export const Wrapper = styled.div`
  background-image: url(${Landing});
  height: 400px;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`;
export const Header = styled.div`
  color: white;
  font-weight: 600;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  div {
    text-align: center;
  }
`;
export const RoomGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 0.1fr);
  grid-template-columns:repeat( auto-fit, minmax(330px, 0.1fr) );
  grid-gap: 30px;
  margin: 0 auto;
  margin-top: 1rem;
  @media screen and (min-width: 1200px){
    grid-template-columns: repeat(3, 0.1fr);
  }
`;
export const RoomWrapper = styled.div`
  width: 330px;
  height: px;
  border-radius: 0 0 4px 4px;
  border :;
  
/* border-bottom : 1px solid black; */
/* border-left : 1px solid black; 
border-right : 1px solid black;  */
`;
export const Image = styled.div`
  border-radius : 5px;
  height : px;
  display:;
`;
export const ContentWrapper = styled.div`
   /* border-bottom : 1px solid black;
border-left : 1px solid black;
border-right : 1px solid black;
border : 5px solid black; */
  height: 50px;
  padding: 0;
  margin: 0;
  box-shadow: 0 10px 10px -10px;
  box-shadow :  5px 5px 10px;
  border-top : none;
`;

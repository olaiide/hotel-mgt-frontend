import styled from "styled-components";
import Landing from "../../assets/Landing2.jpg";

export const Container = styled.div`
  min-height: 100vh;
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
  grid-gap: 30px;
  width: 80%;
  margin: 0 auto;
  margin-top: 1rem;
  background-color: ;
`;
export const RoomWrapper = styled.div`
  width: 330px;
  height: px;
/* border-bottom : 1px solid black; */
/* border-left : 1px solid black; 
border-right : 1px solid black;  */
`;
export const Image = styled.div`
  border: none !important;
  height : 200px;
`;
export const ContentWrapper = styled.div`
   border-bottom : 1px solid black;
border-left : 1px solid black;
border-right : 1px solid black; 
  height: 50px;
  padding: 0;
  margin: 0;
`;

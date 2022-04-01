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

export const RoomGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 0.1fr);
  grid-template-columns: repeat(auto-fit, minmax(330px, 0.1fr));
  grid-gap: 30px;
  margin-top : 2rem;
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 0.1fr);
  }
`;
export const RoomWrapper = styled.div`
  width: 300px;
  box-shadow: 0 1px 4px 0 rgba(177, 179, 179, 0.3) !important;
`;
export const Image = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const Img = styled.img`
  margin-bottom: -4px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  width: 100%;
`;
export const ContentWrapper = styled.div`
  border: 1px solid #bdbdbd;
  border-radius: 0 0 4px 4px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: none;
  padding: 10px;
`;

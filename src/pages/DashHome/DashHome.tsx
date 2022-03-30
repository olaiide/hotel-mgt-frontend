import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import {
  Container,
  Header,
  Wrapper,
  RoomGrid,
  RoomWrapper,
  ContentWrapper,
  Img,
  Image,
} from "./DashHomeElements";
import Room from "../../assets/room1.jpg";
// import Button from "../../components/Button/ButtonElements";
// interface Props {
//   type : string;
//   price : string;
//   available : boolean;
// }
const DashHome = () => {
  const Data = [
    {
      type: "Superior room",
      price: "#40",
      available: "True",
      image: Room,
    },
    {
      type: "Superior room",
      price: "#40",
      available: "True",
      image: Room,
    },
    {
      type: "Superior room",
      price: "#40",
      available: "True",
      image: Room,
    },
    {
      type: "Superior room",
      price: "#40",
      available: "True",
      image: Room,
    },
    {
      type: "Superior room",
      price: "#40",
      available: "True",
      image: Room,
    },
    {
      type: "Superior room",
      price: "#40",
      available: "True",
      image: Room,
    },
    {
      type: "Superior room",
      price: "#40",
      available: "True",
      image: Room,
    },
    {
      type: "Superior room",
      price: "#40",
      available: "True",
      image: Room,
    },
    {
      type: "Superior room",
      price: "#40",
      available: "True",
      image: Room,
    },
  ];
  return (
    <Container>
      <Wrapper>
        <Navbar />
        <Header>
          <div>
            <h1>MAKE YOURSELF</h1>
            <h1>AT HOME.</h1>
            {/* <h3>Search through array of rooms we've prepared for you.</h3> */}
            <h6>SIMPLE - UNIQUE - FRIENDLY</h6>
          </div>
        </Header>
      </Wrapper>
      <RoomGrid>
        {Data.map((item) => (
          <>
            <RoomWrapper>
              <Image>
                <Img src={item.image} alt='room_image' />
              </Image>
              <ContentWrapper>
                <div>{item.type}</div>
                {/* <Button children={'View room'} /> */}
              </ContentWrapper>
            </RoomWrapper>
          </>
        ))}
      </RoomGrid>
    </Container>
  );
};

export default DashHome;

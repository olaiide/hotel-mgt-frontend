import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import {
  Container,
  Header,
  Wrapper,
  RoomGrid,
  RoomWrapper,
  ContentWrapper,
  Image,
} from "./DashHomeElements";
import Room from "../../assets/room1.jpg";
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
            <h2>Find and book rooms.</h2>
            <h3>Search through array of rooms we've prepared for you.</h3>
          </div>
        </Header>
      </Wrapper>
      <RoomGrid>
        {Data.map((item) => (
          <RoomWrapper>
            <Image>
              <img src={item.image} alt='room' width='100%' />
            </Image>
            <ContentWrapper>
              <div>{item.type}</div>
            </ContentWrapper>
          </RoomWrapper>
        ))}
      </RoomGrid>
    </Container>
  );
};

export default DashHome;

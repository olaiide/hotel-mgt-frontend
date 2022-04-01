import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import {
  Container,
  Wrapper,
  RoomGrid,
  RoomWrapper,
  ContentWrapper,
  Img,
  Image,
} from "./DashHomeElements";
import Room from "../../assets/room1.jpg";
import Overview from "../../components/Overview/Overview";
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
      <Navbar />
      <Wrapper>
        <Header />
      </Wrapper>
      <Overview />
      <h1 style={{ textAlign: "center" }}>Today's Top Rooms</h1>
      <RoomGrid>
        {Data.map((item) => (
          <>
            <RoomWrapper>
              <Image>
                <Img src={item.image} alt='room_image' />
              </Image>
              <ContentWrapper>
                <div>{item.type}</div>
                <Button
                  children={"View room"}
                  active={true}
                  margin={true}
                  bg={true}
                  size={"small"}
                  loading={false}
                  background={true}
                  disabled
                />
              </ContentWrapper>
            </RoomWrapper>
          </>
        ))}
      </RoomGrid>
    </Container>
  );
};

export default DashHome;

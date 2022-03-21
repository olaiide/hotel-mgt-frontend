import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import { Container, Header } from "./DashHomeElements";
// interface Props {
//   type : string;
//   price : string;
//   available : boolean;
// }
const DashHome = () => {
  const Data =  [
    {
      type : "Superior room",
      price : "#40",
      available : 'jdjjd',
    }
  ]
  return (
    <Container>
      <Navbar />
      <Header>
        <div>
          <h2>Find and book rooms.</h2>
          <h3>Search through array of rooms we've prepared for you.</h3>
        </div>
      </Header>
    </Container>
  );
};

export default DashHome;

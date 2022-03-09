import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/NavBar";
import { Container, Header } from "./DashHomeElements";

const DashHome = () => {
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

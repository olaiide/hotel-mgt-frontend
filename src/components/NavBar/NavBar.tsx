import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { ButtonContainer, Container, HeaderWrapper, Logo } from "./NavBarElements";
const Header = () => {

  
  return (
    <Container>
      <HeaderWrapper>
        <Logo>SK Hotel</Logo>
        <ButtonContainer>
        <Button
          children={"Login"}
          bg={false}
          size={"small"}
          active={true}
          loading={false}
          margin={false}
          disabled={false}
        />
          <Button
          children={"Sign up"}
          bg={true}
          size={"small"}
          active={true}
          loading={false}
          margin={false}
          disabled={false}
        />
        </ButtonContainer>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;

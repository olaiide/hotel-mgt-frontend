import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../Button/Button";
import {
  ButtonContainer,
  Container,
  HeaderWrapper,
  Logo,
  StyledLink
} from "./NavBarElements";
const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Logo>SK Hotel</Logo>
        <ButtonContainer>
          <StyledLink to={'/login'}>
            <Button
              children={"Login"}
              bg={false}
              size={"small"}
              active={true}
              loading={false}
              margin={false}
              disabled={false}
            />
          </StyledLink>
          <StyledLink to={'/register'}>
            <Button
              children={"Sign up"}
              bg={true}
              size={"small"}
              active={true}
              loading={false}
              margin={false}
              disabled={false}
            />
          </StyledLink>
        </ButtonContainer>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;

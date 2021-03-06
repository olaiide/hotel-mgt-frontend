import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Logo, FormContainer, Text } from "./LoginElements";
import Button from "../../../components/Button/Button";
const Login = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo>SK Hotel</Logo>
      <h2>SIGN IN TO CONTINUE</h2>
      <FormContainer>
        <div className='form__container'>
          <div>
            <label>Email</label>
            <input type='text' placeholder='Your mail' />
          </div>
          <div>
            <label>Password</label>
            <input type='text' placeholder='Your password' />
          </div>
          <div>
            <Button
              children={"Log in"}
              active={false}
              margin={true}
              loading={false}
              bg={true}
              size={"Block"}
              disabled={false}
            />
          </div>
        </div>
      </FormContainer>
      <Text>
        Don't have an account?{" "}
        <span onClick={() => navigate("/register")}>Sign up</span>
      </Text>
    </Container>
  );
};

export default Login;

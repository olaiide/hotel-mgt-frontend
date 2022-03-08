import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Logo, FormContainer, Text } from '../Login/LoginElements'
import Button from "../../../components/Button/Button";
const Register = () => {
    
  return (
    <Container>
      {/* <Logo>SK Hotel</Logo> */}
      <h2>SIGN UP TO CONTINUE</h2>
      <FormContainer>
        <div className='form__container'>
            <div>
                <label>Name</label>
                <input type="text" placeholder="Your name" />
            </div>
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
              active={true}
              margin={true}
              loading={false}
              bg={true}
              size={"Block"}
              disabled={false}
            />
          </div>
        </div>
      </FormContainer>
      <Text>Already have an account? <span>Sign in</span></Text>
    </Container>
  );
};

export default Register;

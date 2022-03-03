import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
import { ButtonTypes } from '../../types/button'

export const ButtonComponent = styled.button<ButtonTypes>`
  width: ${(props) => (props.size === "small" ? "115px;" : "100%")};
  height: ${(props) => (props.size === "small" ? "45px;" : "50px")};
  background: ${(props) =>
    props.bg ? (props.active ? "#FCC61A" : "#F7F7F7") : "transparent"};
  margin: ${(props) => (props.margin ? "20px 0" : "0px")};
  border-radius: 5px;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.loading ? "0.8" : '1')};
  color: ${(props) =>
    props.bg
      ? "#0e0d0a"
      : props.active
      ? "#FCC61A"
      : "#FCC61A"};
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  cursor : pointer;
  &:hover {
    /* color: ${(props) =>
      props.bg ? "#FCC61A" : ""}; */
    background: ${(props) =>
      props.bg
        ? props.active
          ? ""
          : "#FCC61A"
        : "transparent"};
    animation: 0.5s ${keyframes(pulse)};

  }

  .spinner {
    width: 21.67px;
    height: 21.67px;
    border: 3px solid white;
    border-radius: 50%;
    border-top-color: rgba(252, 198, 26, 0.001);
    animation: loader 1s linear infinite;
  }
  @keyframes loader {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;


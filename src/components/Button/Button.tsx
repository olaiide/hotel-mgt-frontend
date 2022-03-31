import React, { FC } from "react";
import { ButtonTypes } from "../../types/button";
import { ButtonComponent } from "./ButtonElements";

const Button: FC<ButtonTypes> = (props) => {
  return (
    <>
      <ButtonComponent
        active={props.active}
        size={props.size}
        bg={props.bg}
        margin={props.margin}
        loading={props.loading}
        disabled={props.disabled}
        background={props.background}
      >
        {props.loading ? <span className='spinner'></span> : props.children}
      </ButtonComponent>
    </>
  );
};

export default Button;

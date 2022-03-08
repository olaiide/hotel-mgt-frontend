import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
.form__container {
    label {
        display : block;
          //  font-family: Inter;
          text-align: start;
            font-size: 14px;
            font-style: normal;
            font-weight: 200;
            line-height: 26px;
            letter-spacing: 0em;
            padding-bottom : 5px;
            padding-top : 12px;
    }
    input {
            border: 1px solid #0C18254D;
            height : 35px;
            width : 96%;
            border-radius : 3px;
            outline : none;
            padding-left : 10px;
            &::placeholder {
            font-size: 12px;
            font-style: normal;
            font-weight: 200;
            line-height: 22px;
            letter-spacing: 0em;
        }
    }
}
`


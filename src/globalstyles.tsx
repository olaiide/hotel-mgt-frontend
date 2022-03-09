import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
.form__container {
    label {
            display : block;
            text-align: start;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
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
            padding-left :7px;
            &::placeholder {
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0em;
        }
    }
}
`


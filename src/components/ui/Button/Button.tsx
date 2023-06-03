import styled, { css } from 'styled-components';
import theme from "../../../utils/constants/theme";

interface colorType {
    primary: String,
    secondary: String,
    danger: String,
    warning: String,
    success: String,
    default: String,
}

const Button = styled.button` 
    border:none;
    border-radius:10px;
    color:#fff;
    cursor:pointer;
    
    background-color:${(props: any) => {
        if (props.variant) {
            return theme.colors[props.variant];
        } else {
            return theme.colors['default'];
        }
    }};

    ${(props: any) => {
        return props.full && css`
            width:100%;
            displary:block; 
        `;
    }};

    ${(props: any) => {
        if (props.buttonSize === "sm") {
            return css`
                font-size: ${theme.buttonSize.sm.fontSize};
                padding:  ${theme.buttonSize.sm.padding};
            `
        } else if (props.buttonSize === "md") {
            return css`
                font-size:  ${theme.buttonSize.md.fontSize}; 
                padding:  ${theme.buttonSize.md.padding};
            `
        } else if (props.buttonSize === "lg") {
            return css`
                font-size:  ${theme.buttonSize.lg.fontSize}; 
                padding:  ${theme.buttonSize.lg.padding};
            `
        }
    }};
`;

export default Button;
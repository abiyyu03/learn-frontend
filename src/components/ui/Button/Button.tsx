import styled, { css } from 'styled-components';
import theme from "../../../utils/constants/theme";
import type { ButtonPropsType } from '../../../type/Type';

const Button = styled.button` 
    border:none;
    border-radius:10px;
    color:#fff;
    cursor:pointer;
    
    background-color:${(props: ButtonPropsType) => {
        if (props.variant) {
            return theme.colors[props.variant];
        } else {
            return theme.colors['default'];
        }
    }};

    ${(props: ButtonPropsType) => {
        return props.full && css`
            width:100%;
            displary:block; 
        `;
    }};

    ${(props: ButtonPropsType) => {
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
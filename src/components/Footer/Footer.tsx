import styled, { css } from 'styled-components';

const StyledFooter = styled.div`
    background-color: #F72585;
    color: #fff;
    padding: 1rem;
    text-align: center;

    .footer_sitetitle {
        margin-bottom: 1rem;
    }

    .footer_author {
        margin-bottom: 1rem;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <footer>
                <h2 className="footer_sitetitle">Movie App</h2>
                <p className="footer_author">@abiyyu03</p>
            </footer>
        </StyledFooter>
    )
}

export default Footer
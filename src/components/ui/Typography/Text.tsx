import styled from 'styled-components'

const StyledText = styled.p`
    color:${(props: any) => {
        if (props.variant) {
            return props.variant;
        } else {
            return "#000";
        }
    }};
`;

const Text = (props: any) => {
    return (
        <StyledText></StyledText>
    )
};

export default Text;


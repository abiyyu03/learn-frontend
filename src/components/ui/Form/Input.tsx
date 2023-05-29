import styled from 'styled-components';

const StyledInput = styled.div`
.form_label {
    text-align: left;
}
 
.form_input {
    width: 100%;
    padding:0.4rem;
    border-radius: 5px;
    border: 1px solid black ;
    margin-top:10px;
    margin-bottom:10px;
}
@media (min-width: 768px) {
     .form {
        margin: 0 1rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }
    .form__left {
        flex-basis:50%;
    }
    .form__right { 
        flex-basis:45%;
    }
}
@media (min-width: 992px) {
    .container {
        max-width: 800px;
        margin: 3rem auto;
    }

    .form {
        margin: 0 1rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }

    .form__left {
        flex-basis: 50%;
    }
    .form__right {
        width: 45%;
    }
`;

const Input = (props: any) => {
    return (
        <StyledInput>
            <label className="form_label">{props.label}</label><br />
            <input type={props.type} className="form_input" value={props.value} name={props.name} onChange={props.handleChnge} />
        </StyledInput>
    )
}

export default Input;
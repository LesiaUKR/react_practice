import styled from "styled-components";

export const Form = styled.form`
  width: 360px;

  .inputLocationContainer{
    position: relative;
  }

  .locationInput{

width: 100%;
height: 56px;
padding: 18px 0px 18px 44px; 
border: none;
outline: none;
border-radius: 10px;
background-color: ${({ theme }) => theme.inputBackground};
text-align: left;

font-size: 16px;
font-weight: 400;
line-height: 1,25; 

  }

  .locationInput::placeholder {
  color: #101828;
        }

        .inputLocationContainer svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
`;


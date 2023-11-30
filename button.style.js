import styled from "styled-components";

export const Button = styled.button`
padding: 10px;
background-color:rgb(0, 106, 255);
font-size: 20px;
font-weight:bold;
color:${(props) => props.color };
border-radius: 25px;
margin-top:10px;
&:active {
    background-color:coral
}
`
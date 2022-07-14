import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 18px;
  background: beige;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: left;
  padding: 2px;
`;

export const CardTextWrapper = styled.div`
display: flex;
flex-direction: column;  
margin: 25px;
`;

export const CardTextBody = styled.p`
  color: aqua;
  font-size: 15px;
  font-weight: 300;
`;

export const Button = styled.button`
color: white;
background-color: green;
display: flex;
justify-self: center;
padding: 5px;
border-radius: 5px;
margin-left: 10px;
`
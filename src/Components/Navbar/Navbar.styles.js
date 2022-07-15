import styled from "styled-components";

export const StyleNavbar = styled.nav`
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-around;
   padding-bottom: 15px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
    background-color: green;
    color: white;
    border-radius: 5px;
    border-color: rgb(0, 0, 0);
    border-style: double;
    height: 50px;
    width: 120px;
    font-size: 20px;
}
`;

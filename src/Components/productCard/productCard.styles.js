import styled from "styled-components";

export const BodyWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
animation: fadeIn 2s;


`

export const CardWrapper = styled.div`
  height: 15em;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 18px;
  background: beige;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: left;
  padding: 2px;
  margin: 10px;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      margin-top: 4rem;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    height: auto;
    max-width: 30em;
    text-align: center;
   

    button{
      margin: 7px 0px 20px;
    }
  }
`
export const ImgWrapper = styled.div`

  display: flex;
  align-items: center;
  

img{
  max-width: 200px;
  max-height: 200px;
  border-radius: 18px;
  padding: 10px;
}

@media (max-width: 700px) {
  display: flex;
  justify-content: center;
}


`
export const CardTextWrapper = styled.div`
display: flex;
flex-direction: column;  
margin: 25px 25px 7px 25px;
`;

export const CardTextBody = styled.p`
  color: aqua;
  font-size: 15px;
  font-weight: 300;
`;

export const Button = styled.button`


  color: white;
  border: none;
  background: #46863D;
  padding: 7px;
  border-radius: 5px;
  margin-left: 25px;
  cursor: pointer;
  height: 30px;
  width: 10em;

  :hover{
    background: #3A7033;
  }
  :active{
    background: #fff;
    color:#000;
}
  
`
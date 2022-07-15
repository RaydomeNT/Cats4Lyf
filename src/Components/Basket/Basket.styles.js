import styled from "styled-components";

export const Position = styled.div`
 
    position: absolute;

`


export const ModalBackground = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);

`

export const BasketWrapper = styled.div`

    heigh: auto;
    width: 25em;
    border: solid 3px #46863D;
    border-radius: 10px;
    background: #F5F5DB;
    padding: 30px;
    position: relative;
    z-index: 1;
    
    


    h2{
        font: small-caps bold 30px Georgia, serif;
        color: #46863D;
        margin: 0 0 15px 0;
        text-align: center;
    }

    button{
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background: #46863D;
    }

    button:hover{
        background: #3A7033;
    }
    button:active{
        background: #000;
        color:#fff;
    }


`

export const ModalOff = styled.div`

    height: auto;
    width: auto;
    position: absolute;
    left: 24em;
    top: 1em;

    button{
        height: 30px;
        width: 60px;
    }

`

export const YourSelection = styled.div`

    height: auto;
    width: auto;
    padding: 20px;
    margin; 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    

`
export const SectionWrapper = styled.div`

    height: auto;
    width: 350px;
    background: #8DCB85;
    border: solid 1px #6CBB63;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 10px 10px 10px rgba(113, 113, 113, 0.4);
    position: relative;
`
export const CatName = styled.div`

    padding: 10px 20px;
    position: absolute;
    top:25%;

`

export const QuantityWrapper = styled.div`

    text-align: right;
    padding-right: 5px;


    button{
        margin: 10px;
        height: 30px;
        width: 40px;
    }
    button:active{
        background: #fff;
        color: #000;
    }

    p{
        margin: 0 10px 10px 10px;
        padding-right: 6px;
    }

`
export const BottomWrapper = styled.div`

text-align: center;
font: small-caps bold 15px Georgia, serif;

button{

    margin: 30px auto 0 auto;
    height: 30px;
    width: 25em;
    display: inline-block;

}

`

import navbarImage from "./img/newbanner.png";
import Basket from '../Basket/Basket'
import {
  StyleNavbar,
  Wrapper,
  ButtonWrapper
} from './Navbar.styles';
import { Button } from "../productCard/productCard.styles";

const Navbar = ({ basketItems, addCat, subCat }) => {
    return (
    
    <StyleNavbar>
      <div className="Basket">
      <img src={navbarImage} alt="Cat Logo" width ="100%"/>
        <Wrapper>
          <ButtonWrapper>
          <button className ="home">&#127969;Home</button>
          <button>&#128222;Contact</button>
          <a href="https://www.rspca.org.uk/"><button>&#128047;RSPCA</button></a>
          </ButtonWrapper>
            <Basket 
              basketItems={basketItems}
              addCat={addCat}
              subCat={subCat}/>
        </Wrapper>
      </div>
    </StyleNavbar >

    
  );};

export default Navbar;
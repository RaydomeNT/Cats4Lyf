import navbarImage from "./img/newbanner.png";
import Basket from '../Basket/Basket'
import {StyleNavbar,Wrapper, NavWrapper} from './Navbar.styles';

const Navbar = ({ basketItems, addCat, subCat }) => {
    return (
    
    <StyleNavbar>

      <img src={navbarImage} alt="Cat Logo" width ="100%"/>

      <NavWrapper>

        <Wrapper>
          <button className ="home">&#127969;Home</button>
          <button>&#128222;Contact</button>
          <a href="https://www.rspca.org.uk/"><button>&#128047;RSPCA</button></a>
        </Wrapper>
        
          <Basket 
              basketItems={basketItems}
              addCat={addCat}
              subCat={subCat}/>
      </NavWrapper>
      
    </StyleNavbar >

    
  );};

export default Navbar;
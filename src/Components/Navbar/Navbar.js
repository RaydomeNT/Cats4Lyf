import navbarImage from "./img/newbanner.png";
import Basket from '../Basket/Basket'
import {StyleNavbar,Wrapper, NavWrapper} from './Navbar.styles';

const Navbar = ({ basketItems, addCat, subCat }) => {
    return (
    
    <StyleNavbar>

      <img src={navbarImage} alt="Cat Logo" width ="100%"/>

      <NavWrapper>

        <Wrapper>
          <a href="https://www.imdb.com/title/tt2224026/?ref_=fn_al_tt_1>" target="_blank" rel="noopener noreferrer"><button className ="home">&#127969;Home</button></a>
          <a href='https://www.imdb.com/title/tt0118884/' target="_blank" rel="noopener noreferrer"><button>&#128222;Contact</button></a>
          <a href="https://www.rspca.org.uk/" target="_blank" rel="noopener noreferrer"><button>&#128047;RSPCA</button></a>
        </Wrapper>
        
          <Basket 
              basketItems={basketItems}
              addCat={addCat}
              subCat={subCat}/>
      </NavWrapper>
      
    </StyleNavbar >

    
  );};

export default Navbar;
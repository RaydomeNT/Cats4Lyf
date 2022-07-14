import navbarImage from "../Navbar/img/c4l.png";
import Basket from "../Basket/Basket"

const Navbar = ({ basketItems, addCat, subCat  }) => {
  
  return (
    <div className="Basket">

      <img src={navbarImage} alt="Cat Logo" />
      <div className="Home">
        <button>Home</button>
      </div>
      <div className="Contact">
        <button>Contact</button>
      </div>

      
      <Basket 
      basketItems={basketItems}
      addCat={addCat}
      subCat={subCat}/>
        
    </div>
  );
};

export default Navbar;
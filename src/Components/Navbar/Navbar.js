import navbarImage from "../Navbar/img/c4l.png";

const Navbar = ({ toggleBasket }) => {
    // const FaShoppingCart = () => {
  return (
    <div className="Basket">
      <img src={navbarImage} alt="Cat Logo" />
      <div className="Home">
        <button>Home</button>
      </div>
      <div className="Contact">
        <button>Contact</button>
      </div>
      <div className="BasketBtn">
        <button onClick={toggleBasket}>Basket
          {/* <FaShoppingCart /> */}
        </button>
      </div>
    </div>
  );
};
// }

export default Navbar;
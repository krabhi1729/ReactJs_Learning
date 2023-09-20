import Logo from "../assets/img/image.png";

const Header= () => {
  return (
    <div className="header ">
      <Title/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
           <li>About</li>
            <li>Contact</li>
             <li>Cart</li>
        </ul>
      </div>
    </div>
   
  );
};


const Title = () => (
  <a href="/">
    <img  className="logo" alt="logo" src={Logo} />
  </a>
);
export default Header;
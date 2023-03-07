import "./styles/navbar.scss";
import profAvatar from "../img/5.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="imageAndName">
        <img className="avatar" src={profAvatar} alt="human" />
        <h5>Ibrohim Jo'rayev</h5>
      </div>

      <ul className="navLinks">
        <li>
          <a href="#">MAIN TABLE</a>
        </li>
        <li>
          <a href="#">ADD PRODUCTS</a>
        </li>
        <li>
          <a href="#">USERS</a>
        </li>
        <li>
          <a href="#">LOG OUT</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import "../../css/Navbar.css";
import { useContext } from "react";
import { Context } from "../../context/MainContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { getActiveItem, linkBtn } = useContext(Context);

  return (
    <div className="down-header ">
      <nav className="navbar navbar-expand-md ">
        <div className="container-lg  gap-4 ">
          <Link to="/home" className="link-decoration">
            <a className="navbar-brand" href="#">
              KO shop
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {linkBtn("/home", "Home")}
                {/* <a className="nav-link" aria-current="page" href="#">
                </a> */}
              </li>
              <li className="nav-item">
                {linkBtn("/shop", "Shop")}
                {/* <a className="nav-link" href="#">
                </a> */}
              </li>
              <li className="nav-item">
                {linkBtn("/about", "About")}
                {/* <a className="nav-link" href="#">
                </a> */}
              </li>
              <li className="nav-item">
                {linkBtn("/contact", "Contact")}
                {/* <a className="nav-link" href="#">
                </a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

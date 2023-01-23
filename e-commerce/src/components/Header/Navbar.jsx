import "../../css/Navbar.css";
import { useContext } from "react";
import { Context } from "../../context/MainContext";


const Navbar = () => {

  const {getActiveItem} = useContext(Context)
  
  const lis = document.querySelectorAll(".navbar ul li a");  

  getActiveItem(lis)

  return (
    <div className="down-header ">
      <nav className="navbar navbar-expand-md ">
        <div className="container-lg  gap-4 ">
          <a className="navbar-brand" href="#">
            Hekto
          </a>
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
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

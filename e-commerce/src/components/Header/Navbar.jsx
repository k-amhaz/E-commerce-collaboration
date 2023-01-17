import "../../css/Navbar.css";
import { Paper } from "@mui/material";
import { InputBase } from "@mui/material";
import { IconButton } from "@mui/material";


const Navbar = () => {
  return (
    <div className="down-header">
      <div className="container d-flex justify-content-between align-items-center ">
        <nav className="navbar navbar-expand-md ">
          <div className="container-lg  gap-4 p-0">
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
                    Products
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
        <div className="input-group mb-3 w-25">
          <input type="text" className="form-control"/>
          <i className="bi bi-search  "></i>
        </div>
      </div>
    </div>
  )
}

const lis = document.querySelectorAll(".navbar ul li a");
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
  })
})

export default Navbar;

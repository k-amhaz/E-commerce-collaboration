import "../../css/Navbar.css";

const Navbar = () => {
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 40fe456e66f668c8a6574e49434ac48f238ebbac
          </div>
        </div>
      </nav>
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

import React from "react";
const Navbar = () => {

    return(
    <nav className="navbar navbar-expand-lg bg-dark ">
    <div className="container-fluid ">
      <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item ">
            <a className="nav-link active text-light  " aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled text-light" >Contac</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>)

}
export default Navbar;
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Nav = () => {
  return (
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">APK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">COURSE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">TRAINER</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">REVIEW</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search" />
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Nav

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import App from "./App";
import Couse from "./Couse";
import TrainingCourse from "./TrainingCourse";
import Footer from "./Footer";

const Nav = () => {
  return (
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">APK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="/#app" onClick={App}>HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="/#Couse" onClick={Couse}>COURSE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#traine" onClick={TrainingCourse}>TRAINER</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#footer"onClick={Footer}>REVIEW</a>
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

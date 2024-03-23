import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
    const today=new Date();
  return (
    <div className="container-fluid bg-3 text-center foot">    
        <div className="row">
            <div className="col-sm-3">
            <h5>Location</h5>
            <p>Chennai</p>
            <p>Salem</p>
            <p>Cuddalore</p>
            </div>
            <div className="col-sm-3"> 
            <h5>Contact Deatils</h5>
            <p>apk@gamil.com</p>
            <p>+9123478951</p>
            <p>1/77agar st, Cuddalore</p>
            </div>
            <div className="col-sm-3"> 
            <h5>Course</h5>
            <p>Java Full Stack Developer</p>
            <p>Web Development</p>
            <p>React Developer</p>
            </div>
            <div className="col-sm-3">
            <h5>Placement Company</h5>
            <p>Zoho</p>
            <p>CTS</p>
            <p>TCS</p>
            <p></p>
            </div>
        </div>
        <footer className="container-fluid text-center">
        <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    </div>
  )
}

export default Footer
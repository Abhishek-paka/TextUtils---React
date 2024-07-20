import React, {useState} from "react";
import PropTypes from 'prop-types';
import './Styles.css';
import {Link} from 'react-router-dom';


export default function Navbar(props) {

  const [mode, setMode] = useState("light");

  const handleOnChange = (event) => {
    const color = event.target.getAttribute('data-value');
    props.toggleMode(color);
    setMode(color);
    props.showAlert('Switched to '+ color +' Mode', 'success');
  };



  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/TextUtils">{props.title}</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">{props.homeText}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" >{props.aboutText}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
          {/* <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'} mx-3`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable PurpleMode</label>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div> */}

          <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
              Select Mode
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item" onClick={handleOnChange} data-value="dark">Dark Mode</li>
              <li className="dropdown-item" onClick={handleOnChange} data-value='purple'>Purple Mode</li>
              <li className="dropdown-item" onClick={handleOnChange} data-value="light">Light Mode</li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.proptype = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    homeText: PropTypes.string.isRequired
};

// Navbar.defaultProps = {
//     title: "Title unset",
//     aboutText: "About unset",
//     homeText: "Home unset"
// };

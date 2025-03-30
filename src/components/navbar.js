import React from "react";
import PropTypes from 'prop-types';  

export default function Navbar(props) {
    return (
    <>
    <div className="navbar_container">
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
            <div className="container-fluid mt-2">  
                <h1 className="navbar-brand">{props.title}</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} style={{marginLeft:"auto"}}>    
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.mode_button_click} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='dark'?'Light':'Dark'} Mode</label>
                    </div>                   
                </div>         
            </div>
        </nav>
    </div>
    </>
    );
}

Navbar.propTypes = {title: PropTypes.string, 
                    home: PropTypes.string, 
                    about: PropTypes.string};

Navbar.propTypes = {title: PropTypes.string.isRequired, 
                    home: PropTypes.string.isRequired, 
                    about: PropTypes.string.isRequired};


// Navbar.defaultProps = {
//     title: "React App",                 
//     home: "Home", 
//     about: "About"     
// };

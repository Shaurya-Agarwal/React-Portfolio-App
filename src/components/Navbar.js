import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {HashLink as Link} from 'react-router-hash-link'

const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Shaurya Agarwal</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                    <Link smooth className="nav-link" aria-current="page" to="#home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth className="nav-link" to="#about">About Me</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth className="nav-link" to="#education">Education</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth className="nav-link" to="#projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                    <Link smooth className="nav-link" to="#contact">Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
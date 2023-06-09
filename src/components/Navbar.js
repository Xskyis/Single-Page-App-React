import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg bg-primary navbar-light">
                <a className="navbar-brand p-1" href="/home">
                    Single Page Application
                </a>

                {/* show and hide menu */}
                <button className="navbar-toggler" data-bs-toggle="collapse"
                    data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* menu */}
                <div id="menu" className="navbar-collapse collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link">
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;

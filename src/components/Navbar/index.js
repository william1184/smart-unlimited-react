import React from "react";

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const Navbar = () => {

    return (
        <div className="ui container">
            <div className="ui large secondary inverted pointing menu">
                {/* <a href="!#void" className="toc item">
                    <i className="sidebar icon"></i>
                </a> */}
                <Link className="item" to="/">Home</Link>
                <div className="right item">
                    <Link className="ui inverted button" to="/login">Log in</Link>
                    <Link className="ui inverted button" to="/signin">Sign Up</Link>
                </div>
            </div>
        </div>
    )

}

export default Navbar;
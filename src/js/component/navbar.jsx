import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body">
                <div className="container-fluid">
                    <a className="navbar-brand text-white">Start Bootstrap</a>
                    <form className="d-flex" role="search">
                        <a className="navbar-brand text-white">Home </a>
                        <a className="navbar-brand text-white">About </a>
                        <a className="navbar-brand text-white">Services </a>
                        <a className="navbar-brand text-white">Contact </a>
                    </form>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
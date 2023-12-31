import React from "react";

function NavBar() {
    return (
        <>
            <style>
                {` .nav-link   {  font-size:1.2m; }`}
            </style>
            <nav className="navbar   navbar-expand-sm navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand fs-3" href="javascript:void(0)">
                        Weather App
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mynavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Home

                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Map


                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Setting

                                </a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="text"
                                placeholder="Search"
                            />
                            <button className="btn btn-primary" type="button">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>


        </>
    );
}

export default NavBar;

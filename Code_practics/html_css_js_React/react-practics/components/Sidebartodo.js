import React from "react";

export default function SideBartodo() {
    return (

        <div className="col bg-light position-fixed vh-100" style={{width: 200}}>
            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#">Today</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Upcoming</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Past</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  " href="#">Completed</a>
                </li>
            </ul>
        </div>
    );
}
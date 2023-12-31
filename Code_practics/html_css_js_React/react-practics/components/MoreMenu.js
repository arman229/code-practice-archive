import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function MoreMenu(props) {

    return (
        <div className="btn-group">
            <MoreVertIcon data-bs-toggle="dropdown" aria-expanded="false"/>
            <ul className="dropdown-menu">
                <li>
                    <button className="dropdown-item" type="button" onClick={props.onEdit}     >
                        Edit
                    </button>
                </li>
                <li>
                    <button className="dropdown-item" type="button" onClick={props.onDelete}>
                       Delete
                    </button>
                </li>
                <li>
                    <button className="dropdown-item" type="button" onClick={props.onComplete} >
                        {props.todo.completed?"Mark as unComplete" :"Mark as Complete"}
                    </button>
                </li>
            </ul>
        </div>
    );
}

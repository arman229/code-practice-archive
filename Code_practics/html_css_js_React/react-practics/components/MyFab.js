import {Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
export function MyFab(props) {
    return (
        <Fab type="button" className="btn btn-primary"    color="primary bg-danger" onClick={props.OnAdd}
             style={{position: 'fixed', bottom: 36, right: 36}} aria-label="add">
            <AddIcon/>

        </Fab>)
}
// data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"
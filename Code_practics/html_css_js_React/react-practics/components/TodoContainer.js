import React from "react";
import MoreMenu from "./MoreMenu";
import FactCheckIcon from '@mui/icons-material/FactCheck';


export function TodoContainer(props) {
    const onDeleteClicked = (todo) => {
        props.onDelete(todo)
    }
    const onMarkedAsDone = (todo) => {
        props.onComplete(todo)
    }
    const onEditClicked = (todo) => {
        props.onEdit(todo);
    };

    return (
        <div className="col vh-100 bg-white " style={{marginLeft: 200}}>
            {props.todos.map(item => (
                <TodoItem key={item.id} todo={item} onDelete={onDeleteClicked} onComplete={onMarkedAsDone} onEdit={onEditClicked}/>))}

        </div>)
}

function TodoItem(props) {
    const onDeleteClicked = () => {
        props.onDelete(props.todo);
    };

    const onMarkedAsDone = () => {
        props.onComplete(props.todo);
    };

    const onEditClicked = () => {
        props.onEdit(props.todo);
    };

    return (
        <div className="card m-1 d-flex flex-row">
            <div className="card-body bg-light">
                <h3>{props.todo.title}</h3>
                <p>{props.todo.description} </p>
            </div>
            <div className="d-flex align-items-center p-2">
                {props.todo.completed && <FactCheckIcon style={{ marginRight: 16 }} />}
                <MoreMenu
                    todo={props.todo}
                    onDelete={onDeleteClicked}
                    onComplete={onMarkedAsDone}
                    onEdit={onEditClicked}
                />
            </div>
        </div>
    );
}


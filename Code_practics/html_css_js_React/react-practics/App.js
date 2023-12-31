import React, {useEffect, useState} from "react";
import {TodoContainer} from "./components/TodoContainer";
import TopAppBar from "./components/TopAppBar";
import SideBar from "./components/Sidebartodo";
import {MyFab} from "./components/MyFab";
import TodoModal from "./components/TodoModal";
import FirstComponent from "./components/practics5";
import Appq from "./components/practics5";


let id = 0


function App() {
    // const [todos, setTodos] = useState([])
    // const [todo, setToDo] = useState({})
    //
    // let myModal
    // useEffect(() => {
    //     let addModelDiv = document.getElementById('exampleModal');
    //     myModal = new window.bootstrap.Modal(addModelDiv)
    // })
    // const onDeleteClicked = (todo) => {
    //     const remaining = todos.filter((item) => item.id !== todo.id)
    //     setTodos(remaining)
    // }
    // const onMarkedAsDone = (todo) => {
    //     const remaining = todos.map((item) => {
    //         if (item.id === todo.id) {
    //             item.completed = !item.completed
    //         }
    //         return item
    //     })
    //     setTodos(remaining)
    // }
    // const onEditClicked = (todo) => {
    //     console.log(`title ${todo.title} and description ${todo.description}`)
    //     setToDo(todo)
    //     myModal.show()
    // }
    //
    // function onDataentred(title, description) {
    //     const newTodo = {id: ++id, title: title, description: description, completed: false}
    //     const newItems = [...todos, newTodo]
    //     myModal.hide()
    //     setTodos(newItems)
    // }
    //
    //
    //
    // function OnAdd() {
    //     console.log("on addd clice  sdfd");
    //     myModal.show()
    // }

    return (
        <>

<Appq/>

            {/*<TopAppBar/>*/}
            {/*<SideBar/>*/}
            {/*<TodoModal onDataEnter={onDataentred} title={todo.title} description={todo.description}/>*/}
            {/*<TodoContainer todos={todos} onDelete={onDeleteClicked} onComplete={onMarkedAsDone} onEdit={onEditClicked}/>*/}
            {/*<MyFab OnAdd={OnAdd}/>*/}
        </>
    );
}

export default App;

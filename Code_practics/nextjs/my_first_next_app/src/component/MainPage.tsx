'use client'
import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import TodoCard from "./TodoCard";
import AddTodoModel from "./AddTodoModel";
import {filterTodos, TodoItem} from "@/data/datatypes";
import ThreeChips from "./threebutton";
import addaudio from '@/assets/audio/audio.mp3'

const MainPage = () => {
    const [isLightMode, setIsLightMode] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [todosArray, setTodosArray] = useState<TodoItem[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filteredTodos, setFilteredTodos] = useState<TodoItem[]>([]);
    const [selectedTodo, setSelectedTodo] = useState<TodoItem | undefined>();
    const [selectedChip, setSelectedChip] = useState<string>('all');

    useEffect(() => {
        var isLight=Boolean(localStorage.getItem("isLight") === "true")
        setIsLightMode(isLight)
    }, [])

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedTodo(undefined)
    };
    const onEdit = (newTodoItem: TodoItem) => {
        setSelectedTodo(newTodoItem);
        setIsModalOpen(true)
    };
    const onDelete = (todoItem: TodoItem) => {
        const updatedTodos = todosArray.filter((item) => item.id !== todoItem.id);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        setTodosArray(updatedTodos);

    };
    useEffect(() => {
        let byStatusList = todosArray;
        if (selectedChip !== 'all') {
            const targetStatus = selectedChip === 'completed' ? 'COMPLETED' : 'PENDING';
            byStatusList = todosArray.filter((todo) => todo.status === targetStatus);
        }

        const updatedFilteredTodos = searchQuery !== "" ? filterTodos(byStatusList, searchQuery) : byStatusList;
        setFilteredTodos(updatedFilteredTodos);
    }, [searchQuery, todosArray, selectedChip]);

    const onAddOrUpdate = (newTodoItem: TodoItem) => {
        const found = todosArray.find(item => item.id === newTodoItem.id)
        if (found !== undefined) {
            const updatedData = todosArray.map(obj => (obj.id === newTodoItem.id ? {
                ...obj,
                title: newTodoItem.title,
                description: newTodoItem.description,
                date: newTodoItem.date,
                status: newTodoItem.status,
                priority: newTodoItem.priority,
                labels: newTodoItem.labels,
            } : obj));
            localStorage.setItem('todos', JSON.stringify(updatedData));
            setTodosArray(updatedData);
        } else {
            const updatedData = [...todosArray, newTodoItem]
            localStorage.setItem('todos', JSON.stringify(updatedData));
            setTodosArray(updatedData);
        }
        setSelectedTodo(undefined);

    }


    useEffect(() => {
        const localStore = localStorage.getItem('todos');
        if (localStore) {
            const oldData = JSON.parse(localStore)
            const dataWithDate = oldData.map(it => ({
                ...it,
                date: new Date(it.date)
            }));
            setTodosArray(dataWithDate);
            console.log('filtered todos ' + filteredTodos)
        }
    }, []);


    return (
        <>
            <div className={` flex flex-col min-h-screen   ${!isLightMode ? 'dark' : ''}`}>
                <Header toggleDarkMode={() => {
                    localStorage.setItem("isLight", String(!isLightMode))
                    setIsLightMode(!isLightMode)
                }} isDarkMode={isLightMode}/>
                <div
                    className={' px-2  flex-1   text-black     dark:bg-[#121c22]  bg-white'}>
                    <Search
                        searchTerm={searchQuery}
                        onSearchChange={q => setSearchQuery(q)}
                        onAddTodoButtonClick={() => {
                            const addaudio = new Audio('/audio/audio.mp3');
                            addaudio.play()
                            setIsModalOpen(true)

                        }}
                    />


                    <ThreeChips selectedChip={selectedChip} onSelectChip={setSelectedChip}/>
                    <div className="flex flex-wrap justify-center   gap-6  pb-8"  >
                        {filteredTodos.map((item) => (
                            <TodoCard key={item.id}
                                      todoItem={item}
                                      onStatusChange={onAddOrUpdate}
                                      onEdit={() => onEdit(item)}
                                      onDelete={() => onDelete(item)}
                                      isDarkMode={isLightMode}/>
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
            <div className="flex items-center justify-center  ">
                {isModalOpen && (
                    <AddTodoModel
                        isDarkMode={isLightMode}
                        closeModal={closeModal}
                        onSave={onAddOrUpdate}
                        editTodoItem={selectedTodo}
                    />
                )}

            </div>


        </>
    );
};

export default MainPage;

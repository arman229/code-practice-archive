'use client'
import React, {FC, useEffect, useState} from "react";
import {TodoItem, TodoPriority, TodoStatus} from "@/data/datatypes";
import {DeletableChip} from "./DeletableChip";





interface AddTodoModelInterface {
    isDarkMode: boolean
    closeModal: () => void
    onSave: (todoItem: TodoItem) => void
    editTodoItem: TodoItem | undefined
}

var todoId = 0
const AddTodoModel: FC<AddTodoModelInterface> = ({isDarkMode, closeModal, onSave, editTodoItem}) => {
    console.log("add update called")
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [date, setDate] = useState<Date>(new Date())
    const [priority, setPriority] = useState<TodoPriority>('LOW')
    const [status, setStatus] = useState<TodoStatus>('PENDING');
    const [labelInput, setLabelInput] = useState<string>("")
    const [labels, setLabels] = useState<string[]>([])
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);


    useEffect(() => {
        if (editTodoItem) {
            setTitle(editTodoItem.title);
            setDescription(editTodoItem.description);
            setDate(editTodoItem.date);
            setPriority(editTodoItem.priority);
            setStatus(editTodoItem.status);
            setLabels([...editTodoItem.labels]);
        }
    }, [editTodoItem]);


    const onSubmit = () => {
        setSubmitButtonClicked(true);
        if (title.trim() !== '' && description.trim() !== '') {
            const todoItem: TodoItem = {
                id: Date.now().toString(36) + Math.random().toString(36).substr(2),
                title: title,
                description: description,
                date: date,
                status: status,
                priority: priority,
                labels: [...labels]
            }
            if (editTodoItem) {
                onSave({...editTodoItem, title, description, date, priority, status, labels});
            } else {
                onSave(todoItem);

            }
            closeModal();

        }
    }
    const onKeyDown = (e: any) => {
        if (e.key === 'Enter' && labelInput.trim() !== '') {
            setLabels([...labels, labelInput])
            setLabelInput("")
        }
    }


    const handleSelectChange = (event: any) => {
        setPriority(event.target.value);
    };

    const handleCheckboxChange = () => {
        setStatus((prevStatus) => (prevStatus === 'PENDING' ? 'COMPLETED' : 'PENDING'));
    };
    const deleteLabel = (index: number) => {
      const  addaudio = new Audio('/audio/remove.mp3');
        addaudio.play()
        setLabels(prev => prev.filter((item, indexf) => indexf !== index));
    };

    return (
        <>



            <div    onClick={closeModal} className="fixed inset-0 opacity-70  bg-black"></div>
            <div style={{   transform:"translateY(-50%)"} }
                      className={`rounded-xl  fixed  top-[50%]    p-6   shadow-md   p-4 w-full max-w-md max-h-full ${isDarkMode ? ' bg-white ' : 'bg-gray-900 text-white'} `}>
                <h2 className={`text-2xl font-bold mb-4   `}>Add Todo</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="title"
                               className={`block text-sm font-medium  ${isDarkMode ? ' bg-white text-gray-900 ' : '  text-white'}`}>Title:</label>
                        <input placeholder="Enter the title" type="text" id="title" name="title"
                               className={`mt-1 p-2 w-full border rounded-md  ${isDarkMode ? ' bg-white   ' : 'bg-gray-700 text-white'}`}
                               value={title} onChange={(e) => setTitle(e.target.value)}/>
                        {submitButtonClicked && title.trim() === '' && (
                            <p className="mt-2 text-sm text-red-600  ">
                                Please provide a descriptive title for your task.
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description"
                               className={`block text-sm font-medium   ${isDarkMode ? ' bg-white text-gray-900 ' : '  text-white'}`}>Description:</label>
                        <textarea id="description" name="description"
                                  className={`mt-1 p-2 w-full border rounded-md  ${isDarkMode ? ' bg-white text-gray-900 ' : '   bg-gray-700 text-white'}`}
                                  placeholder="Enter the description" value={description}
                                  onChange={(e) => setDescription(e.target.value)}></textarea>
                        {submitButtonClicked && description.trim() === '' && (
                            <p className="mt-2 text-sm text-red-600  ">
                                Please provide a descriptive description for your task.
                            </p>
                        )}
                    </div>

                    <div className=" flex gap-2 mb-4">
                        <div style={{flex: '1'}}>
                            <label htmlFor="datepicker"
                                   className={`block text-sm font-medium  ${isDarkMode ? ' bg-white ' : '  text-white'}`}>Select
                                a
                                Date</label>
                            <input type="date" id="datepicker" name="datepicker"
                                   value={date.toISOString().split('T')[0]}
                                   onChange={(e) => setDate(new Date(e.target.value))}
                                   className={`mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 ${isDarkMode ? ' bg-white text-gray-900 ' : '   bg-gray-700 text-white'}`}/>
                        </div>


                        <div style={{flex: '1'}}>
                            <label htmlFor="selectOption"
                                   className={`block text-sm font-medium text-gray-700 ${isDarkMode ? ' bg-white ' : 'bg-gray-900 text-white'} `}>Select
                                an
                                Option</label>
                            <select id="selectOption" name="selectOption" value={priority}
                                    onChange={handleSelectChange}
                                    className={`mt-1 p-2 block w-full border rounded-md shadow-sm text-black  focus:outline-none focus:ring focus:border-blue-300 ${isDarkMode ? ' bg-white text-gray-900 ' : '   bg-gray-700 text-white'}`}>
                                <option value="LOW">Low</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HIGH">High</option>
                            </select>
                        </div>
                    </div>
                    <div className={`mb-4 `}>
                        <label htmlFor="tags"
                               className={`block text-sm font-medium text-gray-600 ${isDarkMode ? ' bg-white ' : 'bg-gray-900 text-white'}`}>Lables
                            (Press Enter to
                            add multiple) </label>
                        <input type="text" id="tags" name="tags"
                               className={`mt-1 p-2 w-full border rounded-md ${isDarkMode ? ' bg-white text-gray-900 ' : '   bg-gray-700 text-white'}`}
                               placeholder="Type and press Enter" value={labelInput} autocomplete="off"
                               onChange={(e) => setLabelInput(e.target.value)} onKeyDown={onKeyDown}/>
                        <div className="flex flex-wrap p-2">
                            {labels.map((lable, index) => (
                                <>
                                    <DeletableChip key={index} label={lable} isDarkMode={isDarkMode} onDelete={() => deleteLabel(index)}/>

                                </>))}
                        </div>
                    </div>
                    <div className="  flex  items-center    ">
                        <input checked={status === 'COMPLETED'}
                               onChange={handleCheckboxChange}
                               id="comments" name="comments" type="checkbox"
                               className={`cursor-pointer  rounded border-gray-900 text-indigo-600 focus:ring-indigo-600  `}/>
                        <label htmlFor="comments"
                               className={`text-sm leading-6 font-medium text-black  px-2 ${isDarkMode ? '  text-black ' : '  text-white'}`}>Todo
                            Completed</label>
                    </div>
                    <div
                        className={`flex items-center justify-end p-4 md:p-5   border-gray-200 rounded-b dark:border-gray-600`}>
                        <button type="button" onClick={closeModal}
                                className={`text-gray-500 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ${isDarkMode ? '  ' : ' bg-gray-400'}`}>Cancel
                        </button>

                        <button onClick={onSubmit} type="button"
                                className={` ms-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  `}>Add
                            Todo
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default AddTodoModel
import React, { useEffect, useState } from 'react'
import { useDark } from '../hooks/DarkContext'
import ToDoItem from './ToDoItem'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


const ToDoList = ({ todosLista, handleDone, handleDelete, handleClear, handleOrder }) => {

    const { darkMode } = useDark()
    const [todosFilter, setToDos] = useState(todosLista)
    const [filter, setFilter] = useState('all')
    const [taskLeft, setTaskLeft] = useState()


    useEffect(() => {
        setToDos(todosLista)
        setTaskLeft(todosLista.filter(e => e.done === false).length)
    }, [todosLista])

    useEffect(() => {

        const handleFilter = () => {

            if (filter === "all") {
                setToDos(todosLista)
            }
            else if (filter === "active") {
                setToDos(todosLista.filter(e => (
                    e.done === false
                )))
            }
            else {
                setToDos(todosLista.filter(e => (
                    e.done !== false
                )))
            }
        }

        handleFilter()
    }, [filter, todosLista])

    return (
        <DragDropContext onDragEnd={(result) => {
            const {source,destination} = result;
            if(!destination) return;
            if(source.index===destination.index && source.droppableId===destination.droppableId) return;
            handleOrder(source.index,destination.index)
        }}>
            <div className={`bg-white ${darkMode && "bg-td-dt-veryDarkBlueDesur"} mt-5 rounded-md contenedor body-transition`}>
                {
                    todosLista.length===0&&(
                        <h1 className={`text-2xl md:text-4xl text-center py-4 font-medium ${darkMode?"text-td-lt-gray-veryLight":"text-td-lt-gray-veryDarkBlue"} transition-colors`}>Add some tasks</h1>
                    )
                }
                <Droppable droppableId="todos">
                    {(droppableProvided) =>
                        <ul {...droppableProvided.droppableProps}
                            ref={droppableProvided.innerRef}
                        >
                            {
                                todosFilter.map((e, i) =>
                                    <Draggable
                                        key={e.id}
                                        draggableId={String(e.id)}
                                        index={i}
                                    >
                                        {
                                            (draggableProvided) =>
                                                <li
                                                    {...draggableProvided.draggableProps}
                                                    ref={draggableProvided.innerRef}
                                                    {...draggableProvided.dragHandleProps}
                                                >
                                                    <ToDoItem
                                                        handleDone={handleDone}
                                                        handleDelete={handleDelete}
                                                        setToDos={setToDos}
                                                        {...e}
                                                    />
                                                </li>
                                        }
                                    </Draggable>
                                )
                            }
                            {droppableProvided.placeholder}
                        </ul>
                    }
                </Droppable>
                <section className="flex justify-between py-4 px-4">
                    <p className="text-sm text-td-lt-gray-darkBlue">
                        {`${taskLeft} items left`}
                    </p>
                    <div className="hidden lg:flex justify-around">
                        <p
                            className={`cursor-pointer text-sm  font-semibold ${darkMode ? "hover:text-td-dt-gray-lightBlue " : "hover:text-td-lt-gray-veryDarkBlue"} ${filter === "all" ? 'text-td-blue' : "text-td-lt-gray-darkBlue"}`}
                            onClick={() => setFilter("all")}
                        >
                            All
                        </p>
                        <p
                            className={`cursor-pointer text-sm mx-6 font-semibold ${darkMode ? "hover:text-td-dt-gray-lightBlue " : "hover:text-td-lt-gray-veryDarkBlue"} ${filter === "active" ? 'text-td-blue' : "text-td-lt-gray-darkBlue"}`}
                            onClick={() => setFilter("active")}
                        >
                            Active
                        </p>
                        <p
                            className={`cursor-pointer text-sm font-semibold ${darkMode ? "hover:text-td-dt-gray-lightBlue " : "hover:text-td-lt-gray-veryDarkBlue"} ${filter === "completed" ? 'text-td-blue' : "text-td-lt-gray-darkBlue"} `}
                            onClick={() => setFilter("completed")}
                        >
                            Complete
                        </p>
                    </div>
                    <p
                        className={`cursor-pointer text-sm text-td-lt-gray-darkBlue ${darkMode ? "hover:text-td-dt-gray-lightBlue " : "hover:text-td-lt-gray-veryDarkBlue"}`}
                        onClick={handleClear}
                    >
                        Clear completed tasks
                    </p>
                </section>
            </div>

            <section className={`bg-white ${darkMode && "bg-td-dt-veryDarkBlueDesur"} rounded-md mt-5 py-4 px-16 flex justify-center lg:hidden body-transition `}>
                <p
                    className={`cursor-pointer font-semibold ${darkMode ? "hover:text-td-dt-gray-lightBlue " : "hover:text-td-lt-gray-veryDarkBlue"} ${filter === "all" ? 'text-td-blue' : "text-td-lt-gray-darkBlue"}`}
                    onClick={() => setFilter("all")}
                >
                    All
                </p>
                <p
                    className={`cursor-pointer mx-9 font-semibold ${darkMode ? "hover:text-td-dt-gray-lightBlue " : "hover:text-td-lt-gray-veryDarkBlue"} ${filter === "active" ? 'text-td-blue' : "text-td-lt-gray-darkBlue"}`}
                    onClick={() => setFilter("active")}
                >
                    Active
                </p>
                <p
                    className={`cursor-pointer font-semibold ${darkMode ? "hover:text-td-dt-gray-lightBlue " : "hover:text-td-lt-gray-veryDarkBlue"} ${filter === "completed" ? 'text-td-blue' : "text-td-lt-gray-darkBlue"}`}
                    onClick={() => setFilter("completed")}
                >
                    Complete
                </p>
            </section>
        </DragDropContext>
    )
}

export default ToDoList

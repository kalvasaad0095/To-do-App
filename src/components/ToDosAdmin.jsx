import React, { useEffect, useReducer } from 'react'
import { useDark } from '../hooks/DarkContext';
import { todoReducer } from '../utils/todoReducer';
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'

const init = () => {
    return (JSON.parse(localStorage.getItem('todos'))) || [];
}

const ToDosAdmin = () => {

    const [miToDos,dispatch] = useReducer(todoReducer,[],init)
    const {darkMode} = useDark()

    useEffect(()=>{

        localStorage.setItem('todos',JSON.stringify(miToDos))

    },[miToDos])

    const handleDelete = (id) => {

        dispatch({
            type:'delete',
            payload:id
        })

    }

    const handleDone = (id) => {
        dispatch({
            type:'toogle',
            payload:id
        })
    }

    const handleAdd = (newTodo) => {
        dispatch({
            type:"add",
            payload:newTodo
        })
    }

    const handleClear = () => {
        dispatch({
            type:"clear"
        })
    }

    const handleOrder = (first,second) => {
        dispatch({
            type:"order",
            first,
            second
        })
    }

    return (
        <section className="w-4/5 mx-auto lg:w-3/5 relative bottom-36">
            <ToDoInput
                handleAdd={handleAdd}
            />
            <ToDoList 
                todosLista = {miToDos}
                handleDone={handleDone}
                handleDelete={handleDelete}
                handleClear={handleClear}
                handleOrder={handleOrder}
            />
            <h3 className={`text-center mt-8 ${darkMode?"text-td-lt-gray-lightBlue":"text-td-dt-gray-veryDarkBlue"} font-semibold transition-colors`}>Drag and drop to reorder your list</h3>
        </section>
    )
}

export default ToDosAdmin

import React, { useState } from 'react'
import { useDark } from '../hooks/DarkContext'


const ToDoInput = ({ handleAdd }) => {

    const { darkMode, setDarkMode } = useDark()
    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todo.length > 2) {
            handleAdd({
                id: new Date().getTime(),
                desc: todo,
                done: false
            })
            setTodo('')
            return
        }

        alert('ToDo has to contain at least 2 characters')
    }

    return (
        <>
            <section className="flex justify-between">
                <h1 className="text-4xl text-white title">TO-DO</h1>
                {
                    darkMode ?
                        (<img src='./images/icon-sun.svg' alt='moon or sun' className="w-9 h-9 cursor-pointer" onClick={() => setDarkMode(!darkMode)} />) :
                        (<img src='./images/icon-moon.svg' alt='moon or sun' className="w-9 h-9 cursor-pointer" onClick={() => setDarkMode(!darkMode)} />)
                }
            </section>
            <form onSubmit={handleSubmit} className="">
                <div
                    className={`w-5 h-5 rounded-full border ${darkMode && "border-dark"} relative input-check`}
                >
                </div>
                <input
                    type="text"
                    className={`w-full py-3 px-12 rounded-md outline-none ${darkMode && "bg-td-dt-veryDarkBlueDesur text-td-dt-gray-lightBlue body-transition"}`}
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Create a new todo..."
                />
            </form>
        </>

    )
}

export default ToDoInput

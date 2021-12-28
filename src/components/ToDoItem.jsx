import React from 'react'
import { useDark } from '../hooks/DarkContext'


const ToDoItem = ({ id, desc, done, handleDone, handleDelete }) => {

    const { darkMode } = useDark()

    return (
        <section className={`h-full `}>
            <div className={`flex justify-between py-4 px-4 border-b border-td-dt-gray-veryDarkBlue2 border-dark ${!darkMode&&"border-light"} border-transition`}>
                <div className="flex items-center">
                    <div 
                    className={`cursor-pointer w-5 h-5 rounded-full border btn-gradient-2 ${darkMode&&"border-dark"} ${done&&"check-cont"} transition-colors mr-2`}
                    onClick={()=>handleDone(id)}
                    >
                        <img 
                        src="./images/icon-check.svg" 
                        alt="check" 
                        className={`check ${done||"hidden"}`}
                        />
                    </div>
                    <span
                        className={`ml-2 cursor-pointer ${done&&"opacity-20 line-through"}
                        ${darkMode?"text-td-dt-gray-lightBlue ":"text-td-lt-gray-veryDarkBlue"} body-transition`}
                        onClick={() => handleDone(id)}
                    >
                        {desc}
                    </span>
                </div>
                <img
                    src="./images/icon-cross.svg"
                    alt=""
                    className="opacity-75 w-4 h-4 cursor-pointer"
                    onClick={() => handleDelete(id)}
                />
            </div>
        </section>
    )
}

export default ToDoItem

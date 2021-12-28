import React, { useState } from 'react'
import './App.css'
import ToDosAdmin from './components/ToDosAdmin'
import { DarkContext } from './hooks/DarkContext'
import MainLayout from './layout/MainLayout'

const App = () => {

    const [darkMode, setDarkMode] = useState(false)

    return (
        <DarkContext.Provider value={{darkMode,setDarkMode}}>
            <MainLayout>
                <ToDosAdmin />
            </MainLayout>
        </DarkContext.Provider>
    )
}

export default App

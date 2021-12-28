import React from 'react'
import Header from '../components/Header'
import { useDark } from '../hooks/DarkContext'


const MainLayout = ({children}) => {

    const {darkMode} = useDark()

    return (
        <div className="grid-container min-h-screen relative">
            <Header/>
            <main className={`${!darkMode?"bg-td-grayVeryLightBlue":"bg-td-dt-veryDarkBlue"} body-transition`}>{children}</main>
        </div>
    )
}

// bg-td-lt-gray-veryLight

export default MainLayout

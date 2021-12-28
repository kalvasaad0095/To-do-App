import React, { useEffect, useState } from 'react'
import { useDark } from '../hooks/DarkContext'

const Header = () => {

    const {darkMode} = useDark()

    const darkHeader = './images/bg-desktop-dark.jpg'
    const lightHeader = './images/bg-desktop-light.jpg'

    const [bg,setBg] = useState(lightHeader)

    useEffect(()=>{

        (darkMode)?
        setBg(darkHeader):setBg(lightHeader)
    },[darkMode])

    return (
        <header className="">
            <img 
            src={bg} 
            alt="header" 
            className="block object-cover h-full w-full"
            />
        </header>
    )
}

export default Header

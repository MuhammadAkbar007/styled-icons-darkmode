import {createContext, useState} from "react";

export const ThemeContext = createContext()

function Mode({children}) {

    const [theme, setTheme] = useState({
        icon: 'black',
        title: 'black',
        background: 'white'
    })

    return(
        <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>
    )
}

export default Mode
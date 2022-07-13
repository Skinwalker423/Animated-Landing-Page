import React, {useState, createContext} from "react";


export const ThemeContext = createContext({});

export const ThemeProvider = ({children}) => {

    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(previousDarkTheme => !previousDarkTheme);
    }

    const value = {darkTheme, toggleTheme, setDarkTheme };

    return(
        <ThemeContext.Provider value={{darkTheme, toggleTheme, setDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


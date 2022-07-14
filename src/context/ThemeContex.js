import React, { createContext, useState, useContext, useReducer } from "react";

export const ThemeContext = createContext({});

export const useTheme = () => {
        useContext(ThemeContext);
    }

export const useThemeUpdate = () => {
        useContext(ThemeContext);
    }

const INITIAL_STATE = {
    score: 0,
    setScore: () => {},
    title: '',
    setTitle: () => {},
    todoList: [],
    setToDoList: () => {},
}

export const ACTION_TYPES = {
    INCREMENT_SCORE : 'INCREMENT_SCORE',
    DECREMENT_SCORE : 'DECREMENT_SCORE',
    ADD_TODO : 'ADD_TODO',
    ADD_TITLE : 'ADD_TITLE',
    CLEAR_INPUT : 'CLEAR_INPUT',
    TOGGLE_TODO : 'TOGGLE_TODO',
    DELETE_TODO : 'DELETE_TODO',
}

const newTodo = (title) => {
    return {id: Date.now(), title: title, complete: false }
}

const reducer = (state, action) => {
    const {type, payload} = action;

    switch(type){

        case ACTION_TYPES.INCREMENT_SCORE : 
            return {...state, score: payload}

        case ACTION_TYPES.DECREMENT_SCORE : 
            return {...state, score: payload}
        
        case ACTION_TYPES.ADD_TODO : 
            return {...state, todoList: [...state.todoList, newTodo(payload)]}
        
        case ACTION_TYPES.ADD_TITLE :
            return {...state, title: payload}
        
        case ACTION_TYPES.CLEAR_INPUT : 
            return {...state, title: ""}

        case ACTION_TYPES.TOGGLE_TODO:
            return {...state, todoList: payload}

        case ACTION_TYPES.DELETE_TODO:
            return {...state, todoList: payload}
        default :
            return state
    }

}

export const ThemeProvider = ({children}) => {

    const [darkTheme, setDarkTheme] = useState(false);
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)


    // const increment = () => {
    //     setScore(previouScore => previouScore + 1);
    // }
    // const decrement = () => {
    //     setScore(previouScore => previouScore - 1);
    // }


    const toggleTheme = () => {
        setDarkTheme((previusDarkTheme) => !previusDarkTheme);
    }

    const clearInput = () => {
        dispatch({type: ACTION_TYPES.CLEAR_INPUT});
    }

    const value = {darkTheme, setDarkTheme, toggleTheme, dispatch, state, clearInput}

    return(
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}






























// import React, {useState, createContext} from "react";


// export const ThemeContext = createContext({});

// export const ThemeProvider = ({children}) => {

//     const [darkTheme, setDarkTheme] = useState(false);

//     const toggleTheme = () => {
//         setDarkTheme(previousDarkTheme => !previousDarkTheme);
//     }

//     const value = {darkTheme, toggleTheme, setDarkTheme };

//     return(
//         <ThemeContext.Provider value={value}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }


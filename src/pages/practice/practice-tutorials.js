import './practice-styles.scss';
import React, {useEffect, useRef, useState, useMemo, useContext, useReducer} from 'react';
import { ThemeContext, ACTION_TYPES } from '../../context/ThemeContex';

const Practice = () => {

    const {setDarkTheme, darkTheme, toggleTheme, dispatch, state} = useContext(ThemeContext);

    const [resourcetype, setResourceType] = useState('posts');
    const [users, setUsers] = useState([]);
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const renderCount = useRef(0);

    const [dark, setDark] = useState(false);
    const [number, setNumber] = useState(0);
    const doubledNum = useMemo(() => {
        return doubleNumber(number);
    }, [number]);

    const themeStyles = {
        backgroundColor: darkTheme ? 'black' : 'white',
        color: darkTheme ? 'white' : 'black'
    }


    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('removed event listener');
        }

    }, [])

    const onClickHandle = (resource) => {
        setResourceType(resource);
    }
    // const onClickThemeHandle = () => {
    //     toggleTheme();
    //     console.log(darkTheme);
    // }


    // const focusHandle = () => {
    //     inputRef.current.focus();
    // }

    const increment = () => {
        const newScore = state.score + 1;
        dispatch({type: ACTION_TYPES.INCREMENT_SCORE, payload: newScore})
    }
    const decrement = () => {
        const newScore = state.score - 1;
        dispatch({type: ACTION_TYPES.DECREMENT_SCORE, payload: newScore})
    }

    const formHandle = (e) => {
        e.preventDefault();
        dispatch({type: ACTION_TYPES.ADD_TODO, payload: state.title})

    } 

    

    return (
        <div className='practice-container'>
            <h1>Practice</h1>
            <input type={'number'} value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={
                () => onClickHandle('posts')
            }>post</button>
            <button onClick={
                () => onClickHandle('users')
            }>user</button>
            <button onClick={
                () => onClickHandle('comments')
            }>comment</button>
            <button onClick={() => {
                toggleTheme();
                console.log('changed theme');
            }}>CHANGE THEME</button>

            <h3>Output: {windowWidth}</h3>
            <h3 style={themeStyles}>Name: {doubledNum}</h3>
            <div className='score-board'>
                <button onClick={increment}>+</button>
                {state.score}
                <button onClick={decrement}>-</button>
            </div>
            <form onSubmit={formHandle}>
                <input type={'text'} onChange={(e) => dispatch({
                    type: ACTION_TYPES.ADD_TITLE, payload: e.target.value
                }) } />
            </form>
            <h1>TODO: {state.title}</h1>

            
        </div>
    )
}

const doubleNumber = (num) => {
        for (let index = 0; index < 10; index++) {}
        return num * 2;
    }

export default Practice;
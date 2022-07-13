import './practice-styles.scss';
import React, {useEffect, useRef, useState, useMemo} from 'react';


const Practice = () => {

    const [resourcetype, setResourceType] = useState('posts');
    const [users, setUsers] = useState([]);
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const renderCount = useRef(0);
    const previousUser = useRef();
    const [dark, setDark] = useState(false);
    const [number, setNumber] = useState(0);
    const doubledNum = useMemo(() => {
        return doubleNumber(number);
    }, [number]);

    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    useEffect(() =>{ 
        previousUser.current = users;
    },);

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


    // const focusHandle = () => {
    //     inputRef.current.focus();
    // }

    const changeThemeHandle = () => {
        setDark((dark) => !dark);
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
            <button onClick={changeThemeHandle}>CHANGE THEME</button>

            <h3>Output: {windowWidth}</h3>
            <h3>Count: {renderCount.current}</h3>
            <h3>Name: {users}</h3>
            <h3>Name: {previousUser.current}</h3>
            <h3 style={themeStyles}>Name: {doubledNum}</h3>

            
        </div>
    )
}

const doubleNumber = (num) => {
        for (let index = 0; index < 10; index++) {}
        return num * 2;
    }

export default Practice;
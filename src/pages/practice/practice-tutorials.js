import './practice-styles.scss';
import React, {useEffect, useRef, useState} from 'react';


const Practice = () => {

    const [resourcetype, setResourceType] = useState('posts');
    const [users, setUsers] = useState([]);
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const renderCount = useRef(0);
    const previousUser = useRef();

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


    return (
        <div className='practice-container'>
            <h1>Practice</h1>
            <input ref={previousUser} type={'text'} value={users} onChange={(e) => setUsers(e.target.value)} />
            <button onClick={
                () => onClickHandle('posts')
            }>post</button>
            <button onClick={
                () => onClickHandle('users')
            }>user</button>
            <button onClick={
                () => onClickHandle('comments')
            }>comment</button>
            {/* <button onClick={focusHandle}>FOCUS</button> */}

            <h3>Output: {windowWidth}</h3>
            <h3>Count: {renderCount.current}</h3>
            <h3>Name: {users}</h3>
            <h3>Name: {previousUser.current}</h3>

            
        </div>
    )
}

export default Practice;
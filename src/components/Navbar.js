import { useState } from 'react'


export default function Navbar({setLoggedIn}) {

    // const setLoggedIn = props.setLoggedIn;

    const [name, setName] = useState('login');
    const [logout,setLogout] = useState('')

    const logedOut = () =>{
        setName('login')
        setLoggedIn(false)
        setLogout ('')
    }


    const handleClick = () => {
        setName('Julia')
        setLoggedIn(true)
        setLogout ('Log out')
    }

    return (
        <div className = "nav">
            <h3>Bästa bok tips</h3>
            <ul>
                <li><button onClick = {handleClick}>{name}</button></li>
                {/* <li><button onClick = {loginTwo}>Show books</button></li> */}
                <li><button onClick = {logedOut}>{logout}</button></li>
            </ul>
        </div>
    )
}

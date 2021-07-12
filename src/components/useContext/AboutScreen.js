import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);

    const handleClick = () => {
        setUser({}) // vas a alterar el estado a un objeto vacio
    }

    return (
        <div>
            <h1>AboutScreen </h1>
            <hr />

            <pre>
                {/* {JSON.stringify(user, null, 3)} */}
                {JSON.stringify(user)}
            </pre>

            <button className="btn btn-warning" onClick={handleClick}>
                Logout
            </button>
        </div>
    )
}

export default AboutScreen

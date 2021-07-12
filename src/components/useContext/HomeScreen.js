import React, { useContext } from 'react'

// importams el contexto
import { UserContext } from './UserContext'


const HomeScreen = () => {

    const { user } = useContext(UserContext);

    console.log(user);
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />

            <pre>
                {/* {JSON.stringify(user, null, 3)} */}
                {JSON.stringify(user)}
            </pre>
        </div>
    )
}

export default HomeScreen

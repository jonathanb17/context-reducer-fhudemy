import React, { useState } from 'react'
import AppRouter from './AppRouter'

// este es un componenete como tal ,es un contexto
import { UserContext } from './UserContext'

const MainApp = () => {

    // const user = {
    //     id: 1234,
    //     name: 'jonathan',
    //     email: 'jonathan@gmail.com'
    // }

    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{ user, setUser, temporal: 1234 }}>
            <AppRouter />
        </UserContext.Provider>
    )
}

export default MainApp

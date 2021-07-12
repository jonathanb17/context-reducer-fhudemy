import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const LoginScreen = () => {

    // 1- obtener la referencia al userContext
    // 1- llamo al useContext el hook
    //2 - le paso el userContext que creamos ,el contexto que creamos

    //lo que traigo es el setUser
    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            {/*Este es el objeto que estoy estableciendo en el estado */}
            <button className="btn btn-primary"
                onClick={() => setUser({ id: 1234, name: 'jonathan' })}  //estaes la informacion que voy a poneren el estado
            >Login</button>
        </div>
    )
}

export default LoginScreen

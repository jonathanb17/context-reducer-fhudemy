import React, { useEffect, useReducer } from 'react'
import TodoReducer from './TodoReducer';
import './Styles.css';
// import { useForm } from './useForm';
import { useState } from 'react';



// const initialState =
//     [
//         {
//             id: new Date().getTime(),
//             desc: 'Aprender React',
//             done: false
//         }
//     ];

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [
    //     {
    //         id: new Date().getTime(),
    //         desc: 'Aprender React',
    //         done: false
    //     }
    // ];
}


const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer, [], init);

    //  cuando lo guardes
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleDelete = (todoId) => {
        console.log(todoId);
        // crear la accion
        const action = {
            type: 'delete',
            payload: todoId
        }
        //hacer el dispach

        dispatch(action);
    }

    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle',
            payload: todoId
        }

        dispatch(action)
    }


    //const [formValues, handleInputChange] = useForm({ description: '' }); // aqui aria el databinding etc etc

    const [valor, setValor] = useState();

    // console.log(formValues);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (valor.trim().length <= 1) {
            return;
        }

        // if (valor === 'undefined' || valor.trim().length <= 1) {
        //     return;
        // }


        setValor("")
        const newTodo = {

            id: new Date().getTime(),
            desc: valor,
            done: false
        };

        // ahora nesecito la accion para mandarle al reducer

        const action = {
            type: 'add', // esto es lo que vas arecvir en el switch(action.type)
            payload: newTodo // el payload va ser mi nuev-todo
        }

        //  como hago para mandar esta accion a mi REDUCER?

        dispatch(action)
    }



    return (
        <div>
            <h1>TodoApp({todos.length})</h1>
            <hr />


            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p
                                        className={`${todo.done && 'complete'}`} // si todo.done es true mstra la clase complete d css
                                        onClick={() => handleToggle(todo.id)}
                                    >{i + 1}.{todo.desc}</p>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(todo.id)}
                                    >Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>agregar todo</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Aprender..."
                            autoComplete="off"
                            className="form-control"
                            name="valor"
                            value={valor}
                            onChange={e => setValor(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 form-control">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoApp

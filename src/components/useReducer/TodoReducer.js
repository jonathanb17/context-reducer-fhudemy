// import React from 'react'
// al state lo voy a manejar como un arraglo []
//  sino tengo un state inicial que sea un arreglo vacio
/**
 * cada ves que se llame mi todoreducer ,hasta ahora no hay ninguna accion programada
 * lo que hace es regresarme el mismoe stado que tenemos
 */


/*
    Agregar  una nueva tarea va a pasar pr el reducer y el reducer es quien deve manipular ese estado
    para de es amanera agregar un nuevo elemento
*/
const TodoReducer = (state = [], action) => {
    //ahora tenemos que establecer el caso cuando el action.type sea 'add'
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        case 'toggle':

            return state.map(todo =>
                (todo.id === action.payload) //si esto es true
                    ? { ...todo, done: !todo.done } // entre llaves
                    : todo
            )


        // return state.map((todo) => {
        //     if (todo.id === action.payload) {
        //         return {
        //             ...todo,
        //             done: !todo.done
        //         }
        //     } else {
        //         return todo;
        //     }
        // })
        default:
            return state;

    }
}

export default TodoReducer

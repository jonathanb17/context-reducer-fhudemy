console.log('hola Mundo')

//  1ro establecemeos el estado inicial
const initialState = [
    {
        id: 1,
        todo: 'Comprar Pan', // esta es la tarea a hacer
        done: false
    }
];

//  2do creamos mi primer reducer
// al reducer se le manda un state 
// las acciones son las que van a modificar el state
// y siempre retornas un state
const todoReducer = (state = initialState, action) => {

    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer();

// creamos un nuevo  to-do a agregar
const newTodo = {
    id: 2,
    todo: 'Comprar leche', // esta es la tarea a hacer
    done: false
}

// lo agrego de esta forma
const action = {
    type: 'agregar',
    payload: newTodo
}

//agrego la nuevo accional reducer
todos = todoReducer(todos, action);

console.log(todos);
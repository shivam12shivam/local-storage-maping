import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},  //function is made here but is used in app.jsx
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {  // we made todocontext a global variable so that we can pass it in nested loops easily
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
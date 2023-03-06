import {createContext, useState, useEffect} from 'react'
import {todos as data} from '../components/todos'

export const TodoContext = createContext()

export function TodoContextProvider(props) {
	const [todos, setTodos] = useState([]);

	function createTodo(todo) {
    	setTodos([...todos, {
	      	title: todo.title,
	      	id: todos.length,
	      	description: todo.description,
    	}]);
  	}

  	function deleteTodo(todoId) {
    	setTodos(todos.filter(todo => todo.id !== todoId))
  	}	

  	useEffect(() => {
    	setTodos(data)
  	}, [])

	return (
		<TodoContext.Provider value={{
			todos,
			deleteTodo,
			createTodo
		}}>
			{props.children}
		</TodoContext.Provider>	
	);
}


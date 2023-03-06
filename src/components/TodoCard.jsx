import {useContext} from 'react'
import {TodoContext} from '../context/TodoContext'

function TodoCard({todo}){

	const {deleteTodo} = useContext(TodoContext)

	return(
  		<div class="card-body">
    		<h5 class="card-title">{todo.title}</h5>
    		<p class="card-text">{todo.description}</p>
    		<button class="btn btn-primary" onClick={() => deleteTodo(todo.id)}>Eliminar</button>
	  	</div>
	);
}

export default TodoCard;
import TodoCard from './TodoCard'
import {useContext} from 'react'
import {TodoContext} from '../context/TodoContext'

function TodoList(){

	const {todos} = useContext(TodoContext);

	if (todos.length === 0){
		return <h1>No Hay Tareas</h1>
	}

	return (
		<div>
			{todos.map((todo) => (
				<div class="card">
					<TodoCard key={todo.id} todo={todo}/>
				</div>
			))}
		</div>
	)
}

export default TodoList;

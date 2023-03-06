import {useState, useContext} from 'react'
import {TodoContext} from '../context/TodoContext'

function TodoForm(){

	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const {createTodo} = useContext(TodoContext)

	const handleSubmit = (e) => {
		e.preventDefault();
		createTodo({
			title,
			description
		});
		setTitle('')
		setDescription('')
	}

	return (
		<form onSubmit = {handleSubmit}>
			<input placeholder="Añadir tarea" onChange = {(e) => setTitle(e.target.value)} value={title} autoFocus/>
			<textarea placeholder="Añadir descripcion" onChange = {(e) => setDescription(e.target.value)} value={description}></textarea>
			<button>Guardar</button>
			
		</form>
	);
}

export default TodoForm;
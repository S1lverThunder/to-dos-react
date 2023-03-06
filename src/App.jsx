import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {

  return(
    <>

      <TodoForm />
      <div class="card"> <TodoList /> </div>

    </>
  )
}

export default App
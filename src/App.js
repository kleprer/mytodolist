import React, {useEffect} from 'react'
import {useState} from 'react'
import TodoList from './todo/TodoList'
import Context from './context'
import AddItem from './todo/AddItem'
import FilterTodo from './todo/FilterTodo'

function App() {
  
  const [todos, setTodos] =useState([
    {id: 1, completed: false, title: 'Выспаться'},
    {id: 2, completed: false, title: 'Не сойти с ума'},
    {id: 3, completed: false, title: 'Дожить до нового года'}
  ])
  
  const [filteredTodos, setFilteredTodos] = React.useState([])
  const [status, setStatus] = useState('all')

  function byName(a,b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()
    ) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()
    ) return 1;
    return 0;
  }

  function byId(a,b) {
    return parseInt(a.id) - parseInt(b.id);
  }
  const todosList = []; 
    for (let i=0; i < todos.length; i++) { 
      todosList.push(todos[i])
    }; 

  console.log(todosList)
  const filterHandler = () => {
    todosList.sort(byId);
    switch(status) {
      
      case 'abc':
        setFilteredTodos(todos.sort(byName));
        break;
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true).sort(byId));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false).sort(byId));
        break;
        default:
          setFilteredTodos(todosList);
          break;
    }
   
  }
  useEffect(() => {
    filterHandler();
  }, [todos, status])
  

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id ===id) {
          todo.completed =!todo.completed
        }
        return todo
      })
    ) 
  }
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id!==id))

  }
  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return ( 
    <Context.Provider value={{removeTodo:removeTodo}}>
      <div className = 'wrapper'>
        <h1>Список дел</h1>
        <AddItem onCreate={addTodo}  setStatus={status}/>
        <FilterTodo setStatus={setStatus}/>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} filteredTodos={filteredTodos}/> : <p>Нет дел</p>}
        
      </div>
      
    </Context.Provider>
    
  );
}

export default App;

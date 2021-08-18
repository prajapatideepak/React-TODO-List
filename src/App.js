import React from 'react'
import './App.css';

function Navbar(){
  return (
    <div className='nav'>
      <h1> My Shoping List </h1>
    </div>
  )
}

function TodoForm({todolist , SettodoList}){
  const [todo , setTodo] = React.useState('')
  const [todoData , setTodoData] = React.useState({
    todo:'',
    id:'',
  })
  function handleclick(){
    if(todoData.todo === '') return
    console.log('clicked')
    console.log(todo)
   

    SettodoList([...todolist,todoData])
  }
  console.log(todo)
  function handleChange(e){
    setTodo(e.target.value)
  
  }
  React.useEffect(()=>{
    setTodoData({
      todo:todo,
      id:Math.floor(Math.random()*100),
      complete:false

    })
  },[todo])
  return (
    <div className="todoForm">
        <input value={todo} onChange={handleChange} type="text" placeholder="Enter Item" />
        <button onClick={handleclick} > Submit </button>
    </div>
  )
}

function DisplayList({todolist ,SettodoList}){
  return(
    <div className='shoplist'>
          {
            todolist.map((todos)=>{
               // if(!todos.id) return;
              function handleDelete(e){
                SettodoList(todolist.filter((e)=>{
                  return e.id !== todos.id
                }))
                 // console.log(f)
              }
              function handleComplete(){
              SettodoList(todolist.map((lolu)=>{
                  if(lolu.id === todos.id){
                    return {...lolu , complete:!todos.complete}
                  }
                  return lolu ; 
              }))
              }
              return(

                <div className='todo' key={todos.id} > 
                    <li key={todos.id} name='todo' className={todos.complete ? 'strike' : ''}>{todos.todo}</li>
                    <button className='delete' onClick={handleDelete}> Delete</button>
                    <button className='com' onClick={handleComplete}> complete</button>

                </div>
              )
            })
          }
    </div>
  )
}
function App() {
  
  const [todoList , SettodoList] = React.useState([])
  console.log(todoList)

  return (
  <>
   <Navbar />
  <TodoForm todolist={todoList} SettodoList={SettodoList}  />
    <DisplayList todolist={todoList} SettodoList={SettodoList} />
    </>
  );
    
}

export default App;

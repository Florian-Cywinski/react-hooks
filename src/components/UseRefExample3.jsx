import { useState } from 'react'
import Todo from './Todo' // To bring in the <Todo /> component 

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true)

  return (
    <div>
      {/* To unmount the <Todo /> component */}
      {showTodo && <Todo />}  {/* To show the component <Todo /> when showTodo is true */}
      <button className='btn btn-primary' onClick={() => setShowTodo(!showTodo)}>Toggle Todo</button>   {/* To toggle the <Todo /> component on click */}
    </div>
  )
}

export default UseRefExample3

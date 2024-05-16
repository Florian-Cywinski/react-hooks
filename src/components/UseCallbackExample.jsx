import React, { useState, useCallback } from 'react'

function UseCallbackExample() {
  const [tasks, setTasks] = useState([])

  const addTask = useCallback(() => {   // To add a task (string 'Some Task') to the tasks array (prevState)
    setTasks((prevState) => [...prevState, 'Some Task'])
  }, [setTasks])  // [setTasks] is the dependency

  return (
    <div>
      <Button addTask={addTask} />  {/* addTask={addTask} to add the property to the Button */}
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  )
}

// To create a button component
const Button = React.memo(({ addTask }) => {    // React.memo to memorize the whole Button component - { addTask } to pass in this function to the component
  console.log('Button rendered')
  return (
    <div>
      <button className='btn btn-primary' onClick={addTask}>Add Task</button>
    </div>
  )
})

export default UseCallbackExample

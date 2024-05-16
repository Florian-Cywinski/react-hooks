import useLocalStorage from '../hooks/useLocalStorage'

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage('task', '')     // To store the typed in text (input field) - useLocalStorage is the custom hook - ('task', '') = (key, initialValue)
  // Another example how the customized hook can used with an array of tasks objects
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  const onSubmit = (e) => {
    e.preventDefault()

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    }

    setTasks([...tasks, taskObj])
  }

  return (
    <>
      <form onSubmit={onSubmit} className='w-50'>
        <div className='mb-3'>
          <label className='form-label'>Task</label>
          <input
            className='form-control'
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>

      <hr />

      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </>
  )
}

export default CustomHookExample2

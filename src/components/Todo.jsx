// To have a component to make a fetch request that can be unmounted before the response comes back
import { useState, useEffect, useRef } from 'react'

function Todo() {
  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState({})

  const isMounted = useRef(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data)
            setLoading(false)
          }
        }, 3000)
      })

    // Runs when component is unmounted
    return () => {
      isMounted.current = false
    }
  }, [isMounted])

  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
}

export default Todo

// Dmitri Alman on Jun 12, 2023

// Hello Brad, Please fix the lesson because this example does not show a memory leak. Thank you
// REPLY Will Adams on Jun 12, 2023

// Hi Dmitri. You are most likely using React 18, in which they removed the warning. Taken from the React 18 changelog:-
// No warning about setState on unmounted components: Previously, React warned about memory leaks when you call setState on an unmounted component. This warning was added for subscriptions, but people primarily run into it in scenarios where setting state is fine, and workarounds make the code worse. We've removed this warning.
// There will still be memory leaks though, you just won't get warnings about it.

// The leak from React trying to update state in an unmounted component isn't really a big deal.
// But usually this occurs when you forget to clean up some async operation, like subscribing to some event, such as a Firebase authStateChange. Then you have a situation where your component unmounts but you have the subscription or async operation still running in the background, which would leave you with bigger memory leaks than trying to update state in an unmounted component.
// So I would say leave it and focus on cleaning up any async operation instead in your useEffect return function, like cancelling a fetch request or unsubscribing from an event etc.

// So the real solution would be to cancel the fetch request, not just check that the component is unmounted.

// You can use an AbortController to cancel the fetch request.

// Which would look something like...

// function Todo() {
//   const [todo, setTodo] = useState(null)
  
//   useEffect(() => {
//   const controller = new AbortController()
//   fetch('https://jsonplaceholder.typicode.com/todos/1', {   // It's just a typicode JSON placeholder fake REST API to work with - in this case it gives a single todo back
//   signal: controller.signal,
//   })
//   .then((res) => res.json())
//   .then(setTodo)
//   // .then((data) => {
//   //   setTimeout(() => {
//   //     setTodo(data)
//   //   }, 3000)
//   // })
  
//   return () => {
//   console.log('Unmounted Todo')
//   controller.abort()
//   }
//   }, [])
  
//   return !todo ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
  
//   }
  
//   export default Todo

// You also don't really need a loading boolean here as you can infer loading from presence or absence of a todo.

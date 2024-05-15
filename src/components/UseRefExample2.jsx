import { useState, useEffect, useRef } from 'react'

function UseRefExample2() {
  const [name, setName] = useState('')    // To save the typed in value as state

  const renders = useRef(1)         // 1 is the default value for renders
  const prevName = useRef('')       // '' is the default value for renders

  useEffect(() => {   // everytime the DOM renders (after each letter typed in / deleted ([name])) - to change / update both useRef's 
    renders.current++               // renders.current = renders.current + 1 - for every letter typed in the state changes and this results in increasing renders by one
    prevName.current = name         // To store the prev. name (input value) in prevName.current
  }, [name])

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='form-control mb-3'/>
    </div>
  )
}

export default UseRefExample2

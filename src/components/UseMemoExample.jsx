import { useState, useEffect, useRef, useMemo } from 'react'    // To bring in these React Hooks

function useMemoExample() {
  const [number, setNumber] = useState(1)   // The basis (to calc. a root, e.g. sqrt(2))
  const [inc, setInc] = useState(0)         // Increment

  // const sqrt = getSqrt(number)
  const sqrt = useMemo(() => getSqrt(number), [number])   // To memorize the return value -> this way the getSqrt function runs only when number has chaged - [number] is the dependencies array

  const renders = useRef(1)   // To count how many times the page was rendered

  useEffect(() => {
    renders.current = renders.current + 1   // To increment renders
  })

  const onClick = () => {
    setInc((prevState) => {       // prevState in this case is a number - the initial value is 0
      console.log(prevState + 1)
      return prevState + 1
    })
  }

  return (
    <div>
      <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} className='form-control w-25'/>
      <h2 className='my-3'>The sqrt of {number} is {sqrt}</h2>
      <button onClick={onClick} className='btn btn-primary'>Re Render</button>
      <h3>Renders: {renders.current}</h3>
    </div>
  )
}

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {  // To mime a computationally intensive function (Expensive Function Call)
    console.log(i)
  }

  console.log('Expensive Function Called!')
  return Math.sqrt(n)   // To finally calc. the sqrt
}

export default useMemoExample

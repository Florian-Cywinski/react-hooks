import { useRef } from 'react'

function UseRefExample1() {
  const inputRef = useRef()   // useRef() gives an object back with one property called current -> in current is the DOM element
  const paraRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)   // inputRef.current.value to get the typed in value
    inputRef.current.value = 'Hello'  // To set the value of the input to 'Hello' - It's just an example what's possible
    inputRef.current.style.backgroundColor = 'red'  // To set the bg color of the input field to red after submission - It's just an example what's possible
    paraRef.current.innerText = 'Goodbye'   // To change the value from Hello to Goodbye
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' ref={inputRef} id='name' className='form-control mb-2'/>
        <button type='submit' className='btn btn-primary'>Submit</button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>Hello</p>   {/* onClick={() => inputRef.current.focus()} will focus on the input field on click on the paragraph - Hello will change to Goodbye - see in the onSubmit function */}
      </form>
    </div>
  )
}

export default UseRefExample1

import UseRefExample1 from './components/UseRefExample1'
import UseRefExample2 from './components/UseRefExample2'
import UseRefExample3 from './components/UseRefExample3'
import UseMemoExample from './components/UseMemoExample'


function App() {
  return (
    <div className='container mt-5'>
      <UseRefExample1 />
      <br /><hr />
      <UseRefExample2 />
      <br /><hr />
      <UseRefExample3 />
      <br /><hr />
      <UseMemoExample />
    </div>
  )
}

export default App

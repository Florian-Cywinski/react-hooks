import UseRefExample1 from './components/UseRefExample1'
import UseRefExample2 from './components/UseRefExample2'
import UseRefExample3 from './components/UseRefExample3'
import UseMemoExample from './components/UseMemoExample'
import UseCallbackExample from './components/UseCallbackExample'
import CustomHookExample1 from './components/CustomHookExample1'


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
      <br /><hr />
      <UseCallbackExample />
      <br /><hr />
      <CustomHookExample1 />
    </div>
  )
}

export default App

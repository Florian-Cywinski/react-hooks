import useFetch from '../hooks/useFetch'

function CustomHookExample1() {
  const { data, loading } = useFetch(   // { data, loading } destructured output from useFetch()
    'https://jsonplaceholder.typicode.com/posts', {}) // The custom hook useFetch has options to pass in - in this case the options aren't needed {}

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  )
}

export default CustomHookExample1

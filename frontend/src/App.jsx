import Welcome from './components/welcome'

function App() {
  const message1 = 'This is a text message.'
  var num=8;
  const isloggedIn = true;
  //ternary operator

  return (
    <>
      <h1>Hello, World!</h1>
      <h2>Welcome</h2>
      <p>{message1}</p>
      <p>{num}</p>
      <p>{isloggedIn ? 'You are logged in.' : 'Please log in.'}</p>
      <Welcome  
      name='partha'
      age={18}
      isloggedIn={true}
      />
      
    </>
  )
}

export default App

function welcome({name, age, isloggedIn}) { 

    return (
        <>
        <h1>you are in cse dept</h1>
        <p>Hello, Your {name}!</p>
        <p>Your age is {age}.</p>
        <p>{isloggedIn ? 'You are logged in.' : 'Please log in.'}</p>

        </>
    )
}
export default welcome
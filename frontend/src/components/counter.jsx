import{useState} from 'react'

function Counter(){
    const [count,setCount]=useState(0);
    //we cant initialize count with a string, it has to be a number because we are doing arithmetic operations on it, if we initialize it with a string, it will throw an error, so we have to initialize it with a number.
    //inita o useState with 0, count is the current state and setCount is the function to update the state
    return(
        <>
        <h2>Counter</h2>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}

export default Counter;
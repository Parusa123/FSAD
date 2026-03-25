import{useState} from 'react'

function Counter(){
    const [count,setCount]=useState(0);
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
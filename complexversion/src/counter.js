import { useState } from 'react';


const Counter = (props) => {
   let [count, setCount ] = useState(0);
   
   const reset = () =>{
    setCount(0)
  }
  const adding = () =>{
    setCount(count+1)
  }

    return (
      <div className = "littleApp" >
        <h2> Contatore </h2>
        <button type="button" id="increment"  className="btn btn-primary" onClick = { adding } > Increment </button>
        <button type="button" id="reset" className="btn btn-danger" onClick = { reset }> Reset </button>
		<div className="Counter" >Counter: <h4 style ={{color: count === 0 ? "black" : "red"}}>{count}</h4> </div>
	  </div>
    );
  }

  export default Counter

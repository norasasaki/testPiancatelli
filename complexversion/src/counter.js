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
          <div className="Counter" style ={{color: count === 0 ? "black" : "red"}}> {count} </div>
          <button type="button"   className="btn btn-primary"  onClick = { adding }> Increment </button>
          <button type="button" className="btn btn-danger" onClick = { reset }> Reset </button>
      </div>
    );
  }

  export default Counter

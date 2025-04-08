import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByamount, reset, selectedCounter } from './CouterSlice'

const CounterPage = () => {

    const count=useSelector(selectedCounter);
    const dispatch=useDispatch();
    const [increments,setIncrements]=useState(0);

    const addvalue=Number(increments) || 0;

      const ResetButton=()=>{
        setIncrements(0);
        dispatch(reset())
      }

  return (
    
    <div>
            <button onClick={()=>dispatch(increment())}>+</button>
        {count}

    <button onClick={()=>dispatch(decrement())}>-</button>

    <input type='text' value={increments} onChange={(e)=>setIncrements(e.target.value)} />

    <button onClick={()=>dispatch(incrementByamount(addvalue))}>Add Amount</button>
    <button onClick={ResetButton}>Reset Button</button>

    </div>
  )
}

export default CounterPage
import { useReducer } from "react";

function ReducerEg(){
    const reducer = (state, action) => {
        switch (action.type) {
          case 'increment':
            // console.log("Add Rec") 
            return  action.payload + 1 ; 
          case 'decrement': 
            // console.log("Sub Rec")
            return action.payload - 1 ; 
          default: return state;
        }
      };
      
      let initialState = 0;
      
      const [state, dispatch] = useReducer(reducer, initialState);
      // dispatch({ type: 'decrement', payload : initialState })
      function add12(){
        console.log("add "+ state )
        dispatch({ type: 'increment' ,payload : state})
    }
      function sub12(){
          console.log("add "+ state )
          dispatch({ type: 'decrement' ,payload : state})
      }
      
    return(
        <>
        <h1>{state}</h1>
        <button onClick={add12}>Add12</button>
        <button onClick={sub12}>sub12</button>
        </>
    )
}

export default ReducerEg
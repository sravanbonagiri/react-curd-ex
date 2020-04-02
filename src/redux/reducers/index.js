import { createStore } from 'redux'

const initialState = {
    history: [
      {
        users: {}
      }
    ]
  }
  
  const reducer = (state = initialState, action )  => {
    console.log(state);
    
    return state
  }

  export default reducer;

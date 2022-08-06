const counterReducer = (state,action) =>{
  if(action==="add"){
    return state+1;
  }
  else if(action === "sub"){
    return state-1;
  }

}

export {counterReducer}

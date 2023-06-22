import './App.css';
import {createStore} from "redux";
import {Provider, connect, useSelector, useDispatch, createStoreHook} from "react-redux";
import { Component } from 'react';

// FIRST REDUCER
const countReducer = function(state=0, action) {
  switch(action.type){
    
    case "ADD": return state+1;

    case "SUBTRACT": return state-1;

    default: return state;
  }
}

// CREATING STORE
const store = createStore(countReducer);

//MAP STATE TO PROPS
const mapStateToProps = state => {
  return{
    count:state
  }
}

// MAP DISPATCH TO PROPS
const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch({type:"ADD"}),
    subtract: () => dispatch({type:"SUBTRACT"})
  }
}

const Comp = ({count, add, subtract}) => {
  return(
    <>
    <h1>Count = {count}</h1>
    <button onClick={add}>ADD</button>
    <button onClick={subtract}>SUBTRACT</button>
    </>
  )
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp)
function App() {

  return (
    <Provider store={store}>
    <Container />
    </Provider>
  );
}

export default App;

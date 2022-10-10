
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './Action/counter'
import {Sig} from './Action/Sig'


function App() {
 
  const counter=useSelector((state)=>state.counter)
  const signin=useSelector((state)=>state.signin)
 
  const dispatch=useDispatch();
  

  
  
  
  const inc=()=>{
    dispatch(increment())
  }
  const dec=()=>{
    dispatch(decrement())
  }
   const sign=()=>{
    dispatch(Sig())
  }
  
  return (
   <div>
<h1>Redux Counter App</h1>
<h2>counter:{counter}</h2>
<button onClick={inc}>Increment</button>
<button onClick={dec}>Decrement</button>

<h2>signin:{signin}</h2>
<button onClick={sign}>new</button>


   </div>
  );
}

export default App;

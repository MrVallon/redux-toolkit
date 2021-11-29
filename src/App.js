import { useSelector, useDispatch } from 'react-redux';
import { counterSelector, incremented, decremented } from './store/slices/counterSlices';
import './App.css';

const App = () => {
  const count = useSelector(counterSelector.getCounter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(incremented())}>Increment</button>
      <button onClick={() => dispatch(decremented())}>Decrement</button>
    </div>
  );
}

export default App;

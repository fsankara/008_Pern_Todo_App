import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
import { Fragment } from 'react';
import './App.css';


function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
      
    </Fragment>
  );
}

export default App;

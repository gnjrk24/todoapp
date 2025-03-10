/*import logo from './logo.svg';
import './App.css';

function App() {
  const text = "こんにちは"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

/*import React from 'react'

const App = () => {
    return (
        <h1>Hello, World!</h1>
    )
}

export default App;*/


import React from 'react'
import Form from './Form'
import List from './List'


const App = () => {
  const todos = [
    {
        content: '課題をする'
    },
    {
        content: '洗濯をする'
    },
    {
        content: '電話をする'
    },
    {
        content: '料理する'
    }
  ]

  return (
      <React.Fragment>
          <h1>Todo App</h1>
          <Form />
          <List todos={todos}/>
      </React.Fragment>
  )
}

export default App;

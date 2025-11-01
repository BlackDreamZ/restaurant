import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {restaurants} from './mock/mock.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {
            React.createElement('div', {}, React.createElement('h1', {}, 'Yummy food'),
                React.createElement('h3', {}, 'Menu'),
                React.createElement('ul', {},
                    React.createElement('li', null, restaurants[0].name),
                    React.createElement('li', null, restaurants[1].name),
                    React.createElement('li', null, restaurants[2].name),
                    React.createElement('li', null, restaurants[3].name)
                ),
                React.createElement('h3', {}, 'List of review'),
                React.createElement('ul', {},
                    React.createElement('li', null, restaurants[0].reviews[0].text),
                    React.createElement('li', null, restaurants[0].reviews[1].text),
                    React.createElement('li', null, restaurants[1].reviews[0].text),
                    React.createElement('li', null, restaurants[1].reviews[1].text),
                    React.createElement('li', null, restaurants[1].reviews[2].text),
                    React.createElement('li', null, restaurants[2].reviews[0].text),
                    React.createElement('li', null, restaurants[3].reviews[0].text),
                    React.createElement('li', null, restaurants[3].reviews[1].text),
                )

            )
        }
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

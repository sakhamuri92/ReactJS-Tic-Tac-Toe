import './App.css'
import React,{ useState} from 'react'
import Game from './components/Game';
import './index.css'
import BasicTicTacToe from './components/BasicTicTacToe';

function App() {
  const [toggleApp,setToggleApp] = useState(true);
  return (
    <div className="App">
    <button onClick={() => setToggleApp(!toggleApp)}>{ toggleApp ? 'Simple Game': 'Game with steps'}</button>
    <div>
    { toggleApp ? <Game /> : <BasicTicTacToe />}
    </div>
   
    {/* <BasicTicTacToe /> */}
    </div>
  );
}

export default App;

import '../App.css'
import React,{ useState} from 'react'

function BasicTicTacToe() {
  const [board,setBoard] = useState(['','','','','','','','','','']);
  const [playerTurn,setPlayerTurn]  = useState('X');
  const [winner,setWinner] = useState('')
  const squareClicked = (index) =>{
    if(board[index]) return;
    if(winner) return;
    let player_turn = playerTurn;
    let player_board = [...board];
    player_board[index] = player_turn;

    let winning_combinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    
    winning_combinations.forEach((wining_row) => {
      let p1 = wining_row[0];
      let p2 = wining_row[1];
      let p3 = wining_row[2];
        if(player_board[p1] && player_board[p1] === player_board[p2] && player_board[p2] === player_board[p3] && player_board[p3] === player_board[p1]) {
          alert(`Winner: Player  is ${playerTurn}`)
          setWinner(true);
        }
    })
    if(player_turn === 'X') {
      player_turn = 'O'
    } else {
      player_turn = 'X'
    }
    setPlayerTurn(player_turn)
    setBoard(player_board);
    console.log(index,player_turn)
  }
  return (
      <div className="SimpleTicTacToe">
      <div className="inner-container">
        <h1>Tic Tac Toe</h1>
        <table>
          <tr>
            <td onClick={()=>squareClicked(0)}>{board[0]}</td>
            <td onClick={()=>squareClicked(1)}>{board[1]}</td>
            <td onClick={()=>squareClicked(2)}>{board[2]}</td>
          </tr>
          <tr>
            <td onClick={()=>squareClicked(3)}>{board[3]}</td>
            <td onClick={()=>squareClicked(4)}>{board[4]}</td>
            <td onClick={()=>squareClicked(5)}>{board[5]}</td>
          </tr>
          <tr>
            <td onClick={()=>squareClicked(6)}>{board[6]}</td>
            <td onClick={()=>squareClicked(7)}>{board[7]}</td>
            <td onClick={()=>squareClicked(8)}>{board[8]}</td>
          </tr>
        </table>
      </div>
      <button onClick = {() => { setPlayerTurn('X');setBoard(['','','','','','','','','',''])}}>ResetBoard</button>
    </div>
  );
}

export default BasicTicTacToe;

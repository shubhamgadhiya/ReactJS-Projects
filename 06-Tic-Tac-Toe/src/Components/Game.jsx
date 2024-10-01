import { useState } from "react";

 function Game() {
 
     const [board, setBoard] = useState(Array(9).fill(null));
          
     console.log('board',board )
     const [xTurn, setXTurn] = useState(true);
     const [winner, setWinner] = useState(null);
 
   const renderSquare = (index) => {
     return <button className='square' onClick={() => handleClick(index)}>{board[index]}</button>;
   };
   const handleClick = (index) => {
    if(board[index] !=null){
        return;
    }
     const newboard = [...board]
     newboard[index] = xTurn ? "X" : "O";
     setBoard(newboard);
     setXTurn(!xTurn);
     const winnercombination = checkWinner(newboard);
     if(winnercombination){
        setWinner(newboard[winnercombination[0]])
     }
   }
   const checkWinner = (newboard) => {
    const combination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    for(let i=0; i<combination.length; i++){
        const[a,b,c] = combination[i];
        if(board[a] && board[a] === board[b] && board[b] === board[c]){
            return combination[i]
        }
        }
        return null;
   }

   const handleReset = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
   }
   
   return (
    <>
     <div className="board">
       <div className="board-row">
         {renderSquare(0)}
         {renderSquare(1)}
         {renderSquare(2)}
       </div>
       <div className="board-row">
         {renderSquare(3)}
         {renderSquare(4)}
         {renderSquare(5)}
       </div>
       <div className="board-row">
         {renderSquare(6)}
         {renderSquare(7)}
         {renderSquare(8)}
       </div>
     </div>
     <button onClick={handleReset}>Reset</button>
     {winner && <div>{winner} is winner of the game</div>}
     </>
   );
 }
 
 export default Game;
 
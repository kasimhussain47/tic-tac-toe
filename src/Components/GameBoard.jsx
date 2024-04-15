import React from "react";

// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];
const GameBoard = ({ onSelectSquare, board }) => {
  // let gameBoard = initialGameBoard;
  // console.log(turns)
  // for(const turn of turns){
  //   const {square,player} = turn;
  //   const {row,col} = square;
  //   gameBoard[row][col] =player;
  // }

  // const [gameBoard,setGameBoard]=useState(initialGameBoard);

  // function handleSelect(colIndex,rowIndex) {
  //   console.log(activePlayerSymbol,colIndex,rowIndex,"kk")
  //     setGameBoard((preGameBoard) => {
  //         const updatedBoard = [...preGameBoard.map(initialval => [...initialval])];
  //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //         console.log(updatedBoard)
  //         return updatedBoard;
  //     });
  //     onSelectSquare();
  // }

    return (
      <>
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol id="game-board1">
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button id="button1" onClick={() => onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !== null}>
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
        </>
    );
};

export default GameBoard;

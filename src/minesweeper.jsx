import React, { useState, useEffect, useCallback } from 'react';
import './css/minesweeper.css';
const BOARD_SIZE = 10;
const MINES_COUNT = 20;

const generateBoard = () => {
    // Generate an empty board
    return Array.from({ length: BOARD_SIZE }, () =>
        Array.from({ length: BOARD_SIZE }, () => ({
            revealed: false,
            mine: false,
            flag: false,
            adjacentMines: 0,
        }))
    );
};

const placeMines = (board, firstClickRow, firstClickCol) => {
    let minesPlaced = 0;
    while (minesPlaced < MINES_COUNT) {
        const row = Math.floor(Math.random() * BOARD_SIZE);
        const col = Math.floor(Math.random() * BOARD_SIZE);
        const isSafeZone = Math.abs(firstClickRow - row) <= 1 && Math.abs(firstClickCol - col) <= 1;

        if (!board[row][col].mine && !isSafeZone) {
            board[row][col].mine = true;
            minesPlaced++;
        }
    }

    // After placing mines, calculate adjacent mines for the entire board
    for (let r = 0; r < BOARD_SIZE; r++) {
        for (let c = 0; c < BOARD_SIZE; c++) {
            if (board[r][c].mine) continue;
            let mines = 0;
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    if (
                        r + dr >= 0 && r + dr < BOARD_SIZE &&
                        c + dc >= 0 && c + dc < BOARD_SIZE &&
                        board[r + dr][c + dc].mine
                    ) {
                        mines++;
                    }
                }
            }
            board[r][c].adjacentMines = mines;
        }
    }
};

const checkWin = (board) => {
    // Win condition: All non-mine cells are revealed
    return board.every(row => row.every(cell => cell.mine || (cell.revealed && !cell.mine)));
};

const Minesweeper = () => {
    const [board, setBoard] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [time, setTime] = useState(0);
    const [timerId, setTimerId] = useState(null);

    useEffect(() => {
        resetGame();
    }, []);

    const resetGame = () => {
        setBoard(generateBoard());
        setGameOver(false);
        setTime(0);
        if (timerId) clearInterval(timerId);
        const newTimerId = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
        setTimerId(newTimerId);
    };

    const revealCell = useCallback((row, col) => {
        if (gameOver || board[row][col].revealed || board[row][col].flag) return;
    
        let newBoard = [...board];
    
        if (newBoard.every(row => row.every(cell => !cell.revealed && !cell.mine))) {
            placeMines(newBoard, row, col);
        }
    
        if (newBoard[row][col].mine) {
            revealMines(newBoard);
            setGameOver(true);
            clearInterval(timerId);
        } else {
            recursiveReveal(newBoard, row, col);
            if (checkWin(newBoard)) {
                setGameOver(true); // Mark the game as over (won)
                clearInterval(timerId); // Stop the timer
                alert(`You win with a time of ${time} seconds!`);
            }
        }
    
        setBoard(newBoard);
    }, [board, gameOver, timerId]);
    
    

    const recursiveReveal = (board, row, col) => {
        if (row < 0 || row >= BOARD_SIZE || col < 0 || col >= BOARD_SIZE || board[row][col].revealed || board[row][col].flag) return;
        board[row][col].revealed = true;
        if (board[row][col].adjacentMines === 0) {
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    recursiveReveal(board, row + dr, col + dc);
                }
            }
        }
    };

    const revealMines = (board) => {
        board.forEach(row => row.forEach(cell => {
            if (cell.mine) cell.revealed = true;
        }));
    };

    const handleRightClick = (row, col, e) => {
        e.preventDefault();
        if (gameOver || board[row][col].revealed) return;
        const newBoard = [...board];
        newBoard[row][col].flag = !newBoard[row][col].flag;
        setBoard(newBoard);
    };

    const minesLeft = MINES_COUNT - board.flat().filter(cell => cell.flag).length;

    return (
        <div className="minesweeper-container">
            <div className="minesweeper-info">
                <span className='mines-left'>Mines left: {minesLeft}</span>
                <button onClick={resetGame} className="reset-button">{gameOver ? '💀' : '😊'}</button>
                <span className='timer'>Time: {time}</span>
            </div>
            <div className="minesweeper">
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="minesweeper-row">
                        {row.map((cell, colIndex) => (
                            <div
                                key={colIndex}
                                className={`minesweeper-cell ${cell.revealed ? 'revealed' : ''} ${cell.flag ? 'flag' : ''}`}
                                onClick={() => revealCell(rowIndex, colIndex)}
                                onContextMenu={(e) => handleRightClick(rowIndex, colIndex, e)}
                            >
                                {cell.revealed ? (
                                    cell.mine ? (
                                        <span className="bomb">💣</span>
                                    ) : cell.adjacentMines > 0 ? (
                                        <span className={`number-${cell.adjacentMines}`}>{cell.adjacentMines}</span>
                                    ) : ''
                                ) : cell.flag ? (
                                    <span className="flag">🚩</span>
                                ) : ''}
                            </div>
                        ))}
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Minesweeper;

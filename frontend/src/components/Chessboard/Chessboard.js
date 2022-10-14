import styles from './Chessboard.module.css';
import Tile from './Tile';
import initialBoardState from './pieces/piecesLoader.js';
import {useRef, useState} from 'react';


const verticalAxis = ['1','2','3','4','5','6','7','8'];
const horizontalAxis = ['a','b','c','d','e','f','g','h'];


export default function Chessboard(){
    
    const [pieces, setPieces] = useState(initialBoardState);
    const [activePiece,setActivePiece] = useState(null);

    //gridX and gridY are the position of the currently grabed chess peice
    //originally the default position was 0 but I changed it to null, so far there have been no issues
    const [gridX,setGridX] = useState(null);
    const [gridY,setGridY] = useState(null);

    let board = [];
    const chessBoardRef = useRef(null);

    function grab(e){
    
        const tileEl = e.target
        const chessboard = chessBoardRef.current;
    
        if(tileEl.classList.contains("Tile_chessPiece__jEfn6") && chessboard){
    
            setGridX(Math.floor((e.clientX - chessboard.offsetLeft) / 100));
            setGridY(Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 800) / 100)));

            const x = e.clientX - 50;
            const y = e.clientY - 50;
    
            tileEl.style.position = "absolute";
            tileEl.style.left = `${x}px`;
            tileEl.style.top = `${y}px`;
    
            setActivePiece(tileEl)

        }
        
    }
    
    function move(e){
    
        const chessboard = chessBoardRef.current;

        if(activePiece && chessboard){
    
            const minX = chessboard.offsetLeft - 30;
            const minY = chessboard.offsetTop - 25;

            const maxX = (chessboard.offsetLeft + chessboard.clientWidth) - 74;
            const maxY = (chessboard.offsetTop + chessboard.clientHeight) - 78;

            const x = e.clientX - 50;
            const y = e.clientY - 50;
    
            activePiece.style.position = "absolute";
            activePiece.style.left = `${x}px`;
            activePiece.style.top = `${y}px`;

            if(x < minX) activePiece.style.left = `${minX}px`
            else if(x > maxX) activePiece.style.left = `${maxX}px`
            
            if(y < minY) activePiece.style.top = `${minY}px`
            else if(y > maxY) activePiece.style.top = `${maxY}px`
            
        }
    
    }
    
    function drop(e){
        
        const chessboard = chessBoardRef.current;
        
        if(activePiece && chessboard){

            const x = Math.floor((e.clientX - chessboard.offsetLeft) / 100);
            const y = Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 800) / 100));
            
            setPieces(p => {
                
                return p.map(p => {
                        
                    if(p.x === gridX && p.y === gridY){

                        p.x = x;
                        p.y = y;

                    }

                    return p;

                });

            });

            setActivePiece(null)
    
        }
    
    }

    for(let j = verticalAxis.length - 1; j >= 0; j--){
        for(let i = 0; i < horizontalAxis.length; i++){

            const tileCounter = j + i;
            let image = undefined;

            pieces.forEach(p =>{

                if(p.x === i && p.y === j){
                    image = p.image;
                }

            })

            board.push(<Tile key={`${i},${j}`} tileCounter={tileCounter} images={image} />);
            
        }
    }

    return(
    
        <div 
        ref={chessBoardRef} 
        onMouseDown={grab} 
        onMouseMove={move} 
        onMouseUp={drop}  
        id={styles.chessBoard}>

            {board}

        </div>
    
    )

}
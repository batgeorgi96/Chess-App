import styles from './Chessboard.module.css';
import Tile from './Tile';
import peices from './pieces/pieces.js';
import {useRef} from 'react';


const verticalAxis = ['1','2','3','4','5','6','7','8'];
const horizontalAxis = ['a','b','c','d','e','f','g','h'];

export default function Chessboard(){
    
    let board = [];
    let grabedPiece = null;
    const chessBoardRef = useRef(null);

    function grab(e){
    
        const tileEl = e.target
    
        if(tileEl.classList.contains("Tile_chessPiece__jEfn6")){
    
            const x = e.clientX - 50;
            const y = e.clientY - 50;
    
            tileEl.style.position = "absolute";
            tileEl.style.left = `${x}px`;
            tileEl.style.top = `${y}px`;
    
            grabedPiece = tileEl;
    
        }
        
    }
    
    function move(e){
    
        const chessboard = chessBoardRef.current;

        if(grabedPiece && chessboard){
    
            const minX = chessboard.offsetLeft - 30;
            const minY = chessboard.offsetTop - 25;

            const maxX = (chessboard.offsetLeft + chessboard.clientWidth) - 74;
            const maxY = (chessboard.offsetTop + chessboard.clientHeight) - 78;

            const x = e.clientX - 50;
            const y = e.clientY - 50;
    
            grabedPiece.style.position = "absolute";
            grabedPiece.style.left = `${x}px`;
            grabedPiece.style.top = `${y}px`;

            console.log(chessboard.clientHeight)

            if(x < minX) grabedPiece.style.left = `${minX}px`
            else if(x > maxX) grabedPiece.style.left = `${maxX}px`
            
            if(y < minY) grabedPiece.style.top = `${minY}px`
            else if(y > maxY) grabedPiece.style.top = `${maxY}px`
            

        }
    
    }
    
    function drop(e){
    
        if(grabedPiece){
    
            grabedPiece = null;
    
        }
    
    }

    for(let j = verticalAxis.length - 1; j >= 0; j--){

        for(let i = 0; i < horizontalAxis.length; i++){

            const tileCounter = j + i;

            let image = undefined;

            peices().forEach(p =>{

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
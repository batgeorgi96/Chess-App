import styles from './Chessboard.module.css';
import Tile from './Tile';
import peices from './pieces/pieces.js';

const verticalAxis = ['1','2','3','4','5','6','7','8'];
const horizontalAxis = ['a','b','c','d','e','f','g','h'];

let grabedPiece = null;

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

    if(grabedPiece){

        const x = e.clientX - 50;
        const y = e.clientY - 50;

        grabedPiece.style.position = "absolute";
        grabedPiece.style.left = `${x}px`;
        grabedPiece.style.top = `${y}px`;

    }

}

function drop(e){

    if(grabedPiece){

        grabedPiece = null;

    }

}

export default function Chessboard(){

    let board = [];

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
    
        <div onMouseDown={grab} onMouseMove={move} onMouseUp={drop}  id={styles.chessBoard}>

            {board}

        </div>
    
    )

}
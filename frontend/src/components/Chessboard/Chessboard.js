import styles from './Chessboard.module.css';
import Tile from './Tile';
import peices from './pieces/pieces.js';

const verticalAxis = ['1','2','3','4','5','6','7','8'];
const horizontalAxis = ['a','b','c','d','e','f','g','h'];

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
    
        <div id={styles.chessBoard}>

            {board}

        </div>
    
    )

}
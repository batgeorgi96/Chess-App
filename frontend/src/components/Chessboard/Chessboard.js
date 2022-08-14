import styles from './Chessboard.module.css';
import Tile from './Tile';

const verticalAxis = ['1','2','3','4','5','6','7','8'];
const horizontalAxis = ['a','b','c','d','e','f','g','h'];

export default function Chessboard(){

    let board = [];

    for(let j = verticalAxis.length - 1; j >= 0; j--){

        for(let i = 0; i < horizontalAxis.length; i++){

            const tileCounter = j + i;
            board.push(<Tile tileCounter={tileCounter} />);
            
        }

    }

    return(
    
        <div id={styles.chessBoard}>

            {board}

        </div>
    
    )

}
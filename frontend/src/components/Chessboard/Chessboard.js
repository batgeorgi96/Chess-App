import styles from './Chessboard.module.css';

const verticalAxis = ['1','2','3','4','5','6','7','8'];
const horizontalAxis = ['a','b','c','d','e','f','g','h'];

export default function Chessboard(){

    let board = [];

    for(let j = verticalAxis.length - 1; j >= 0; j--){

        for(let i = 0; i < horizontalAxis.length; i++){

            const tileCounter = j + i;

            if(tileCounter % 2 == 0){
                board.push(
                    <div class={styles.positionsBlack}>
                        
                    </div>
                );
            }
            else{
                board.push(
                    <div class={styles.positionsWhite}>
                        
                    </div>
                );
            }
            
        }

    }


    return(
    
        <div id={styles.chessBoard}>

            {board}

        </div>
    
    )

}
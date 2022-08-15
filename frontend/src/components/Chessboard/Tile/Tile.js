import styles from './Tile.module.css';

export default function tile({tileCounter, images}){

    if(tileCounter % 2 === 0){

        return (
            <div className={styles.tileBlack}>
                {images && <div style={{backgroundImage: `url(${images})`}} className={styles.chessPiece}></div>}
            </div>
        );

    }
    else{

        return (
            <div className={styles.tileWhite}>
               {images && <div style={{backgroundImage: `url(${images})`}} className={styles.chessPiece}></div>}
            </div>
        );

    }

}
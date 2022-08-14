import styles from './Tile.module.css';

export default function tile({tileCounter, images}){

    if(tileCounter % 2 === 0){

        return (
            <div className={styles.tileBlack}>
                <img className={styles.chessImg} src={images} alt="" />
            </div>
        );

    }
    else{

        return (
            <div className={styles.tileWhite}>
                <img className={styles.chessImg} src={images} alt="" />
            </div>
        );

    }

}
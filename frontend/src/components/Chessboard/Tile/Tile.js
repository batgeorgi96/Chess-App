import styles from './Tile.module.css';

export default function tile({tileCounter}){

    if(tileCounter % 2 === 0){

        return <div className={styles.tileBlack}></div>

    }
    else{

        return <div className={styles.tileWhite}></div>

    }

}
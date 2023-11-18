import trollFace from '../../assets/troll-face.png'
import styles from './styles.module.css'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <img src={trollFace} alt='troll face' className={styles.troll} />
                <h1 className={styles.title}>Meme Generator</h1>
                <p className={styles.text}>React Course - Project 3</p>
            </header>
        </>
    )
}
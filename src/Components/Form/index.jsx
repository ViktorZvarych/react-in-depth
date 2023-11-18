import styles from './styles.module.css'
import memeimage from '../../assets/memeimg.png'
import data from '../../data'

export default function Form() {
    console.log(data);

    const images = data.data.memes.map(item => {
        return (
            <img
                key={item.id}
                src={item.url}
                alt={item.name}
                className={styles.memeImage}
            />
        )
    })

    return (
        <>
            <div className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor='field1'>
                        <input
                            type='text'
                            name='field1'
                            id='field1'
                            placeholder='top'
                            className={styles.input}
                        />
                    </label>
                    <label htmlFor='field2'>
                        <input type='text'
                            name='field2'
                            id='field2'
                            placeholder='bottom'
                            className={styles.input}
                        />
                    </label>
                </div>

                <div className={styles.getButtonContainer}>
                    <button id='getbutton' className={styles.getButton}>
                        Get a new meme image
                    </button>
                </div>

                <img src={memeimage} alt="meme image" className={styles.memeImage} />


                <div className="top"></div>

                <div className="bottom"></div>

                {images}
            </div>
        </>
    )
}
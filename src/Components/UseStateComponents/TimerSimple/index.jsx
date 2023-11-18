import { useEffect, useState } from "react";
import styles from './styles.module.css'


export default function TimerSimple({ timerEvent = 'Happy New Year', deadline = new Date('December 31, 2023 00:00:00').toString() }) {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);



    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        const seconds = (time / 1000);
        
        setSeconds(Math.floor(seconds % 60));
        setMinutes(Math.floor((seconds / 60) % 60));
        setHours(Math.floor((seconds / 60 / 60) % 24));
        setDays(Math.floor(seconds / 60 / 60 / 24));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    });


    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <h1 className={styles.header}>
                    {timerEvent} in
                </h1>
                <div className={styles.timer}>
                    <div className={styles.col4}>
                        <div className={styles.box}>
                            <p id="day">{days < 10 ? "0" + days : days}</p>
                            <span className={styles.text}>Days</span>
                        </div>
                    </div>
                    <div className={styles.col4}>
                        <div className={styles.box}>
                            <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
                            <span className={styles.text}>Hours</span>
                        </div>
                    </div>
                    <div className={styles.col4}>
                        <div className={styles.box}>
                            <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
                            <span className={styles.text}>Minutes</span>
                        </div>
                    </div>
                    <div className={styles.col4}>
                        <div className={styles.box}>
                            <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
                            <span className={styles.text}>Seconds</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
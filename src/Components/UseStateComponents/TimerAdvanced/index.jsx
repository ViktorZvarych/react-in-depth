import { useEffect, useMemo, useState } from "react";
import styles from './styles.module.css'

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function TimerAdvanced({ timerEvent = 'Happy New Year', deadline = new Date('December 31, 2023 00:00:00').toString() }) {
    const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
    const [time, setTime] = useState(parsedDeadline - Date.now());

    useEffect(() => {
        const interval = setInterval(
            () => setTime(parsedDeadline - Date.now()),
            1000,
        );

        return () => clearInterval(interval);
    });

    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <h1 className={styles.header}>
                    {timerEvent} in
                </h1>
                <div className={styles.timer}>
                    {Object.entries({
                        Days: time / DAY,
                        Hours: (time / HOUR) % 24,
                        Minutes: (time / MINUTE) % 60,
                        Seconds: (time / SECOND) % 60,
                    }).map(([label, value]) => (
                        <div key={label} className={styles.col4}>
                            <div className={styles.box}>
                                <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
                                <span className={styles.text}>{label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
import React, { useState } from 'react'
import styles from './Links.module.css'

export default function Links() {
    const [minutes, setMinutes] = useState('')
    const [seconds, setSeconds] = useState('')
    const [time, setTotalTime] = useState(0)
    const [counting, setCounting] = useState(false)


    const startTimer = () => {
        const mins = parseInt(minutes) || 0
        const sec = parseInt(seconds) || 0
        setTotalTime(mins * 60 + sec)
        setCounting(true)
    }

    const formatTime = (time) => {
        const mins = Math.floor(time / 60)
        const secs = time % 60
        return `${mins}:${secs}`//btetter fromating needed
    }

    const pauseTimer = () => {
        setCounting(false)
    }

    const continueTimer = () => {
        setCounting(true)
    }

    const resetTimer = () => {
        setCounting(false)
        setTotalTime(0)
        setSeconds(0)
        setMinutes(0)
    }

    return (
        <div className={styles.mainContainer}>
                <h1>Timer</h1>
            <div className={styles.timeContainer}>
                <input placeholder='0' type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} /><p>Minutes</p>
                <input placeholder='0' type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)}/><p>seconds</p>
                <button onClick={startTimer}>Start</button>
            </div>
            <div className={styles.outerButtons}>
                <button onClick={counting ? pauseTimer : continueTimer}>Pause</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
            <div className={styles.outputContainer}>
                <h2 className={styles.output}>{formatTime(time)}</h2>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import styles from './Links.module.css'

export default function Links() {
    const [minutes, setMinutes] = useState('')
    const [seconds, setSeconds] = useState('')
    const [running, setRunning] = useState(false)
    const [totalSeconds, setTotalSeconds] = useState(0)

    useEffect(() => {

        let timer
        if (running && totalSeconds > 0) {
            timer = setInterval(() => {
                setTotalSeconds(prevTimer => prevTimer - 1)
            }, 1000)
        }
        else if (totalSeconds === 0) {
            setRunning(false)
        }
        return () => clearInterval(timer); //clear the timer after the timer i 0

    }, [running, totalSeconds])

    const startTimer = () => {
        if (minutes < 0 || seconds < 0 || (minutes && seconds < 0)) {
            alert('Please enter the timings properly! Time cannot be negative')
            setMinutes('')
            setSeconds('')
        }

        const mins = Math.floor(parseInt(minutes)) || 0
        const secs = Math.floor(parseInt(seconds)) || 0
        const total = mins * 60 + secs
        if (total > 0) {
            console.log(total)
            setTotalSeconds(total)
            setRunning(true)
        }
    }

    const formatTime = (totalTime) => {
        const mins = Math.floor(totalTime / 60)
        const seconds = totalTime % 60
        return `${mins.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}` //Padstart helps us set the placeholder
    }

    const resumeTimer = () => {
        if (totalSeconds > 0) {
            console.log('Timer is Resumed')
            setRunning(true)
        }
    }

    const pauseTimer = () => {
        console.log('Timer is Paused')
        setRunning(false)
    }

    const resetTimer = () => {
        console.log('Timer is Reset')
        setRunning(false)
        setTotalSeconds(0)
        setMinutes('')
        setSeconds('')
    }

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.headerText}>Timer</h1>
            <div className={styles.outputContainer}>
                    <p className={styles.output}>{formatTime(totalSeconds)}</p>
                </div>
            <div className={styles.clockContainer}>
                <div className={styles.inputContainer}>
                    <p className={styles.innerText}>Minutes:</p>
                    <input placeholder={'00'} className={styles.time} type='number' value={minutes} onChange={(e) => setMinutes(e.target.value)} disabled={running} step="1"/>
                    <p className={styles.innerText}>Seconds:</p>
                    <input placeholder={'00'} className={styles.time} type='number' value={seconds} onChange={(e) => setSeconds(e.target.value)} disabled={running} step="1"/>
                    <button className={styles.buttonStyle} onClick={startTimer} disabled={running}>GO</button>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonStyle} onClick={running ? pauseTimer : resumeTimer}>{running ? 'PAUSE' : 'RESUME'}</button>
                    <button className={styles.buttonStyle} onClick={resetTimer}>RESET</button>
                </div>

            </div>

        </div>
    )
}

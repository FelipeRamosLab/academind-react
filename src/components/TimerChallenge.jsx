import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
    const target = targetTime * 1000;
    const timer = useRef();
    const dialog = useRef();

    const [ timeRemaining, setTimeRemaining ] = useState(target);
    const timerIsActive = timeRemaining > 0 && timeRemaining < target;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(target);
        dialog.current.open();
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prev => prev - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (<>
        <ResultModal ref={dialog} targetTime={targetTime} result="lost" />

        <section className="challenge">
            <h2>{title}</h2>

            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Timer is running...' : 'Timer inactive'}
            </p>
        </section>
    </>);
}

import { useCallback, useState } from 'react';

import QUESTIONS from '../questions';
import QuestionTimer from './QuestionTimer';
import quizCompleteImg from '../assets/quiz-complete.png';
import Answers from './Answers';

export default function Quiz() {
    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);
    
    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setAnswerState('answered');
        setUserAnswers(prev => ([...prev, selectedAnswer]));

        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex]?.answers[0]) {
                setAnswerState('correct');
            } else {
                setAnswerState('wrong');
            }

            setTimeout(() => {
                setAnswerState('');
            }, 2000);
        }, 1000);
    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null), [handleSelectAnswer]
    });

    if (quizIsComplete) {
        return <div id="summary">
            <img src={quizCompleteImg} />
            <h2>Quiz Completed</h2>
        </div>
    }

    return (<div id="quiz">
        <div id="question">
            <QuestionTimer
                key={activeQuestionIndex + 0}
                timeout={10000}
                onTimeout={handleSkipAnswer}
            />

            <h2>{QUESTIONS[activeQuestionIndex]?.text || ''}</h2>
            <Answers
                key={activeQuestionIndex + 1}
                answers={QUESTIONS[activeQuestionIndex].answers}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    </div>
    );
}

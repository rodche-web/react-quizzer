import {useState} from 'react';
import QuizItem from '../QuizItem/QuizItem';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {firestore} from '../../../firebase/config';
import './styles.css';

const QuizList = () => {
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState('');
    const [showScore, setShowScore] = useState(false);

    const questionRef = firestore.collection('questions');
    const query = questionRef.limit(10);
    const [questions] = useCollectionData(query, {idField: 'id'});

    const checkResult = answer => {
        if(answer === questions[counter].correct_answer) {
            setScore(prev => prev + 1);
            setResult('Correct!');
        } else {
            setResult(`Wrong! The answer is ${questions[counter].correct_answer}`);
        }
    }

    const nextQuestionHandler = () => {
        if((counter + 1) === questions.length) {
            setShowScore(true);
        } else {
            setCounter(counter => counter + 1);
            setResult('');
        }
    }

    const resetHandler = () => {
        setCounter(0);
        setResult('');
        setScore(0);
        setShowScore(false);
    }

    return (
        <div className='quiz_container'>
            <h1>Quiz</h1>
            {questions && 
            <QuizItem 
            result={result}
            checkResult={checkResult}
            question={questions[counter].question}
            answers={questions[counter].answers.sort((a,b) => 0.5 - Math.random())} 
            />}
            <h3>{result}</h3>
            {result && <button onClick={nextQuestionHandler} disabled={showScore} className='quiz_btn'>Next Question</button>}
            {showScore && (<div>
                    <h3>Your score is {score}. Thanks for playing</h3>
                    <button onClick={resetHandler} className='quiz_btn'>Play Again</button>
                </div>)}
        </div>
    )
}

export default QuizList

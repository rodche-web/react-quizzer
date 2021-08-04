import './styles.css';

const QuizItem = ({question, answers, result, checkResult}) => {
    return (
        <>
            <h3>{question}</h3>
            <div className='answers_container'>
                {answers.map(answer => <button onClick={() => checkResult(answer)} disabled={result}>{answer}</button>)}
            </div>
            
        </>
    )
}

export default QuizItem

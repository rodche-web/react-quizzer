import React, {useState} from 'react';
import {firestore} from '../../firebase/config';
import './styles.css';

const QuizForm = () => {
    const [question, setQuestion] = useState('');
    const [correctAns, setCorrectAns] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');
    const [error, setError] = useState('');

    const questionRef = firestore.collection('questions');

    const resetState = () => {
        setQuestion('');
        setCorrectAns('');
        setAns2('');
        setAns3('');
        setAns4('');
    }

    const submitHandler = async e => {
        e.preventDefault()

        if(!(correctAns && question && ans2 && ans3 && ans4)){
            setError('ERROR: Fill in all fields');
            resetState();
            setTimeout(() => setError(''), 2000);
            return;
        } else {
            await questionRef.add({
                question,
                correct_answer: correctAns,
                answers: [
                    correctAns,
                    ans2,
                    ans3,
                    ans4
                ]
            })
            resetState()
        }
    }

    return (
        <div className='form_container'>
            <h1>Add A Question</h1>
            {error && <h3 className='error'>{error}</h3>}
            <form onSubmit={submitHandler}>
                <label htmlFor='question'>Question</label>
                <input type='text' value={question} onChange={e => setQuestion(e.target.value)} />
                <label htmlFor='correct_answer'>Correct Answer</label>
                <input type='text' value={correctAns} onChange={e => setCorrectAns(e.target.value)} />
                <label htmlFor='answer2'>Answer 2</label>
                <input type='text' value={ans2} onChange={e => setAns2(e.target.value)} />
                <label htmlFor='answer3'>Answer 3</label>
                <input type='text' value={ans3} onChange={e => setAns3(e.target.value)} />
                <label htmlFor='answer4'>Answer 4</label>
                <input type='text' value={ans4} onChange={e => setAns4(e.target.value)} />
                <button type='submit' className='submit_btn'>Submit</button>
            </form>
        </div>
    )
}

export default QuizForm

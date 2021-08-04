import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import QuizForm from './components/QuizForm/QuizForm';
import QuizList from './components/Quiz/QuizList/QuizList';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/'><QuizList /></Route>
                <Route exact path='/form'><QuizForm /></Route>
            </Switch>
        </div>
    )
}

export default App

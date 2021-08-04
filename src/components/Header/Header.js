import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <header>
            <div>
                <h1>Quizzer</h1>
            </div>
            <nav>
                <ul className='nav_list'>
                    <li><NavLink to='/' activeClassName='nav_item'>Quiz</NavLink></li>
                    <li><NavLink to='/form' activeClassName='nav_item'>Add Question</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

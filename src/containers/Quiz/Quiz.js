import React, {Component} from 'react';
import classes from './Quiz.module.scss'
import {ActiveQuiz} from '../../components/ActiveQuiz/ActiveQuiz'

export default class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Черное', id: 1},
                    {text: 'Синее', id: 2},
                    {text: 'Красное', id: 3},
                    {text: 'Зеленое', id: 4},
                ]
            },
        ]
    };

    onAnswerClickHandler = answerId => {
        console.log('Answer Id', answerId)
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        onAnswerClick={this.onAnswerClickHandler}
                        question={this.state.quiz[0].question}
                        answers={this.state.quiz[0].answers}/>
                </div>
            </div>
        )
    }
}
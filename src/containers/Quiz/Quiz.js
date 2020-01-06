import React, {Component} from 'react';
import classes from './Quiz.module.scss'
import {ActiveQuiz} from '../../components/ActiveQuiz/ActiveQuiz'

export default class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answerState: null, // {[id]: 'success' 'error'}
        quiz: [
            {
                id: 1,
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Черное', id: 1},
                    {text: 'Синее', id: 2},
                    {text: 'Красное', id: 3},
                    {text: 'Зеленое', id: 4},
                ]
            },
            {
                id: 2,
                question: 'В каком году основан Санкт-Петербург?',
                rightAnswerId: 3,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1705', id: 2},
                    {text: '1703', id: 3},
                    {text: '1830', id: 4},
                ]
            },
        ]
    };

    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return;
            }
        }

        console.log('Answer Id', answerId);

        const question = this.state.quiz[this.state.activeQuestion];

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: {
                    [answerId]: 'success'
                }
            });
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finished')
                } else {
                    this.setState({
                        activeQuestion: ++this.state.activeQuestion,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000);
        } else {
            this.setState({
                answerState: {
                    [answerId]: 'error'
                }
            });
        }
    };

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        state={this.state.answerState}
                        onAnswerClick={this.onAnswerClickHandler}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}
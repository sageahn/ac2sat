import React, { Component } from 'react';
import QuestionList from './QuestionList';

class App extends Component {
  getInitialState() {
    return { questions: [] };
  }
  componentDidMount() {
    this.fillQuestionList();
  }
  fillQuestionList() {
    // Step 1 Q1
    let q1 = { number: 1, answer: '' };
    if (!null) {
      q1 = { number: 1, answer: 'A' };
    }
    if (!undefined) {
      q1.answer = `${q1.answer} B`;
    }
    if (!'') {
      q1.answer = `${q1.answer} D`;
    }
    if (!0) {
      q1.answer = `${q1.answer} E`;
    }
    if (!NaN) {
      q1.answer = `${q1.answer} F`;
    }
    if (!false) {
      q1.answer = `${q1.answer} G`;
    }
    // Step 1 Q2
    const q2 = { number: 2, answer: '200, 200' };
    // Step 1 Q3
    const q3 = { number: 3, answer: 'ES6의 새로운 Number, Math Feature를 공부하세요' };
    // Step 1 Q4
    const q4 = { number: 4,
      answer:
      `1) ${parseInt('12.34', 10)} 2) ${parseFloat('3.14 meters')}
       3) ${parseInt('0xFF', 16)} 4) ${parseInt('11', 2)}
       5) ${parseInt('ff', 16)} 6) ${parseFloat('$72.47')}` };
    // Step 1 Q5

    this.setState({ questions: [q1, q2, q3, q4] });
  }
  render() {
    return (
      <div className="javascrtipStudy">
        <h1> Javascript Study </h1>
        <h2> Step 1 </h2>
        <QuestionList questions={this.state.questions} />
      </div>
    );
  }
}

export default App;

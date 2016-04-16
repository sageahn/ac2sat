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
    /*
    if (!undefined) {
      q1.answer += 'B';
    }
    if (!'') {
      q1.answer += 'D';
    }
    */
    this.setState({ questions: [q1, { number: 2 }, { number: 3 }, { number: 4 }] });
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

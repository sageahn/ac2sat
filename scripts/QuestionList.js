import React, { Component, PropTypes } from 'react';
import Question from './Question';

const propTypes = {
  questions: PropTypes.array.isRequired,
};

class QuestionList extends Component {
  render() {
    const questiontNodes = this.props.questions.map(question =>
      (
        <Question qnumber={question.number} answer={question.answer} />
      )
    );
    return (
      <div className="questionList">
        {questiontNodes}
      </div>
    );
  }
}

QuestionList.propTypes = propTypes;

export default QuestionList;

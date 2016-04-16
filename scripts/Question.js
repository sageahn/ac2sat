import React, { Component, PropTypes } from 'react';

const propTypes = {
  qnumber: PropTypes.any.isRequired,
  answer: PropTypes.string.isRequired,
};

class Question extends Component {
  render() {
    return (
        <div className="question">
            <h3> Question {this.props.qnumber}: 정답은 {this.props.answer} </h3>
        </div>
    );
  }
}

Question.propTypes = propTypes;

export default Question;

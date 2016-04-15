import React, { Component, PropTypes } from 'react';

const propTypes = {
  data: PropTypes.array.isRequired,
};

const defaultProps = {
  data: [],
};

class App extends Component {
  render() {
    return (
      <div className="commentBox">
        <h1> Comments </h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;

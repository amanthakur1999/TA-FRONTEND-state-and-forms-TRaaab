import data from '../data/data';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ans: null,
    };
  }
  handelClick = (each, index) => {
    this.setState({
      ans: this.state.ans === index ? null : index,
    });
  };

  render() {
    return (
      <>
        <h1>Question FQA</h1>
        <div className="main-div">
          {data.map((each, index) => (
            <div className="question">
              <h2 key={index} onClick={() => this.handelClick(each, index)}>
                {each.Q}
                {this.state.ans === index ? <span>👆</span> : <span>👇</span>}
              </h2>
              <div className="span">
                {index === this.state.ans ? <p key={index}>{each.A}</p> : ''}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;

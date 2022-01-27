import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 5,
      max: 15,
    };
  }

  handelIncrement = () => {
    this.setState({
      counter:
        this.state.counter + this.state.step > this.state.max
          ? this.state.counter
          : this.state.counter + this.state.step,
    });
  };
  handelDecriment = () => {
    this.setState({
      counter: this.state.counter - this.state.step,
    });
  };

  handelReset = () => {
    this.setState({
      counter: 0,
      step: 5,
      max: 15,
    });
  };

  render() {
    let steps = [5, 10, 15];
    let max = [15, 100, 200];
    return (
      <div className="main-div">
        <h1>Counter App</h1>
        <h2>{this.state.counter}</h2>

        <div>
          <h3>Steps</h3>
          <div className=" steps_max steps">
            {steps.map((each) => (
              <button
                className={this.state.step === each ? 'active' : ''}
                onClick={() => {
                  this.setState({ step: each });
                }}
              >
                {each}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3>Max Category</h3>
          <div className="steps_max max">
            {max.map((count) => (
              <button
                className={this.state.max === count ? 'activ_count' : ''}
                onClick={() =>
                  this.setState({
                    max: count,
                  })
                }
              >
                {count}
              </button>
            ))}
          </div>
        </div>

        <div className="button-div">
          <button onClick={this.handelIncrement}>Increment</button>
          <button onClick={this.handelDecriment}>Decrement</button>
          <button onClick={this.handelReset}>Reset</button>
        </div>
      </div>
    );
  }
}
export default App;

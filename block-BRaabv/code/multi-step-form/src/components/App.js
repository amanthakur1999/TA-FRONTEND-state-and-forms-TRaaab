import React from 'react';
import Signupone from './StepOne';
import Signuptwo from './StepTwo';
import Signupthree from './StepThree';
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeStep: 'step1',
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      address: '',
      message: '',
      choice: '',
      gender: '',
    };
  }

  getStep = () => {
    let activeStep = this.state.activeStep;
    // eslint-disable-next-line default-case
    switch (activeStep) {
      case 'step1':
        return (
          <Signupone
            handleStep={this.handleStep}
            handleChange={this.handleChange}
            state={this.state}
          />
        );
      case 'step2':
        return (
          <Signuptwo
            handleStep={this.handleStep}
            handleChange={this.handleChange}
            state={this.state}
          />
        );
      case 'step3':
        return (
          <Signupthree
            handleStep={this.handleStep}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            state={this.state}
          />
        );
    }
  };

  handleStep = (event) => {
    event.preventDefault();
    let step = event.target.dataset.step;
    this.setState({
      activeStep: step,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, firstName } = this.state;
    alert(`Your registration detail: \n 
    Email: ${email} \n 
    Username: ${firstName}`);
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return <main>{this.getStep()}</main>;
  }
}

export default App;

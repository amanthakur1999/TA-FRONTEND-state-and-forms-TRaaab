import React from 'react';

class Signupone extends React.Component {
  render() {
    let { firstName, lastName, dob, email, address } = this.props.state;
    console.log(firstName);
    return (
      <section className="from">
        <aside>
          <img src="/images/random.jpeg" alt="" />
        </aside>
        <form>
          <div>
            <div>1</div>
            <span>Sign Up</span>
            <div>2</div>
            <span>Message</span>
            <div>3</div>
            <span>Checkobox</span>
          </div>
          <h6>step 1/3</h6>
          <h2>Sign Up</h2>
          <div>
            <div>
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={this.props.handleChange}
                value={firstName}
              />
            </div>
            <div className="flex-50">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={this.props.handleChange}
                value={lastName}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">Date of birth</label>
              <input
                type="date"
                name="dob"
                onChange={this.props.handleChange}
                value={dob}
              />
            </div>
            <div className="flex-50">
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.props.handleChange}
                value={email}
              />
            </div>
          </div>

          <label htmlFor="">Address</label>
          <textarea
            id=""
            cols="30"
            rows="1"
            onChange={this.props.handleChange}
            name="address"
            value={address}
          ></textarea>

          <div></div>

          <div className="text-right">
            <button onClick={this.props.handleStep} data-step="step2">
              Next Step
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Signupone;

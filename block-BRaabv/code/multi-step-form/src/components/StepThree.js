import React from 'react';

class Signupthree extends React.Component {
  render() {
    let { gender } = this.props.state;
    return (
      <section className="from">
        <aside className="">
          <img className="" src="/images/random.jpeg" alt="" />
        </aside>
        <form action="" className="">
          <div className="">
            <div className="">1</div>
            <span className="">Sign Up</span>
            <div className="">2</div>
            <span className=" ">Message</span>
            <div className="">3</div>
            <span className="">Checkobox</span>
          </div>

          <h6 className="">step 3/3</h6>
          <h2 className="">Checkbox</h2>

          <div className="flex">
            <label htmlFor="male" className={gender === 'male' ? '' : ''}>
              🙍🏻‍♂️
            </label>
            <input
              type="radio"
              onChange={this.props.handleChange}
              value="male"
              name="gender"
              id="male"
              className="hidden"
            />
            <label htmlFor="female" className={gender === 'female' ? '' : ''}>
              👩‍💼
            </label>
            <input
              type="radio"
              onChange={this.props.handleChange}
              value="female"
              name="gender"
              id="female"
              className="hidden"
            />
          </div>
          <div></div>

          <div>
            <button
              className=""
              onClick={this.props.handleStep}
              data-step="step2"
            >
              Back
            </button>
            <button onSubmit={this.props.handleSubmit}>Submit</button>
          </div>
        </form>
      </section>
    );
  }
}

export default Signupthree;

import React from 'react';

class Signuptwo extends React.Component {
  render() {
    let { message, choice } = this.props.state;
    return (
      <section className="from">
        <aside>
          <img src="" alt="" />
        </aside>
        <form action="">
          <div>
            <div>1</div>
            <span>Sign Up</span>
            <div>2</div>
            <span>Message</span>
            <div>3</div>
            <span>Checkobox</span>
          </div>
          <h6>step 2/3</h6>
          <h2>Message</h2>
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            cols="30"
            rows="8"
            className="border p-2 rounded-lg w-full mt-1"
            onChange={this.props.handleChange}
            value={message}
          ></textarea>

          <div>
            <input
              type="radio"
              name="choice"
              value="choiceone"
              checked={choice === 'choiceone'}
              onChange={this.props.handleChange}
            />
            <label htmlFor="">The number one choice</label>
            <input
              type="radio"
              name="choice"
              value="choicetwo"
              checked={choice === 'choicetwo'}
              onChange={this.props.handleChange}
              className="mr-3"
            />
            <label htmlFor="">The number one choice</label>
          </div>

          <div></div>

          <div>
            <button
              type="submit"
              onClick={this.props.handleStep}
              data-step="step1"
            >
              Back
            </button>
            <button
              type="submit"
              onClick={this.props.handleStep}
              data-step="step3"
            >
              Next Step
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Signuptwo;

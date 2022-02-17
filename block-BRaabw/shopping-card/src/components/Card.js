import React from 'react';
import AddCard from './AddCard';
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }
  handelCard = (event) => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    var addCard = this.props.elem;
    console.log(addCard);
    var fn = this.props.fn;
    console.log(fn);

    return (
      <>
        <div className="card">
          {this.state.toggle ? (
            <i className="fas fa-times" onClick={this.handelCard}></i>
          ) : (
            <img
              src="/static/bag-icon.png"
              className=""
              alt="img"
              onClick={this.handelCard}
            />
          )}
          <div className="addCard">
            {this.state.toggle ? <AddCard quantity={addCard} fn={fn} /> : ''}
          </div>
        </div>
      </>
    );
  }
}
export default Card;

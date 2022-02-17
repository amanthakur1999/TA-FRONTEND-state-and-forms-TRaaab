import React from 'react';

class AddCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      activeIndex: '',
      quantity: 1,
      min: 0,
    };
  }

  addQuantity = (each, index) => {
    this.setState({
      activeIndex: this.setState.activeIndex == index ? null : index,
      quantity: this.state.quantity + 1,
    });
  };
  removeQuantity = (each, index) => {
    this.setState({
      activeIndex: this.setState.activeIndex == index ? null : index,
      quantity: this.state.quantity - 1,
    });
  };

  render() {
    var quantity = this.props.quantity;
    console.log(quantity);
    var fn = this.props.fn;

    return (
      <>
        <div className="card">
          <div className="flex-60">
            <div className="flex cart-icon">
              <img src="/static/bag-icon.png" className="" alt="img" />
              <h2>Cart</h2>
            </div>

            {quantity.map((each, index) => (
              <div className=" flex-60 addcard" key={each.id}>
                <img
                  className="img-card"
                  src={'/static/products/' + each.sku + '_1.jpg'}
                  alt={each.title}
                />
                <div>
                  <h4>{each.title}</h4>
                  <h5>{each.style}</h5>
                  <p>Quantity:{this.state.quantity}</p>
                </div>

                <div>
                  <i className="fas fa-times" onClick={fn}></i>
                  <h5 className="">
                    {each.currencyFormat}
                    {this.state.quantity * each.price}
                  </h5>
                  <div>
                    <button
                      onClick={() => {
                        this.removeQuantity(each, index);
                      }}
                    >
                      -
                    </button>
                    <button
                      onClick={() => {
                        this.addQuantity(each, index);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="total">
              Total:
              {quantity.reduce((acc, cv) => {
                acc = acc + cv.price * this.state.quantity;
                return acc;
              }, 0)}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default AddCard;

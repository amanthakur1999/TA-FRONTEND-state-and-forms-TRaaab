import React from 'react';
import Card from './Card';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      card: '',
      each: [],
    };
  }

  cardClick = (each, index) => {
    this.setState({
      card: index,
      each: [...this.state.each, each],
    });
  };
  clearEach = (each, index) => {
    this.setState({
      card: '',
      each: [],
    });
  };

  render() {
    var elem = this.props.allData;
    // console.log(elem);
    return (
      <>
        <div className="sb">
          <div className="sb wrap flex-60">
            {elem.map((each, index) => (
              <div className="flex-30 " key={each.id}>
                <p>Free Shipping</p>
                <img
                  className="img"
                  key={each.id}
                  src={'/static/products/' + each.sku + '_1.jpg'}
                  alt={each.title}
                />
                <div>
                  <h3>{each.title}</h3>

                  <h3>
                    Price:
                    <span>{each.currencyFormat}</span>
                    {each.price}
                  </h3>
                  <button onClick={() => this.cardClick(each, index)}>
                    Add To Card
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-20">
            <Card elem={this.state.each} fn={this.clearEach} />
          </div>
        </div>
      </>
    );
  }
}

export default Product;

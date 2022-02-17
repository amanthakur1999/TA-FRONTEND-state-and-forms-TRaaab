import React from 'react';
import data from '../data.json';
import Product from './Product';

class Sizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
    };
  }

  handelSize = (eachSize) => {
    this.setState({
      size: eachSize,
    });
  };

  render() {
    var allSizes = [];
    var size = data.products.map((allsize) => {
      allsize.availableSizes.map((availableSizes) => {
        return allSizes.push(availableSizes);
      });
    });
    // console.log(allSizes);

    var eachSize = Array.from(new Set(allSizes));
    // console.log(eachSize);

    var allData = [];
    if (!this.state.size) {
      data.products.map((eachData) => {
        return allData.push(eachData);
      });
    } else {
      data.products.map((eachData) => {
        eachData.availableSizes.map((eachSize) => {
          if (eachSize == this.state.size) {
            return allData.push(eachData);
          }
        });
      });
    }
    console.log(allData);

    return (
      <>
        <div className="sb">
          <div className="flex-10">
            <h2>Select Size</h2>
            {eachSize.map((eachSizes) => (
              <button
                key={eachSizes}
                onClick={() => this.handelSize(eachSizes)}
              >
                {eachSizes}
              </button>
            ))}
          </div>
          <div className="flex-60">
            <Product allData={allData} productsState={this.state.size} />
          </div>
        </div>
      </>
    );
  }
}

export default Sizes;

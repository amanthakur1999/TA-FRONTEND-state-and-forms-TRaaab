import React from 'react';

class Font extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      fontSize: 16,
    };
  }

  handelclick = (event) => {
    this.setState({
      message: event.target.value,
    });
  };
  handelRange = (event) => {
    this.setState({
      fontSize: event.target.value,
    });
  };

  render() {
    let fonts = [
      'Azeret Mono',
      'Glory',
      'Lato',
      'monospace',
      'Montserrat',
      'Noto Sans',
      'Noto SansJP',
      'Open Sans',
      'Poppins',
      'Roboto',
      'Urbanist',
      'Comforter',
    ];
    return (
      <>
        <div className="container">
          <div className="input-div">
            <input
              value={this.state.message}
              onChange={this.handelclick}
              type="text"
              placeholder="enter message"
            />
            <div className="flex-50">
              <h5>{this.state.fontSize}px</h5>
              <input
                type="range"
                value={this.state.fontSize}
                onChange={this.handelRange}
              />
            </div>

            {/* <h2>{this.state.message}</h2> */}
          </div>
          <ul className="flex flex-w">
            {fonts.map((font) => (
              <li key={font} className="flex-32 font-div">
                <h2 style={{ fontFamily: 'monospace' }}>{font}</h2>
                <h3
                  style={{
                    fontFamily: font,
                    fontSize: this.state.fontSize + 'px',
                  }}
                >
                  {this.state.message}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Font;

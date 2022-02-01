import React from 'react';
import data from '../data/data';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieListIndex: '',
    };
  }

  handelClick = (each, index) => {
    this.setState({
      movieListIndex: this.state.movieListIndex === index ? '' : index,
    });
  };
  handelToggle = () => {
    this.setState({
      movieListIndex: '',
    });
  };
  isActive() {
    if (this.state.movieListIndex || this.state.movieListIndex === 0)
      return true;
    else return false;
  }
  render() {
    return (
      <>
        <div>
          {
            <div className="container  main-div flex">
              {data.map((eachMovie, index) => (
                <>
                  <div className="each-div flex-32">
                    <div>
                      <img src={eachMovie.Poster} alt={eachMovie.Title} />
                      <div>
                        <h2>{eachMovie.Title}</h2>
                        <h3>{eachMovie.Released}</h3>
                      </div>
                      <button
                        key={eachMovie.Title}
                        onClick={() => this.handelClick(eachMovie, index)}
                      >
                        More Info
                      </button>
                      <div>
                        {this.state.movieListIndex === index ? (
                          <Model {...eachMovie} />
                        ) : (
                          ''
                        )}
                        <button onClick={this.handelToggle}>❌</button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          }
        </div>
      </>
    );
  }
}

function Model(props) {
  return (
    <>
      <div className="">
        <div className="">
          <img src={props.Poster} alt={props.Title} />
          <div>
            <h2>
              <span>Tilte: </span>
              {props.Title}
            </h2>
            <h3>
              <span>Year: </span>
              {props.Year}
            </h3>
            <h3>
              <span>Director: </span>
              {props.Director}
            </h3>
            <h4>
              <span>Actor: </span>
              {props.Actor}
            </h4>
            <p>
              <span>Reted: </span>
              {props.Rated}
            </p>
            <p>
              <span>Runtime: </span>
              {props.Runtime}
            </p>
            <p>
              <span>Genre: </span>
              {props.Genre}
            </p>
            <p>
              <span>Language: </span>
              {props.Language}
            </p>
            <p>
              <span>Plot: </span>
              {props.Plot}
            </p>
            <p>
              <span>Awards: </span>
              {props.Awards}
            </p>
            <p>
              <span>imdbRating: </span>
              {props.imdbRating}
            </p>
            <p>
              <span>Country: </span>
              {props.Country}
            </p>
            <p>
              <span>Writer: </span>
              {props.Writer}
            </p>
          </div>
          <div className="img-div ">
            {props.Images.map((eachImg) => (
              <img
                className="img"
                key={props.Released}
                src={eachImg}
                alt={props.Title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;

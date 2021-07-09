import React, { useState } from 'react';
import findChromaticPolynomial, { isProperSize } from '../logic/logic';
import '../scss/main.scss';

export default function Main() {
  const [vector, setVector] = useState('');
  const [result, setResult] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setResult(() => findChromaticPolynomial(vector).reverse());
  }
  function handleChange(e) {
    if (e.target.value.length > 45) return;
    if (
      e.nativeEvent.data === '1' ||
      e.nativeEvent.data === '0' ||
      e.nativeEvent.inputType === 'deleteContentBackward'
    ) {
      setVector(e.target.value);
    }
  }
  return (
    <div className="Main">
      <div className="container">
        <h1 className="heading">Chromatic Polynomial</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="vector">
              <input
                type="text"
                placeholder="Enter the adjacency vector of the graph"
                className="vector"
                id="vector"
                onFocus={(e) => e.target.select()}
                autoComplete="off"
                value={vector}
                onChange={handleChange}
              />
              <small>
                Adjacency vector consists of 0s and 1s only and its size is
                equal to n(n-1)/2 for any integer n
              </small>
            </label>
          </div>
          <div className="form-control">
            <button
              className="calculate-btn"
              disabled={!isProperSize(vector.length)}
            >
              Calculate
            </button>
          </div>
        </form>
        <div className="result">
          <div>
            {result.length !== 0 && <span>P(x) = </span>}
            {result.map((x, index, ar) => {
              if (index === 0) {
                return (
                  <span key={index}>
                    <span>
                      &#119909;
                      <sup>
                        {ar.length - index === 1 ? '' : ar.length - index}
                      </sup>
                    </span>
                  </span>
                );
              }
              return (
                <span key={index}>
                  {x !== 0 && (
                    <span>
                      <span>
                        {Math.abs(x) === 1
                          ? x > 0
                            ? ` + `
                            : ` - `
                          : x > 0
                          ? ` + ${x}`
                          : ` - ${Math.abs(x)}`}
                      </span>
                      <span>
                        &#119909;
                        <sup>
                          {ar.length - index === 1 ? '' : ar.length - index}
                        </sup>
                      </span>
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="instruction">
        <h2>FAQ</h2>
        <div className="question">What is adjacency vector of the Graph? </div>
        <div className="answer">
          <div>
            It is simple! It is just a minified version of Adjacency List, so it
            is easy to write in one single line
          </div>
          <div>
            For, example - the adjacency list for a Graph with 4 nodes,
            <p>{'1 -> 3'}</p>
            <p>{'2 -> 3,4'}</p>
            <p>{'3 -> 4'}</p>
            can be written as, '010111'
            <p>
              The first three numbers '010' - explains vertex 1 is connected to
              vertex 3 but not connected to vertices 2 and 4
            </p>
            <p>
              The next two numbers '11' - explains vertex 2 is connected to both
              vertices 3 and 4
            </p>
            <p>
              The final number '1' - explains vertex 3 is connected to vertex 4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

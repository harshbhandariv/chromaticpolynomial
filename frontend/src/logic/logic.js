export function isProperSize(vectorLength) {
  return vectorLength > 0 && Math.sqrt(1 + 8 * vectorLength) % 1 === 0;
}

function isDisconnected(vector) {
  if (vector === '') return true;
  //console.log(vector);
  for (let i = 0; i < vector.length; i++) {
    if (vector[i] !== '0') {
      return false;
    }
  }
  return true;
}

function findFirstEdge(vector) {
  for (let i = 0; i < vector.length; i++) {
    if (vector[i] === '1') {
      return i;
    }
  }
}

function getOrder(vectorLength) {
  return (1 + Math.sqrt(1 + 8 * vectorLength)) / 2;
}

function removeEdge(vector, index) {
  return vector.substring(0, index) + '0' + vector.substring(index + 1);
}

function calcLowerLimit(k, n) {
  return (k - 1) * n - (k * (k - 1)) / 2;
}

function calcHigherLimit(k, n) {
  return (k - 1) * n - (k * (k - 1)) / 2 + n - k;
}

function calculateVertex(n, i) {
  let sqr = 4 * n ** 2 - 4 * n + 1 - 8 * i;
  // let x1 = (2 * n + 1 + Math.sqrt(sqr)) / 2;
  let x2 = (2 * n + 1 - Math.sqrt(sqr)) / 2;
  // console.log(Math.ceil(x1));
  return Math.floor(x2);
}

function mergeEdge(vector, index) {
  let n = getOrder(vector.length);
  let k = calculateVertex(n, index);
  let initialLowerLimit = calcLowerLimit(k, n);
  let initialHigherLimit = calcHigherLimit(k, n);
  let mergeVertexIndex = index - initialLowerLimit + k + 1;
  let finalLowerLimit = calcLowerLimit(mergeVertexIndex, n);
  let finalHigherLimit = calcHigherLimit(mergeVertexIndex, n);
  let y = vector.substring(finalLowerLimit, finalHigherLimit);
  let x = vector.substring(initialLowerLimit, initialHigherLimit);
  let xy = merge(x, y);
  let finalVector = '';
  for (let i = 1; i < k; i++) {
    let iThVertexLowerLimit = calcLowerLimit(i, n);
    let iThVertexHigherLimit = calcHigherLimit(i, n);
    let currentVector = vector.substring(
      iThVertexLowerLimit,
      iThVertexHigherLimit
    );
    finalVector +=
      currentVector.substring(0, k - i - 1) + currentVector.substring(k - i);
  }
  finalVector +=
    vector.substring(initialHigherLimit, finalLowerLimit) +
    xy +
    vector.substring(finalHigherLimit);
  //   console.log(finalVector, vector, k, index, 'line63');
  return finalVector;
  function merge(x, y) {
    let z = '';
    let k = x.length - 1;
    for (let i = y.length - 1; i >= 0; i--) {
      if (x[k--] === '1' || y[i] === '1') z = '1' + z;
      else z = '0' + z;
    }
    return z;
  }
}

function removeMergeEdge(vector) {
  let firstEdge = findFirstEdge(vector);
  let x = removeEdge(vector, firstEdge);
  let y = mergeEdge(vector, firstEdge);
  // console.log(vector, y, firstEdge, 'line75');
  return [x, y];
}

function subtract(m1, m2) {
  let max = Math.max(m1.length, m2.length);
  let c = Array(max).fill(0);
  for (let i = 0; i < max; i++) {
    if (m1.length > i) {
      c[i] += m1[i];
    }
    if (m2.length > i) {
      c[i] -= m2[i];
    }
  }
  return c;
}

function chromaticPolynomial(vector1, vector2) {
  let left = findChromaticPolynomial(vector1);
  let right = findChromaticPolynomial(vector2);
  // console.log(left, right, vector1, vector2, 'line 82');
  return subtract(left, right);
}

export default function findChromaticPolynomial(vector) {
  if (isDisconnected(vector)) {
    let order = getOrder(vector.length);
    let x = Array(order).fill(0);
    x[order - 1] = 1;
    return x;
  }
  let [vector1, vector2] = removeMergeEdge(vector);
  let x = chromaticPolynomial(vector1, vector2);
  return x;
}

let adjacencyVector = '100011101100111';
let polynomial = findChromaticPolynomial(adjacencyVector);
console.log(polynomial);
console.log('101010', findChromaticPolynomial('101010').reverse());

console.log(
  polynomial.map((x, index, ar) => {
    return {
      cofficient: x,
      xterm: (
        <span>
          x<sup>{ar.length - index}</sup>
        </span>
      ),
    };
  })
);

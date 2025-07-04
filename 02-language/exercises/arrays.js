const head = (array) => {
  // multiple options here as we do on last slice(1),at(1) etc

  const [firstElement] = array;
  return firstElement;
}

const last = (array) => {
  // multiple options here

  // const lastElement = array[array.length - 1];
  // return lastElement;

  // const lastElement = array.slice(-1);
  // return lastElement[0];

  // const lastElement = array.at(-1);
  // return lastElement;

  // - similar  to previeous solution
  const [lastElement] = array.reverse();
  return lastElement;
}

const tail = (array) => {
  // multiple options here, but is mandatory to use the rest operator

  const [, ...rest] = array;
  return rest;
}

const init = (array) => {
  return array.slice(0, -1);
}

module.exports = {
  head,
  last,
  tail,
  init
}
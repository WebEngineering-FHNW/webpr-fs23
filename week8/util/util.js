/**
 * Mapping from a number to a number. Might have side effects
 * @callback NumberCallback
 * @param  { Number } input
 * @return { Number }
 * @example
 * x => x * x
 */

/**
 * Interface that demands the _times_ method.
 * @typedef ITimes
 * @property { (f:NumberCallback) => Array<Number> } times - the callback will be use so-many times to produce an array of numbers
 */

/**
 * Intersection type to combine ITimes and Number.
 * @typedef { Number & ITimes} INumber
 */

Number.prototype.times = function(f) {
    return Array.from({length: this}).map( (_item, index) => f(index) );
};



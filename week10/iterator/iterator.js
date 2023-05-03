/**
 * @typedef ValueDoneType
 * @template _T_
 * @property { _T_ }    value - The value of the item, might be undefined when done is true.
 * @property { Boolean } done - True if the iterator is done, false otherwise.
 */

/**
 * @typedef ValueDoneProducerType
 * @template _T_
 * @function
 * @return { ValueDoneType<_T_> }
 */

/**
 * @typedef IteratorType
 * @template _T_
 * @property { ValueDoneProducerType<_T_> } next - Returns the next item in the iterator.
 */

/**
 * @template _T_
 * @param { _T_ } startValue
 * @param { (i:_T_) => Boolean } whileFn
 * @param { (i:_T_) => _T_ } incrementFn
 * @return { IteratorType<_T_> }
 * @constructor
 */
const Iterator = (startValue, whileFn, incrementFn) => {
    const next = () => {
        const proceed = whileFn(startValue);
        let   value = undefined;
        if (proceed) {
            value = startValue;
            startValue = incrementFn(startValue);
        }
        return { value: value, done: !proceed };

    };
    return /** @type { IteratorType } */{
        [Symbol.iterator]: () => ({ next })
    };
};

/**
 * @typedef RangeType
 * @property { IteratorType<Number> } [Symbol.iterator] - Returns the iterator object.
 */

/**
 * @param { Number } n - The number of elements in the range, starting from 0, not reaching n, must not be negative.
 * @return { RangeType }
 * @constructor
 */

const Range = n => /** @type { RangeType } */ Iterator(0, i => i < n, i => i + 1);

/**
 * Constructor of an iterator that emits fibonacci numbers.
 * @param { Number } n - the upper limit until fibonacci numbers will be emitted, must not be negative.
 * @return { IteratorType<Number> }
 * @constructor
 */
const Fib = n => {
    let prev = 1;
    return Iterator(0, i => i < n, i => {
        const result = prev + i;
        prev = i;
        return result;
    });
};

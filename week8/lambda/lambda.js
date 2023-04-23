
/**
 * Identity function, aka "I" in the SKI calculus or "Ibis" (or "Idiot") in the Smullyan bird metaphors.
 * The function is pure and runs in O(1). Function calls can be inlined.
 * @template a
 * @param    {a} x
 * @returns  {a} the parameter {@link x} unchanged.
 * @example
 * id(1) === 1
 */
const id    = x => x;

/**
 * A function with two parameters in curried form, that returns the first of the two parameters.
 * @type { <a> (x:a) => (...*) => a  }
 * @example
 * konst(42)(null) === 42;
 */
const konst = x => _ => x;

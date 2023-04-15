
// requires util.js


// extending the prototype of many objects
( () => {
    const ok = [];

    const collect = [];

    (10).times( n => collect.push(n) );

    ok.push(collect.length === 10);
    ok.push(collect[0]     ===  0);
    ok.push(collect[9]     ===  9);

    report("util-times1", ok);
}) ();

( () => {
    const ok = [];

    const number = /** @type { INumber } */ 10;  // example with intersection type
    const collect = number.times( n => n+1 );

    ok.push(collect.length === 10);
    ok.push(collect[0]     ===  1);
    ok.push(collect[9]     === 10);

    report("util-times2", ok);
}) ();

( () => { // this has nothing to do with our utility, just for trying out jsDoc types
    const ok = [];

    // design by capability
    /** @param { {toNumber:Function} } x */
    const functionUsingToString = x => x.toNumber();

    const ten = { toNumber: () => 10 };
    const result = functionUsingToString(ten);

    ok.push(result === 10);

    report("util-toNumber", ok);
}) ();

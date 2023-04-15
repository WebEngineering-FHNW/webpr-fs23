// requires lambda.js

(() => {
    const ok = [];

    ok.push(id(id) === id);
    ok.push(id(1)  === 1);

    ok.push(konst(42)(0)    === 42);
    ok.push(konst(42)(1)    === 42);
    ok.push(konst(42)(null) === 42);

    report("lambda", ok);
})();

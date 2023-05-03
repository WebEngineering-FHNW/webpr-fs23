

( () => {
    const ok = [];

    ok.push(String([...Iterator(0, i=> i < 5, i=> i + 1) ]) === "0,1,2,3,4");
    ok.push(String([...Iterator(0, i=> i < 0, i=> i + 1) ]) === "");
    ok.push(String([...Iterator(0, i=> i < 1, i=> i + 1) ]) === "0");


    report("iterator", ok);
}) ();
( () => {
    const ok = [];

    ok.push(String([...Range(5)]) === "0,1,2,3,4");
    ok.push(String([...Range(0)]) === "");
    ok.push(String([...Range(1)]) === "0");


    report("range", ok);
}) ();
( () => {
    const ok = [];

    ok.push(String([...Fib(10)]) === "0,1,1,2,3,5,8");


    report("fib", ok);
}) ();

// requires lambda.js

const lambdaOk = [];

lambdaOk.push(id(id) === id );

lambdaOk.push(konst(5)(1) === 5 );
lambdaOk.push(konst(true)(null) === true );
lambdaOk.push(konst(id)(undefined) === id );

lambdaOk.push(F(1)(5) === 5 );
lambdaOk.push(F(null)(true) === true );
lambdaOk.push(F(undefined)(id) === id );

const pair12 = Pair(1)(2);
lambdaOk.push(pair12(fst) === 1 );
lambdaOk.push(pair12(snd) === 2 );

const updatedPair = Pair (pair12(fst) + 1) (pair12(snd));

// test result report
if ( lambdaOk.every(elem => elem) ) {
    document.writeln("All " + lambdaOk.length + " tests ok.");
} else {
    document.writeln("Not all tests ok! Details:");
    for (let i = 0; i < lambdaOk.length; i++) {
        if(lambdaOk[i]) {
            document.writeln("Test "+ i +" ok");
        } else {
            document.writeln("Test "+ i +" failed");
        }
    }
}

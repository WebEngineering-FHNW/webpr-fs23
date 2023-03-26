"use strict";


const bar = extend => document.writeln("+" + "-".repeat(extend) + "+");

// test result report
// report :: String, [Bool] -> DOM ()
const report = (origin, ok) => {
    const extend = 20;
    if ( ok.every( elem => elem) ) {
        document.writeln(" " + String(ok.length).padStart(3) + " tests in " + String(origin).padEnd(extend) + " ok.");
        return;
    }
    const reportLine = "    Failing tests in " + String(origin).padEnd(extend);
    bar(reportLine.length);
    document.writeln("|" + reportLine+ "|");
    for (let i = 0; i < ok.length; i++) {
        if( ! ok[i]) {
            document.writeln("|    Test #" + String(i).padStart(3) + " failed                     |");
        }
    }
    bar(reportLine.length);
};




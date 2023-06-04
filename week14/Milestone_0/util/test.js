"use strict";

// todo: jsdoc

/**
 * @typedef AssertType
 * @template _T_
 * @property { () => Array<Boolean> } getOk - the assertion results
 * @property { (actual:_T_, expected:_T_ ) => void } equals - test on identity
 */
/**
 * @return { AssertType }
 * @constructor
 */
const Assert = () => {
    const ok = [];

    const equals = (actual, expected) => {
        const result = (actual === expected);
        if (! result) {
           console.error(`not equal! actual was '${actual}' but expected '${expected}'`);
        }
        ok.push(result);
    };
    return {
        getOk: () => ok,
        equals: equals,
    }
};

/**
 * @private
 */
const bar = extend => document.writeln("+" + "-".repeat(extend) + "+");
/**
 * @private
 */
const fill = (str, extend) => {
    const len = str.toString().length; // in case str is not a string
    if (len > extend) {
        return str;
    }
    return " ".repeat(extend - len);
};
/**
 * @private
 */
const padLeft = (str, extend) => "" + fill(str, extend) + str; // todo: use new stdlib function
/**
 * @private
 */
const padRight = (str, extend) => "" + str + fill(str, extend);
/**
 * @private
 */
const report = (origin, ok) => {
    const extend = 20;
    if ( ok.every( elem => elem) ) {
        document.writeln(" "+ padLeft(ok.length, 3) +" tests in " + padRight(origin, extend) + " ok.");
        return;
    }
    const reportLine = "    Failing tests in " + padRight(origin, extend);
    bar(reportLine.length);
    document.writeln("|" + reportLine+ "|");
    for (let i = 0; i < ok.length; i++) {
        if( ! ok[i]) {
            document.writeln("|    Test #"+ padLeft(i, 3) +" failed                     |");
        }
    }
    bar(reportLine.length);
};

/**
 * @callback TestCallback
 * @param { AssertType } assert - what to execute as a test
 * @return void
 */

/**
 * @param { String } origin - what the test is about
 * @param { TestCallback } callback
 * @return void
 * @example
 * test("my test", assert => { assert.equals(true, true); } );
 */
const test = (origin, callback) => {
    const assert = Assert();          //    das ok anlegen
    callback(assert);                 //    das ok befüllen
    report(origin, assert.getOk());   //    report mit name und ok aufrufen
};

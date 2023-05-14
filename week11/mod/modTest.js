/**
 * @module mod/modTest Testing how the module system works
 */

import { pi, a, b, setA, setB } from './mod.js'  // <- note the URL format !
import { report }               from '../util/test.js'

( () => {
    const ok = [];

    ok.push(a === null);
    ok.push(b === null);

    setA("Dierk"); // there is no object exposed and so no target to attack
    setB("König");

    ok.push(a === "Dierk");
    ok.push(b === "König");

    // console.log(x); // newly introduced global x should not be visible but when using bundlers, it is

    // this kind of test does not work with the bundler as it checks the erroneous assignment
    // try {
    //     a = "shall not work";
    //     ok.push(false);
    // } catch (e) {
    //     ok.push("exported variables are read-only.")
    // }

    report("mod-singleton", ok);
}) ();




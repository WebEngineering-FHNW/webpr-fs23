/**
 * @module util/test The testing facility
 */
export { report }

/**
 * Appends the {@link message} to the DOM element with id 'out'.
 * @private
 * @impure side effect on the DOM
 * @param { String } message
 */
const write = message => {
    const out = document.getElementById('out');
    out.textContent += message + "\n";
};

/**
 * Writes a bar of {@link extend} characters
 * @private
 * @param { Number } extend - length of the horizontal bar
 */
const bar = extend => write("+" + "-".repeat(extend) + "+");

/**
 * Report the test results as a summary if they are all {@link ok} or detailed otherwise
 * @param { String }        origin - where the test results come from. Describes the functionality under test.
 * @param { Array<Boolean>} ok     - collection of test results
 */
const report = (origin, ok) => {
    const extend = 20;
    if ( ok.every( elem => elem) ) {
        write(" " + String(ok.length).padStart(3) + " tests in " + String(origin).padEnd(extend) + " ok.");
        return;
    }
    const reportLine = "    Failing tests in " + String(origin).padEnd(extend);
    bar(reportLine.length);
    write("|" + reportLine + "|");
    ok.forEach( (result, index) => {
        if( ! result ) {
            write("|    Test #" + String(index).padStart(3) + " failed                     |");
        }
    });
    bar(reportLine.length);
};

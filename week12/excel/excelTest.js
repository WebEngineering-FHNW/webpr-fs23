
import { TestSuite }                from "../util/test.js"
import { startExcel, refresh, n }   from "./excel.js"

const excelSuite = TestSuite("excel/excel");

excelSuite.add("excel", assert => {

    const tbody = document.createElement("TBODY");
    tbody.setAttribute("ID","dataContainer");
    const body = document.getElementsByTagName("BODY")[0];
    body.appendChild(tbody);

    startExcel();
    refresh();
    const resultCell = document.getElementById("C3");
    assert.is(n(resultCell), 6);

    body.removeChild(tbody);

});

excelSuite.run();

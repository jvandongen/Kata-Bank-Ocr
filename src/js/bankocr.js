$( document ).ready(function() {
    var lines = readFromFile('./paper_docs/accounts.txt');
    //console.log(lines);
    //console.log(lines[0]);
    var firstDigit = createPaperDigit(lines);
    console.log(isPaperDigitOne(firstDigit));

});

function readFromFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status == 0)) {
            return rawFile.responseText.split('\n');
        }
        return null;
    }
    rawFile.send(null);
    return rawFile.onreadystatechange();
}

function createPaperDigit(lines) {
    var firstDigit = [];
    for (var line = 0; line < lines.length; line++) {
        firstDigit.push(lines[line].slice(0, 3));
    }
    return firstDigit;
}

function isPaperDigitOne(paperDigit) {
    return (paperDigit[0][1] === " " && paperDigit[1][1] === " ")
}

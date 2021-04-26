let n = 0;

function hello() {
    alert("Hello there!")
}

function incrementByOne() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}




function consoleLogPlusOne() {
    n++;
    console.log(n)
}
function dis(val) {
    document.getElementById("result").value += val
}

function solve() {
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value = y
    document.getElementById("previous").value = x
}

function percent() {
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value = y / 100
}

function clr() {
    document.getElementById("result").value = ""
    document.getElementById("previous").value
}
function del(){
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}
function sqrt() {
    let x = document.getElementById("result").value
    let y = math.sqrt(x)
    document.getElementById("result").value = y
}
function ans() {
    let x = document.getElementById("previous").value
    document.getElementById("result").value = x
}

document.addEventListener('keypress', function (event) {
    if (event.key === '0') {
        event.preventDefault();
        document.getElementById("zero").click();
    } else if (event.key === '1') {
        event.preventDefault();
        document.getElementById("one").click();
    } else if (event.key === '2') {
        event.preventDefault();
        document.getElementById("two").click();
    } else if (event.key === '3') {
        event.preventDefault();
        document.getElementById("three").click();
    } else if (event.key === '4') {
        event.preventDefault();
        document.getElementById("four").click();
    } else if (event.key === '5') {
        event.preventDefault();
        document.getElementById("five").click();
    } else if (event.key === '6') {
        event.preventDefault();
        document.getElementById("six").click();
    } else if (event.key === '7') {
        document.getElementById("seven").click();
    } else if (event.key === '8') {
        document.getElementById("eight").click();
    } else if (event.key === '9') {
        document.getElementById("nine").click();
    } else if (event.key === '+') {
        document.getElementById("add").click();
    } else if (event.key === '-') {
        document.getElementById("subtract").click();
    } else if (event.key === '*') {
        document.getElementById("multiply").click();
    } else if (event.key === '/') {
        document.getElementById("divide").click();
    } else if (event.key === 'Enter') {
        document.getElementById("equal").click();
    } else if (event.key === 'Backspace') {
        document.getElementById("delete").click();
    } else if (event.key === 'c') {
        document.getElementById("clear").click();
    } else if (event.key === '.') {
        document.getElementById("dot").click();
    }
});
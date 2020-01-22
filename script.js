function check(x, y) {
    var correctAnswers = ['0.006', '3.6e+22', '3.6E+22', '2e+30', '2E+30']
    var answer = document.getElementById(x).value;

    if(y === 1) {
        if(answer === correctAnswers[0]) {
            document.getElementById('correct').style.display='inline';
            document.getElementById('incorrect').style.display='none';
        }
        else {
            document.getElementById('incorrect').style.display='inline';
            document.getElementById('alter1').style.display='inline';
        }
    }
    if(y === 2) {
        if(answer === correctAnswers[1]) {
            document.getElementById('correct2').style.display='inline';
            document.getElementById('incorrect2').style.display='none';
        }
        else if(answer === correctAnswers[2]) {
            document.getElementById('correct2').style.display='inline';
            document.getElementById('incorrect2').style.display='none';
        }
        else {
            document.getElementById('incorrect2').style.display='inline';
            document.getElementById('alter2').style.display='inline';
        }
    }
    if(y === 3) {
        if(answer === correctAnswers[3]) {
            document.getElementById('correct3').style.display='inline';
            document.getElementById('incorrect').style.display='none';
        }
        else if(answer === correctAnswers[4]) {
            document.getElementById('correct3').style.display='inline';
            document.getElementById('incorrect').style.display='none';
        }
        else {
            document.getElementById('incorrect').style.display='inline';
        }
    }
}

function redirect(x) {
    document.getElementById(x).style.display='inline-block';
}

function hide(i) {
    document.getElementById(i).style.display='none';
}
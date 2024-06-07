// var vs let vs const
/*
    var | let | const
    var: 더이상 사용되지 않는 변수. let + const
    let: 값을 변경할 수 있는 변수.
    const: 값을 변경할 수 없는 상수.
*/

// 변수 비교 함수.
function compareVariable() {
    let number1 = 10;
    const number2 = 10;

    number1 = 20;
    // number2 = 20; 작동하지 않음.
    console.log('number1 : ' + number1);
    console.log('number2 : ' + number2);
}

// ID란에 입력된 값을 팝업창에 띄우기.
function popId() {
    alert(document.getElementById('text_id').value);
}

// ID란에 입력된 값을 팝업창에 띄우기. (공백 검사)
function popIdWithCheck() {
    let userId = document.getElementById('text_id').value;

    if (!userId) { // document.getElementById('text_id').value == ''와 일치한다.
        alert('아이디를 입력해주세요.');
    } else {
        alert(userId);
    }
}

// 나만의 함수를 만들고, 버튼을 클릭하면 호출하기.
function myFunction() {
    alert('1');
    alert('2');
    alert('3');
}
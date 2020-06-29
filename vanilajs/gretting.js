const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

    const USER_LS = "currentUser",
        SHOWING_CN ="showing";

    //입력한 user정보를 저장하는 함수 생성
    function savaName(text){
        //setItem메서드 이용해서 USER_LS = currentUser
        localStorage.setItem(USER_LS, text);
    }    

    //submit에 정보가 제출되면 실행될 함수
    function submitHandler(e){
        //submit에 정보가 제출되면 실행되는걸 디폴트하는 메서드
        event.preventDefault();
        //input에 입력된 값을 담는 변수 currentValue
        const currentValue = input.value;
        //paintGreeting() 함수에 currentValue 값을 넣는다.
        paintGreeting(currentValue);
        savaName(currentValue);
    }

    //loadName에 user정보가 없을때 실행할 함수 생성 askForName()
    function askForName(){
        form.classList.add(SHOWING_CN);
        //유저가 정보를 제출하면 실행될 이벤트 추가 (submit이벤트 , submitHandler)
        form.addEventListener("submit", submitHandler);
    }

    //loadName함수안에 currentUser정보가 있을때 색을 칠하는 함수생성 paintGreeting()
    function paintGreeting(text){
        //글자를 칠하기 위해서 form태그를 없애야함.
            form.classList.remove(SHOWING_CN);
        //이 함수가 실행되면 greeting에 showing 클래스를 추가한다
        //showing클래스에는 css로 display block을 적용해놨음
        greeting.classList.add(SHOWING_CN);
        greeting.innerText = `hello ${text}`;
    }

    //localstorage에서 정보를 가져오는 함수 생성 loadName
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // user가 없을때 
        askForName();
    } else {
        //user가 있을때
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}

init()
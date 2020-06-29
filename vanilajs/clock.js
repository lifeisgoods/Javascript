const clockContainer = document.querySelector('.js-clock'),
      clockTitle = clockContainer.querySelector('h1');

        //현재 시간을 가져오는 함수를 생성 getTime
      function getTime(){
          //시간을 가져오는 객체 new Date()
        const date = new Date();
        //get.minutes(분가져오기)
        const minutes = date.getMinutes();
        //get.Hours (시간 가져오기)
        const hours = date.getHours();
        //get.second(초를 가져오기)
        const seconds = date.getSeconds();
        //clocktitle(h1태그)에 html text를 삽입 
        //앞자리가 0이되면 표시해주기 위해서 삼항연산자를 대입해준다
        //기존의 ${seconds}에서 삼항연산자로 조건을 넣어줌 
        //${seconds > 10 ? `0${seconds}` : seconds}  = 초가 10보다 작으면 앞에 0과 초를 출력하고 10보다 크면 그냥 초만 출력한다.
        clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds }`;
      }



function init(){
    //위에서 만든 시간을 가져오는 함수를 호출(getTime)
    //getTime은 시간 분 초를 가져오고, 가져온것을 innerText를 통해 h1 태그에 삽입해주는 함수로 만들었음
    getTime();
    //시간을 가져오는 함수 getTime을 실행할 시간을 정해주는 함수 setInterval(함수,실행할시간) 
    //getTime을 1초마다 실행한다.
    setInterval(getTime, 1000);

}

init()
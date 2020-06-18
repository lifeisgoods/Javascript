    
        var Links = {
            setColor:function(color){
                var alist = document.querySelectorAll('a');
                for(i = 0; i < alist.length; i++){
                alist[i].style.color= color;
                }
            }
        }

        var body = {
            setColor:function(color){
                document.querySelector('body').style.color = color;
            }, //객체의 프로퍼티 끼리 구분할때는 콤마를 찍어야함

            setBackgroundColor:function(color){
                document.querySelector('body').style.backgroundColor= color;
            }
        }

        function nightDayHandler(self){
            var target = document.querySelector('body');
                if(self.value ==='night'){
            body.setBackgroundColor('black');
            body.setColor('white');
            self.value ='day';
            
               Links.setColor('red');
            } else {
                body.setBackgroundColor('white');
                body.setColor('black');
                self.value ='night';

                Links.setColor('gray');
             }
            }
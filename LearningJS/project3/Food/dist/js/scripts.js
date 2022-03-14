window.addEventListener('DOMContentLoaded', ()=>{

    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent(){
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item=>{
            item.classList.remove('tabheader__item_active');
        });
    }
    function showTabContent (i=0){
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show','fade');
        tabs[i].classList.add('tabheader__item_active');
    }

    
    hideTabContent();
    showTabContent();
    tabsParent.addEventListener('click',(event)=>{
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,i) =>{
                if(item==target){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer
    const customeTimer = {
        // определяем, сколько времени осталось открутить таймеру
        getTimeRemain: function (endtime){
            const total = new Date (endtime) - new Date(),
                    days = Math.floor(total / (1000 * 60 * 60 * 24)),
                    hours = Math.floor(total / (1000*60*60)%24),
                    minutes = Math.floor(total / (1000*60)%60),
                    seconds = Math.floor((total / 1000)%60);
            return {total,days,hours,minutes,seconds};
        },
        // делаем числа двухзначными    
        twoDigits: function (num){
            if(typeof(num)=='number' && num < 10){
                return '0'+num;
            }
            else {return num;}
        },
        make: function (selector, endTime){
            const data = customeTimer.getTimeRemain(endTime),
                  box = document.querySelector(selector),
                  days = box.querySelector('#days'),
                  hours = box.querySelector('#hours'),
                  minutes = box.querySelector('#minutes'),
                  seconds = box.querySelector('#seconds');
            if (data.total && data.total > 0){
                days.innerHTML=customeTimer.twoDigits(data.days);
                hours.innerHTML=customeTimer.twoDigits(data.hours);
                minutes.innerHTML=customeTimer.twoDigits(data.minutes);
                seconds.innerHTML=customeTimer.twoDigits(data.seconds);
                
                setTimeout(customeTimer.make,1000,selector,endTime);
            }
            else{
                days.innerHTML=customeTimer.twoDigits(0);
                hours.innerHTML=customeTimer.twoDigits(0);
                minutes.innerHTML=customeTimer.twoDigits(0);
                seconds.innerHTML=customeTimer.twoDigits(0);
            }
        }
    };
    
    // console.log(new Date());
    customeTimer.make('.promotion__timer', '2022-03-16');
});


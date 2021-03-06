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
    customeTimer.make('.promotion__timer', '2022-03-16');


    //Modal
    const modalBtn = document.querySelectorAll('[data-modal]'),
          modalCloseBtn = document.querySelector('[data-modal-close]'),
          modal = document.querySelector('.modal');
    modalBtn.forEach(function (item){
        item.addEventListener('click', showModal);
    });
    
    
    modal.addEventListener('click', (e)=>{
        console.log(e);
       if(e.target==modal || e.target==modalCloseBtn) {
        closeModal();
       }

    });
    document.addEventListener('keydown', (e)=>{
        if (e.code=='Escape' && modal.classList.contains('show')){
            closeModal();
        }
    });
    function showModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow='hidden';
        clearTimeout(modalTimerId);
    }
    function showModalByScroll(){
        if(document.documentElement.offsetHeight - (document.documentElement.scrollTop + document.documentElement.clientHeight + 1)<0){
            document.removeEventListener('scroll', showModalByScroll);
            showModal();
            
        }
    }
    function closeModal(){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow='';
    }

    const modalTimerId = setTimeout(showModal,5000);
    document.addEventListener('scroll', showModalByScroll);
    
// Menu with classes

class Menu {
    constructor (title, descr, src, alt, price, parentSelector, ...classes){
        this.title = title;
        this.descr = descr;
        this.src = src;
        this.alt = alt;
        this.price = price;
        this.classes = classes.join(' ');
        this.parent = document.querySelector(parentSelector);
    }

    render(){
        this.el = document.createElement('div');
        if (this.classes !='') {this.el.classList.add(this.classes);}
        this.el.innerHTML=`
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            </div>
        `;
        this.parent.append(this.el);
    }

}

new Menu (
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        '"img/tabs/vegy.jpg"',
        '"vegy"',
        229,
        '.menu .container',
        'menu__item'
        ).render();
new Menu (
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    "img/tabs/elite.jpg",
    '"elite"',
    550,
    '.menu .container',
    'menu__item'
    ).render();
new Menu (
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    '"img/tabs/post.jpg"',
    '"post"',
    430,
    '.menu .container',
    'menu__item'
    ).render();
});


'use strict'

const data = JSON.parse(`[
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]`
);

function toggleActiveClass(classNameBlock,toggleClassName) {
    const block = document.querySelector(classNameBlock);
    if(block.classList.contains(toggleClassName)) block.classList.remove(toggleClassName)
    else block.classList.add(toggleClassName)
}
function deleteActiveClass(classNameBlock,toggleClassName) {
    const block = document.querySelector(classNameBlock);
    if(block.classList.contains(toggleClassName)) block.classList.remove(toggleClassName)
}
function addActiveClass(classNameBlock,toggleClassName) {
    const block = document.querySelector(classNameBlock);
    if(!block.classList.contains(toggleClassName)) block.classList.add(toggleClassName)
}

function arrayToString(array) {
    let string = '';
    array.forEach(item => {
        if(array[array.length - 1] == item) string += `${item}`
        else string += `${item}, `
    })
    return string;
}
function createPopup(name) {
    const person = data.filter(item => item.name == name)[0];
    const newBlock = document.createElement('div');
    newBlock.classList.add('popup')
    newBlock.innerHTML = `<button type="button" class="popup_close-btn"></button>     
        <div class="popup_img">
            <img src=${person.img} alt=${person.name}>
        </div>
        <div class="popup_description">            
            <div class="popup_description_breed">
                <h4 class="name-animal">${person.name}</h4>
                <p><span class="animal-type">${person.type}</span> - <span class="animal-breed">${person.breed}</span>
                </p>
            </div>
            <p class="popup_description_text">${person.description}</p>
            <ul class="popup_description_list">
                <li class="list-item">Age: <span class="dinamic age">${person.age}</span></li>
                <li class="list-item">Inoculations: <span class="dinamic inoculations">${arrayToString(person.inoculations)}</span></li>
                <li class="list-item">Diseases: <span class="diseases dinamic">${arrayToString(person.diseases)}</span></li>
                <li class="list-item">Parasites: <span class="dinamic parasites">${arrayToString(person.parasites)}</span></li>
            </ul>
        </div>`;
    document.querySelector('body').prepend(newBlock);
}
function addEventClosePopup() {
    const closeBtn = document.querySelector('.popup_close-btn');
    closeBtn.addEventListener('click', () => {
        closePopup();
    })    
}
function addEventOpenPopup() {
    const slider = document.querySelector('.wrapper-slider');
    slider.addEventListener('click', (e) => {        
        let card = e.target.closest('.card');
        if(e.target.classList.contains('card') || card) {
            createPopup(card.dataset.name);
            addEventClosePopup();
            addActiveClass('.overlay', 'active');
            addActiveClass('body','active');
        }
    })
}
function deletePopup() {
    const popup = document.querySelector('.popup');
    if(popup) popup.remove();
}
function closePopup() {
    deleteActiveClass('.overlay','active'); 
    deleteActiveClass('body','active');    
    deletePopup();
}
addEventOpenPopup();

function toggleBurger() {
    const btn = document.querySelector('.burger');
    const overlay = document.querySelector('.overlay');
    const nav_items = document.querySelectorAll('.navbar-list a');
    const burger_overlay = document.querySelector('.burger-overlay');
    btn.addEventListener('click', () => {
        toggleActiveClass('.navbar', 'navbar-active');
        toggleActiveClass('.burger', 'burger-active');
        toggleActiveClass('.burger-overlay', 'active');
        toggleActiveClass('body', 'active');
        toggleActiveClass('.logo', 'active');
    })
    burger_overlay.addEventListener('click', (e) => {
        deleteActiveClass('.navbar', 'navbar-active');
        deleteActiveClass('.burger', 'burger-active');
        deleteActiveClass('.burger-overlay', 'active');    
        deleteActiveClass('body', 'active'); 
        deleteActiveClass('.logo', 'active');    
    })
    overlay.addEventListener('click', (e) => {
        deleteActiveClass('.overlay', 'active');    
        deleteActiveClass('body', 'active'); 
        closePopup();     
    })
    nav_items.forEach(item => item.addEventListener('click', () => {
        deleteActiveClass('.navbar', 'navbar-active');
        deleteActiveClass('.burger', 'burger-active');        
        deleteActiveClass('.burger-overlay', 'active'); 
        deleteActiveClass('body', 'active'); 
        deleteActiveClass('.logo', 'active');
    }))
}

toggleBurger();

const prev = document.querySelector('.prev'), 
    next = document.querySelector('.next'), 
    btnLastPage = document.querySelector('.next-max'), 
    btnFirstPage = document.querySelector('.prev-max'), 
    slider_list_wrapper = document.querySelector('.wrapper-slider'), 
    sliders = slider_list_wrapper.querySelectorAll('.slider-item'), 
    content = document.querySelector('.content'), 
    max = ['max',48,6,8], 
    medium = ['medium',48,8,6], 
    small = ['small',48,16,3], 
    pageObject = { 
        max: 1, 
        medium: 1, 
        small: 1 
    };
let randomArray = [];

createStartSlider();
watchForWindow();

content.addEventListener('click', (e) => {
    const sliderList = document.querySelectorAll('.slider-list .slider-item');
    const max = sliderList.length;
    oneStepPage(e, sliderList, max);
    toExtremePage(e, sliderList, max);
});

function createSlider(size = 'max', cards, slides, cardsOnSlide) {
    slider_list_wrapper.innerHTML = '';
    const newSliderList = document.createElement('ul');
    newSliderList.classList.add(size, 'slider-list');
    newSliderList.dataset.id = size;
    if(randomArray.length === 0) randomArray = makeRandomArray(cards);
    for (let i = 0; i < slides; i++) {
        let newBlock = document.createElement('li');
        newBlock.classList.add('slider-item');
        for (let k = 0; k < cardsOnSlide; k++) {
            newBlock.append(createNewCard([randomArray[k + i*cardsOnSlide]]));
        }        
        newSliderList.append(newBlock);
    }
    slider_list_wrapper.append(newSliderList);

    const sliderList = document.querySelectorAll('.slider-list .slider-item');
    //changePageNumber(pageObject[size]);
    showPage(sliderList, pageObject[size] - 1);
    if(size == 'max' && pageObject[size] == 1) {
        disablePrevAndEnableNext();
    }
    else if(size == 'max' && pageObject[size] == 6) disableNextEneblePrev();
    else if(size == 'medium' && pageObject[size] == 1) disablePrevAndEnableNext();
    else if(size == 'medium' && pageObject[size] == 8) disableNextEneblePrev();
    else if(size == 'small' && pageObject[size] == 1) disablePrevAndEnableNext();
    else if(size == 'small' && pageObject[size] == 16) disableNextEneblePrev();
    else eneblePrevAndNext();
}

function createNewCard(i) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.setAttribute('data-name', `${data[i].name}`)
    newCard.innerHTML = `
        <img src='${data[i].img}' alt=${data[i].name}>
        <span class="animal-name">${data[i].name}</span>
        <button data-name='${data[i].name}' type="button">Learn more</button>
    `
    return newCard;
}
function createStartSlider() {
    disableBtn('prev');
    //disableBtn('prev-max');
    if(window.innerWidth >= 1280) createSlider(...max);
    else if(window.innerWidth >= 768 && window.innerWidth < 1280) createSlider(...medium);
    else if(window.innerWidth < 768) createSlider(...small);
}
function showPage(sliderList, number) {
    sliderList.forEach(item => item.style = null)
    sliderList[number].style.opacity = 1;
    sliderList[number].style.zIndex = 1;
}
function oneStepPage(e, sliderList, max) {
    let sliderId = document.querySelector('.slider-list').dataset.id;
    if(e.target.classList.contains('next') && pageObject[sliderId] < max) { 
        pageObject[sliderId]++;
        changePageNumber(pageObject[sliderId]);
        showPage(sliderList, pageObject[sliderId] - 1)
        if (pageObject[sliderId] == max) { 
            disableBtn('next');
            disableBtn('next-max');
        } else if(pageObject[sliderId] == 2) { 
            enableBtn('prev-max'); 
            enableBtn('prev');
        }
    } else if(e.target.classList.contains('prev') && pageObject[sliderId] > 1) {
        if(pageObject[sliderId] == 2) { 
            disableBtn('prev');
            disableBtn('prev-max');
        } else if(pageObject[sliderId] == max) {
            enableBtn('next-max');
            enableBtn('next');
        }
        pageObject[sliderId]--;
        changePageNumber(pageObject[sliderId]);
        showPage(sliderList, pageObject[sliderId] - 1);
        
    }
}
function toPage(number) {
    let sliderId = document.querySelector('.slider-list').dataset.id;
    pageObject[sliderId] = number;
    changePageNumber(number);
}
function toExtremePage(e, sliderList, max) {
    if(e.target.classList.contains('next-max')) {
        toPage(max);
        showPage(sliderList, max-1);
        disableBtn('next-max');
        disableBtn('next');
        enableBtn('prev-max');
        enableBtn('prev');
    }
    if(e.target.classList.contains('prev-max')) {
        toPage(1);
        showPage(sliderList, 0);
        disableBtn('prev-max');
        disableBtn('prev');
        enableBtn('next-max');
        enableBtn('next');
    }
}
function makeRandomArray(count) {
    let array6 = [];
    let array8 = [];
    const finishArray = [];
    function addNumber() {
        const random = Math.floor(Math.random()*8);
        const isRelevant6 = !array6.includes(random);
        const isRelevant8 = !array8.includes(random);
        if(isRelevant6 && isRelevant8) {
            finishArray.push(random);
            array6.push(random);
            array8.push(random);
            if(array6.length > 6) array6.shift();
            if(array8.length > 7) array8 = [];
        } else {
            addNumber();
        }
    }
    for(let i = 1 ; i <= count; i++) {
        addNumber();
    }
    return finishArray;
}
function watchForWindow() {
    window.addEventListener('resize', () => {
        let isMax = slider_list_wrapper.querySelector('.max');
        let isMedium = slider_list_wrapper.querySelector('.medium');
        let isSmall = slider_list_wrapper.querySelector('.small');
        if(window.innerWidth >= 1280 && !isMax) createSlider(...max);
        else if(window.innerWidth >= 768 && window.innerWidth < 1280 && !isMedium) createSlider(...medium);
        else if(window.innerWidth < 768 && !isSmall) createSlider(...small);
    })
}
function changePageNumber(number) {
    const pageNumberBlock = document.querySelector('.page');
    pageNumberBlock.innerHTML = number;
}
function disableBtn(className) {
    document.querySelector(`.${className}`).disabled = true;
}
function enableBtn(className) {
    document.querySelector(`.${className}`).disabled = false;
}
function disablePrevAndEnableNext() {
    disableBtn('prev');
    disableBtn('prev-max');
    enableBtn('next');
    enableBtn('next-max');
}
function disableNextEneblePrev() {
    disableBtn('next-max');
    disableBtn('next');
    enableBtn('prev');
    enableBtn('prev-max');
}
function eneblePrevAndNext() {
    enableBtn('prev');
    enableBtn('prev-max');
    enableBtn('next');
    enableBtn('next-max');
}
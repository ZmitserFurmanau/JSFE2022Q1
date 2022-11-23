const DATA = JSON.parse(
  `[
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
    const BLOCK = document.querySelector(classNameBlock);
    if(BLOCK.classList.contains(toggleClassName)) BLOCK.classList.remove(toggleClassName)
    else BLOCK.classList.add(toggleClassName)
}
function deleteActiveClass(classNameBlock,toggleClassName) {
    const BLOCK = document.querySelector(classNameBlock);
    if(BLOCK.classList.contains(toggleClassName)) BLOCK.classList.remove(toggleClassName)
}
function addActiveClass(classNameBlock,toggleClassName) {
    const BLOCK = document.querySelector(classNameBlock);
    if(!BLOCK.classList.contains(toggleClassName)) BLOCK.classList.add(toggleClassName)
}

function toggleBurger() {
    const BTN = document.querySelector('.burger');
    const OVERLAY = document.querySelector('.overlay');
    const NAV_ITEMS = document.querySelectorAll('.navbar-list a');
    const BURGER_OVERLAY = document.querySelector('.burger-overlay');
    BTN.addEventListener('click', () => {
        toggleActiveClass('.navbar', 'navbar-active');
        toggleActiveClass('.burger', 'burger-active');
        toggleActiveClass('.burger-overlay', 'active');
        toggleActiveClass('body', 'active');
        toggleActiveClass('.logo', 'active');
    })
    OVERLAY.addEventListener('click', (e) => {
        deleteActiveClass('.overlay', 'active');    
        deleteActiveClass('body', 'active'); 
        closePopup();     
    })
    NAV_ITEMS.forEach(item => item.addEventListener('click', () => {
        deleteActiveClass('.navbar', 'navbar-active');
        deleteActiveClass('.burger', 'burger-active');        
        deleteActiveClass('.burger-overlay', 'active'); 
        deleteActiveClass('body', 'active'); 
        deleteActiveClass('.logo', 'active');
    }))
    BURGER_OVERLAY.addEventListener('click', (e) => {
        deleteActiveClass('.navbar', 'navbar-active');
        deleteActiveClass('.burger', 'burger-active');
        deleteActiveClass('.burger-overlay', 'active');    
        deleteActiveClass('body', 'active'); 
        deleteActiveClass('.logo', 'active');    
    })
}
toggleBurger();

function arrayToString(array) {
    let string = '';
    array.forEach(item => {
        if(array[array.length - 1] == item) string += `${item}`
        else string += `${item}, `
    })
    return string;
}
function createPopup(name) {
    const PERSON = DATA.filter(item => item.name == name)[0];
    const NEW_BLOCK = document.createElement('div');
    NEW_BLOCK.classList.add('popup')
    NEW_BLOCK.innerHTML = `<button type="button" class="popup_close-btn"></button>     
        <div class="popup_img">
            <img src=${PERSON.img} alt=${PERSON.name}>
        </div>
        <div class="popup_description">            
            <div class="popup_description_breed">
                <h4 class="name-animal">${PERSON.name}</h4>
                <p><span class="animal-type">${PERSON.type}</span> - <span class="animal-breed">${PERSON.breed}</span>
                </p>
            </div>
            <p class="popup_description_text">${PERSON.description}</p>
            <ul class="popup_description_list">
                <li class="list-item">Age: <span class="dinamic age">${PERSON.age}</span></li>
                <li class="list-item">Inoculations: <span class="dinamic inoculations">${arrayToString(PERSON.inoculations)}</span></li>
                <li class="list-item">Diseases: <span class="diseases dinamic">${arrayToString(PERSON.diseases)}</span></li>
                <li class="list-item">Parasites: <span class="dinamic parasites">${arrayToString(PERSON.parasites)}</span></li>
            </ul>
        </div>`;
    document.querySelector('body').prepend(NEW_BLOCK);
}
function addEventClosePopup() {
    const CLOSE_BTN = document.querySelector('.popup_close-btn');
    CLOSE_BTN.addEventListener('click', () => {
        closePopup();
    })    
}
function addEventOpenPopup() {
    const SLIDER = document.querySelector('.wrapper-slider');
    SLIDER.addEventListener('click', (e) => {        
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
    const POPUP = document.querySelector('.popup');
    if(POPUP) POPUP.remove();
}
function closePopup() {
    deleteActiveClass('.overlay','active'); 
    deleteActiveClass('body','active');    
    deletePopup();
}
addEventOpenPopup();

const PREV = document.querySelector('.prev');
const NEXT = document.querySelector('.next');
const BTN_LAST_PAGE = document.querySelector('.next-max');
const BTN_FIRST_PAGE = document.querySelector('.prev-max');
const SLIDER_LIST_WRAPPER = document.querySelector('.wrapper-slider');
const SLIDERS = SLIDER_LIST_WRAPPER.querySelectorAll('.slider-item');
const CONTENT = document.querySelector('.content');
const MAX = ['max',48,6,8];
const MEDIUM = ['medium',48,8,6];
const SMALL = ['small',48,16,3];
const PAGE_OBJECT = {max: 1, medium: 1, small: 1};

let randomArray = [];

createStartSlider();
watchForWindow();

CONTENT.addEventListener('click', (e) => {
    const SLIDERlIST = document.querySelectorAll('.slider-list .slider-item');
    const MAX = SLIDERlIST.length;
    oneStepPage(e, SLIDERlIST, MAX);
    toExtremePage(e, SLIDERlIST, MAX);
});

function createSlider(size = 'max', cards, slides, cardsOnSlide) {
    SLIDER_LIST_WRAPPER.innerHTML = '';
    const NEW_SLIDER_LIST = document.createElement('ul');
    NEW_SLIDER_LIST.classList.add(size, 'slider-list');
    NEW_SLIDER_LIST.dataset.id = size;
    if(randomArray.length === 0) randomArray = makeRandomArray(cards);
    for (let i = 0; i < slides; i++) {
        let newBlock = document.createElement('li');
        newBlock.classList.add('slider-item');
        for (let k = 0; k < cardsOnSlide; k++) {
            newBlock.append(createNewCard([randomArray[k + i*cardsOnSlide]]));
        }        
        NEW_SLIDER_LIST.append(newBlock);
    }
    SLIDER_LIST_WRAPPER.append(NEW_SLIDER_LIST);

    const SLIDER_LIST = document.querySelectorAll('.slider-list .slider-item');
    changePageNumber(PAGE_OBJECT[size]);
    showPage(SLIDER_LIST, PAGE_OBJECT[size] - 1);
    if(size == 'max' && PAGE_OBJECT[size] == 1) {
        disablePrevAndEnableNext();
    }
    else if(size == 'max' && PAGE_OBJECT[size] == 6) disableNextEnablePrev();
    else if(size == 'medium' && PAGE_OBJECT[size] == 1) disablePrevAndEnableNext();
    else if(size == 'medium' && PAGE_OBJECT[size] == 8) disableNextEnablePrev();
    else if(size == 'small' && PAGE_OBJECT[size] == 1) disablePrevAndEnableNext();
    else if(size == 'small' && PAGE_OBJECT[size] == 16) disableNextEnablePrev();
    else enablePrevAndNext();
}

function createNewCard(i) {
    const NEW_CARD = document.createElement('div');
    NEW_CARD.classList.add('card');
    NEW_CARD.setAttribute('data-name', `${DATA[i].name}`)
    NEW_CARD.innerHTML = `
        <img src='${DATA[i].img}' alt=${DATA[i].name}>
        <span class="animal-name">${DATA[i].name}</span>
        <button data-name='${DATA[i].name}' type="button">Learn more</button>
    `
    return NEW_CARD;
}
function createStartSlider() {
    disableBtn('prev');
    disableBtn('prev-max');
    if(window.innerWidth >= 1280) createSlider(...MAX);
    else if(window.innerWidth >= 768 && window.innerWidth < 1280) createSlider(...MEDIUM);
    else if(window.innerWidth < 768) createSlider(...SMALL);
}
function showPage(sliderList, number) {
    sliderList.forEach(item => item.style = null)
    sliderList[number].style.opacity = 1;
    sliderList[number].style.zIndex = 1;
}
function oneStepPage(e, sliderList, max) {
    let sliderId = document.querySelector('.slider-list').dataset.id;
    if(e.target.classList.contains('next') && PAGE_OBJECT[sliderId] < max) { 
        PAGE_OBJECT[sliderId]++;
        changePageNumber(PAGE_OBJECT[sliderId]);
        showPage(sliderList, PAGE_OBJECT[sliderId] - 1)
        if (PAGE_OBJECT[sliderId] == max) { 
            disableBtn('next');
            disableBtn('next-max');
        } else if(PAGE_OBJECT[sliderId] == 2) { 
            enableBtn('prev-max'); 
            enableBtn('prev');
        }
    } else if(e.target.classList.contains('prev') && PAGE_OBJECT[sliderId] > 1) {
        if(PAGE_OBJECT[sliderId] == 2) { 
            disableBtn('prev');
            disableBtn('prev-max');
        } else if(PAGE_OBJECT[sliderId] == max) {
            enableBtn('next-max');
            enableBtn('next');
        }
        PAGE_OBJECT[sliderId]--;
        changePageNumber(PAGE_OBJECT[sliderId]);
        showPage(sliderList, PAGE_OBJECT[sliderId] - 1);
        
    }
}
function toPage(number) {
    let sliderId = document.querySelector('.slider-list').dataset.id;
    PAGE_OBJECT[sliderId] = number;
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
    const FINISH_ARRAY = [];
    function addNumber() {
        const RANDOM = Math.floor(Math.random()*8);
        const IS_RELEVANT6 = !array6.includes(RANDOM);
        const IS_RELEVANT8 = !array8.includes(RANDOM);
        if(IS_RELEVANT6 && IS_RELEVANT8) {
            FINISH_ARRAY.push(RANDOM);
            array6.push(RANDOM);
            array8.push(RANDOM);
            if(array6.length > 6) array6.shift();
            if(array8.length > 7) array8 = [];
        } else {
            addNumber();
        }
    }
    for(let i = 1 ; i <= count; i++) {
        addNumber();
    }
    return FINISH_ARRAY;
}
function watchForWindow() {
    window.addEventListener('resize', () => {
        let isMax = SLIDER_LIST_WRAPPER.querySelector('.max');
        let isMedium = SLIDER_LIST_WRAPPER.querySelector('.medium');
        let isSmall = SLIDER_LIST_WRAPPER.querySelector('.small');
        if(window.innerWidth >= 1280 && !isMax) createSlider(...MAX);
        else if(window.innerWidth >= 768 && window.innerWidth < 1280 && !isMedium) createSlider(...MEDIUM);
        else if(window.innerWidth < 768 && !isSmall) createSlider(...SMALL);
    })
}
function changePageNumber(number) {
    const PAGE_NUMBER_BLOCK = document.querySelector('.page');
    PAGE_NUMBER_BLOCK.innerHTML = number;
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
function disableNextEnablePrev() {
    disableBtn('next-max');
    disableBtn('next');
    enableBtn('prev');
    enableBtn('prev-max');
}
function enablePrevAndNext() {
    enableBtn('prev');
    enableBtn('prev-max');
    enableBtn('next');
    enableBtn('next-max');
}
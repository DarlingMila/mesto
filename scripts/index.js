const gallery = document.querySelector('.gallery-grid');
const initialCards = [
 {
   name: 'Архыз',
   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
 {
   name: 'Челябинская область',
   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {   
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

// Добавление карточек из массива
initialCards.forEach(function (item) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__title').textContent = item.name;
  cardElement.querySelector('.card__img').src = item.link;
  cardElement.querySelector('.card__img').alt = item.name;

  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
  evt.target.classList.toggle('card__like-button_active');
  });

  cardElement.querySelector('.card__bin-button').addEventListener('click', function (evt) {
    const item = evt.target.closest('.card');
   
    if (item) {
       item.remove();
    }
  })

  cardElement.querySelector('.card__img').addEventListener('click', function () {
    document.querySelector("#bigger-img").classList.add('popup_opened');
    
    document.querySelector('.popup__img').src = item.link;
    document.querySelector('.popup__img-title').textContent = item.name;

  });

  gallery.append(cardElement);
});

// Profile Form
let profileOpenButton = document.querySelector('.profile__edit-button');
let profileCloseButton = document.querySelector('#profileCloseButton');

let formElement = document.querySelector('#profileContainer');
let formPopup = document.querySelector('#profile');

let profileName = document.querySelector('.profile__name'); 
let profileProfession = document.querySelector('.profile__profession');
let inputName = document.querySelector('.popup__input_type_name'); 
let inputProfession = document.querySelector('.popup__input_type_profession');

// Profile Form
function profileOpenPopup() {
  formPopup.classList.add('popup_opened');

  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

function profileClosePopup() {
  formPopup.classList.remove('popup_opened');
}

function formSubmitHandler(event) {
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;

  profileClosePopup();
}

// Profile Form
profileOpenButton.addEventListener('click', profileOpenPopup);
profileCloseButton.addEventListener('click', profileClosePopup);

formElement.addEventListener('submit', formSubmitHandler);

// Place Form
let placeOpenButton = document.querySelector('.profile__add-button');
let placeCloseButton = document.querySelector('#placeCloseButton');

let placeElement = document.querySelector('#placeContainer');
let placePopup = document.querySelector('#place');

let placeName = document.querySelector('.popup__input_type_place');
let placeLink = document.querySelector('.popup__input_type_link');

// Place Form
function placeClosePopup() {
  placePopup.classList.remove('popup_opened');
}

placeCloseButton.addEventListener('click', placeClosePopup);

function placeOpenPopup() {
  placePopup.classList.add('popup_opened');
}

placeOpenButton.addEventListener('click', placeOpenPopup);

// Place Form 
function createCard(name, link) {
  const element = document.querySelector('#card').content.cloneNode(true);

  element.querySelector('.card__title').textContent = name;
  element.querySelector('.card__img').src = link;
  element.querySelector('.card__img').alt = name;

  element.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });

  element.querySelector('.card__bin-button').addEventListener('click', function (evt) {
    const item = evt.target.closest('.card');
   
    if (item) {
       item.remove();
    }
  })

  element.querySelector('.card__img').addEventListener('click', function () {
  document.querySelector("#bigger-img").classList.add('popup_opened');
    
  document.querySelector('.popup__img').src = link;
  document.querySelector('.popup__img-title').textContent = name;

  });
 
  return(element);
}

function addCard(container, cardElement) {
 container.prepend(cardElement);

 placeName.value = '';
 placeLink.value = '';
}


function placeSubmitHandler(event) {
  event.preventDefault();

  addCard(gallery, createCard(placeName.value, placeLink.value));

  placeClosePopup();
}

// Place Form
placeElement.addEventListener('submit', placeSubmitHandler);

// Закрытие окна просмотра
const imgCloseButton = document.querySelector("#imgCloseButton");
const imgPopup = document.querySelector("#bigger-img");

function imgClosePopup() {
  imgPopup.classList.remove('popup_opened');
}

imgCloseButton.addEventListener('click', imgClosePopup);




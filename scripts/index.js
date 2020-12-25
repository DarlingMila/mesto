import Card from './../scripts/Cards.js'

import { validationConfig } from './../scripts/validate.js';
import FormValidation from './../scripts/FormValidation.js';

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


// Валидация форм
const placeEdit = document.querySelector('#placeContainer');
const placeFormValidation = new FormValidation(validationConfig, placeEdit);

const profileEdit = document.querySelector('#profileContainer');
const profileFormValidation = new FormValidation(validationConfig, profileEdit);

// Profile Form
let profileOpenButton = document.querySelector('.profile__edit-button');
let profileCloseButton = document.querySelector('#profileCloseButton');

let formElement = document.querySelector('#profileContainer');
let formPopup = document.querySelector('#profile');

let profileName = document.querySelector('.profile__name'); 
let profileProfession = document.querySelector('.profile__profession');
let inputName = document.querySelector('.popup__input_type_name'); 
let inputProfession = document.querySelector('.popup__input_type_profession');

// Place Form
let placeOpenButton = document.querySelector('.profile__add-button');
let placeCloseButton = document.querySelector('#placeCloseButton');

let placeElement = document.querySelector('#placeContainer');
let placePopup = document.querySelector('#place');

let placeName = document.querySelector('.popup__input_type_place');
let placeLink = document.querySelector('.popup__input_type_link');

// Окно просмотра фото
const imgCloseButton = document.querySelector('#imgCloseButton');
const imgPopup = document.querySelector('#bigger-img');
const imgPopupPicture = imgPopup.querySelector('.popup__img');
const imgPopupTitle = imgPopup.querySelector('.popup__img-title');


function openPopup(popup) {
  popup.classList.add('popup_opened');

  // Закрытие кнопкой esc
  document.addEventListener('keydown', escClose);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');

  // Закрытие кнопкой esc
  document.removeEventListener('keydown', escClose);
}

// Добавление карточек
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();

  gallery.prepend(cardElement);
});

function addCard(container, cardElement) {
  container.prepend(cardElement);
 
  placeName.value = '';
  placeLink.value = '';
}

function placeSubmitHandler(event) {
  event.preventDefault();

  const card = new Card(placeName.value, placeLink.value);
  const cardElement = card.generateCard();

  addCard(gallery, cardElement);
  
  placeClosePopup();
}

// Profile Form
function profileOpenPopup() {
  openPopup(formPopup);

  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

function profileClosePopup() {
  closePopup(formPopup);
}

function formSubmitHandler(event) {
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;

  profileClosePopup();
}

// Place Form
function placeClosePopup() {
  closePopup(placePopup);
}

function placeOpenPopup() {
  openPopup(placePopup);
}

// Закрытие окна просмотра фото
function imgClosePopup() {
  closePopup(imgPopup);
}

// Закрытие книпкой esc
function escClose(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

// Закрытие кликом на оверлей
function closeOnOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    evt.target.classList.remove('popup_opened');
  }
};



// Profile Form
profileOpenButton.addEventListener('click', profileOpenPopup);
profileCloseButton.addEventListener('click', profileClosePopup);

formElement.addEventListener('submit', formSubmitHandler);

// Place Form
placeCloseButton.addEventListener('click', placeClosePopup);
placeOpenButton.addEventListener('click', placeOpenPopup);

placeElement.addEventListener('submit', placeSubmitHandler);

// Закрытие окна просмотра фото
imgCloseButton.addEventListener('click', imgClosePopup);

// Закрытие кликом на оверлей
document.addEventListener('mousedown', closeOnOverlay);

// Валидация форм
placeFormValidation.enableValidation();
profileFormValidation.enableValidation();
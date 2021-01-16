import './../pages/index.css';

import Card from './../scripts/Cards.js';
import Section from './../scripts/Section.js';
import Popup from './../scripts/Popup.js';
import PopupWithImage from './../scripts/PopupWithImage.js';
import PopupWithForm from './../scripts/PopupWithForm.js';

import UserInfo from './../scripts/UserInfo.js';

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
const profileOpenButton = document.querySelector('.profile__edit-button');
const profileCloseButton = document.querySelector('#profileCloseButton');

const formPopup = document.querySelector('#profile');

const profileName = document.querySelector('.profile__name'); 
const profileProfession = document.querySelector('.profile__profession');
const inputName = document.querySelector('.popup__input_type_name'); 
const inputProfession = document.querySelector('.popup__input_type_profession');

// Place Form
const placeOpenButton = document.querySelector('.profile__add-button');
const placeCloseButton = document.querySelector('#placeCloseButton');

const placeElement = document.querySelector('#placeContainer');
const placePopup = document.querySelector('#place');

const placeName = document.querySelector('.popup__input_type_place');
const placeLink = document.querySelector('.popup__input_type_link');

// Окно просмотра фото
const imgPopup = document.querySelector('#bigger-img');
const imgPopupPicture = imgPopup.querySelector('.popup__img');
const imgPopupTitle = imgPopup.querySelector('.popup__img-title');

const popups = document.querySelectorAll('.popup');

const profileFormPopup = new PopupWithForm (formPopup);
profileFormPopup.setEventListeners();

const placeFormPopup = new PopupWithForm (placePopup);
placeFormPopup.setEventListeners();

const defaultCards = new Section({
 items: initialCards,
 renderer: (item) => {
   const card = new Card(item.name, item.link, '#card', handleCardClick);
   const cardElement = card.generateCard();
   defaultCards.addItem(cardElement);
 }
}, '.gallery-grid');

defaultCards.rendererItems();

function addCard(container, cardElement) {
  container.prepend(cardElement);
 
  placeName.value = '';
  placeLink.value = '';
}

function placeSubmitHandler(event) {
  event.preventDefault();

  const cardElement = createCard({name: placeName.value, link: placeLink.value});
  addCard(gallery, cardElement);

  placeFormPopup.close();
}

function handleCardClick(link, name) {
  const pictureOpen = new PopupWithImage(imgPopup);
  pictureOpen.open(link, name);
  pictureOpen.setEventListeners();
}

// Profile Form
const profileForm = new UserInfo({
  name: profileName.textContent,
  profession: profileProfession.textContent,
});


function profileOpenPopup() {
  profileFormPopup.open();
}

function formSubmitHandler(event) {
  event.preventDefault();

  profileForm.setUserInfo();

  profileFormPopup.close();
}

// Place Form
function placeOpenPopup() {
  placeFormPopup.open();
}

// Profile Form
profileOpenButton.addEventListener('click', profileOpenPopup);

profileEdit.addEventListener('submit', formSubmitHandler);

// Place Form
placeOpenButton.addEventListener('click', placeOpenPopup);

placeElement.addEventListener('submit', placeSubmitHandler);

// Валидация форм
placeFormValidation.enableValidation();
profileFormValidation.enableValidation();
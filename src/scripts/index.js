import './../pages/index.css';

import Card from './../scripts/Card.js';
import Section from './../scripts/Section.js';
import Popup from './../scripts/Popup.js';
import PopupWithImage from './../scripts/PopupWithImage.js';
import PopupWithForm from './../scripts/PopupWithForm.js';

import UserInfo from './../scripts/UserInfo.js';

import { validationConfig } from './../scripts/validate.js';
import FormValidation from './../scripts/FormValidation.js';

import { initialCards } from './initialCards.js'
import { imgPopup } from './constants.js';

// Валидация форм
const placeEdit = document.querySelector('#placeContainer');
const placeFormValidation = new FormValidation(validationConfig, placeEdit);

const profileEdit = document.querySelector('#profileContainer');
const profileFormValidation = new FormValidation(validationConfig, profileEdit);

// Profile Form
const profileOpenButton = document.querySelector('.profile__edit-button');

const formPopup = document.querySelector('#profile');

const profileName = document.querySelector('.profile__name'); 
const profileProfession = document.querySelector('.profile__profession');
const inputName = document.querySelector('.popup__input_type_name'); 
const inputProfession = document.querySelector('.popup__input_type_profession');

// Place Form
const placeOpenButton = document.querySelector('.profile__add-button');

const placePopup = document.querySelector('#place');

const placeName = document.querySelector('.popup__input_type_place');
const placeLink = document.querySelector('.popup__input_type_link');

// Попап с картинкой
const pictureOpen = new PopupWithImage(imgPopup);
pictureOpen.setEventListeners();

// Profile Form
const profileFormPopup = new PopupWithForm (formPopup, submitProfileForm);
profileFormPopup.setEventListeners();

// Place Form
const placeFormPopup = new PopupWithForm (placePopup, placeSubmitHandler);
placeFormPopup.setEventListeners();

function createCard (item) {
  const card = new Card(item.name, item.link, '#card', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

const defaultCards = new Section({
 items: initialCards,
 renderer: (item) => {
  defaultCards.addItem(createCard(item));
 }
}, '.gallery-grid');

defaultCards.rendererItems();

function addCard(cardElement) {
  defaultCards.addItem(cardElement, true);
}

function placeSubmitHandler() {
  const cardElement = createCard({name: placeName.value, link: placeLink.value});
  addCard(cardElement);

  placeFormPopup.close();
}

function handleCardClick(link, name) {
  pictureOpen.open(link, name);
}

// Profile Form
const userInformation = new UserInfo({
  name: profileName,
  profession: profileProfession,
});


function profileOpenPopup() {
  profileFormPopup.open();

  inputName.value = userInformation.getUserInfo().name.textContent;
  inputProfession.value = userInformation.getUserInfo().profession.textContent;
}

function submitProfileForm() {
  userInformation.setUserInfo(inputName.value, inputProfession.value);

  profileFormPopup.close();
}

// Place Form
function placeOpenPopup() {
  placeFormPopup.open();
}

// Profile Form
profileOpenButton.addEventListener('click', profileOpenPopup);

// Place Form
placeOpenButton.addEventListener('click', placeOpenPopup);

// Валидация форм
placeFormValidation.enableValidation();
profileFormValidation.enableValidation();
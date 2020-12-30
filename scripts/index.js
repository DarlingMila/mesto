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
function createCard(item) {
  const card = new Card(item.name, item.link, '#card', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
}

initialCards.forEach((item) => {
  const cardElement = createCard(item);

  gallery.prepend(cardElement);
});

function addCard(container, cardElement) {
  container.prepend(cardElement);
 
  placeName.value = '';
  placeLink.value = '';
}

function placeSubmitHandler(event) {
  event.preventDefault();

  const cardElement = createCard({name: placeName.value, link: placeLink.value, templateSelector: '#card', handleCardClick: handleCardClick});
  addCard(gallery, cardElement);
  
  closePopup(placePopup);
}

function handleCardClick(link, name) {
  openPopup(imgPopup);
  imgPopupPicture.src = link;
  imgPopupTitle.textContent = name;
}

// Profile Form
function profileOpenPopup() {
  openPopup(formPopup);

  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

function formSubmitHandler(event) {
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;

  closePopup(formPopup);
}

// Place Form
function placeOpenPopup() {
  openPopup(placePopup);
}

// Закрытие кнопкой esc
function escClose(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

// Закрытие попаов
popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
        if (evt.target.classList.contains('popup__close-button')) {
          closePopup(popup);
        } 
    })
}) 


// Profile Form
profileOpenButton.addEventListener('click', profileOpenPopup);

profileEdit.addEventListener('submit', formSubmitHandler);

// Place Form
placeOpenButton.addEventListener('click', placeOpenPopup);

placeElement.addEventListener('submit', placeSubmitHandler);

// Валидация форм
placeFormValidation.enableValidation();
profileFormValidation.enableValidation();
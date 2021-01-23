import './../pages/index.css';

import Card from './../scripts/Card.js';
import Section from './../scripts/Section.js';
import Popup from './../scripts/Popup.js';
import PopupWithImage from './../scripts/PopupWithImage.js';
import PopupWithForm from './../scripts/PopupWithForm.js';

import UserInfo from './../scripts/UserInfo.js';

import { validationConfig } from './../scripts/validate.js';
import FormValidation from './../scripts/FormValidation.js';

//import { initialCards } from './initialCards.js'
import { imgPopup } from './constants.js';

import Api from './Api.js';

const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1',
  token: '6df26ad6-4b0b-4694-ac83-2ab40c0d09c7',
  groupId: 'cohort-19'
}); 

// Валидация форм
const placeEdit = document.querySelector('#placeContainer');
const placeFormValidation = new FormValidation(validationConfig, placeEdit);

const profileEdit = document.querySelector('#profileContainer');
const profileFormValidation = new FormValidation(validationConfig, profileEdit);

const avatarEdit = document.querySelector('#avatarPopupContainer');
const avatarFormValidation = new FormValidation(validationConfig, avatarEdit);


// Profile Form
const profileOpenButton = document.querySelector('.profile__edit-button');

const formPopup = document.querySelector('#profile');

const profileName = document.querySelector('.profile__name'); 
const profileProfession = document.querySelector('.profile__profession');
const inputName = document.querySelector('.popup__input_type_name'); 
const inputProfession = document.querySelector('.popup__input_type_profession');

const avatar = document.querySelector('.profile__avatar');

const avatarOpenButton = document.querySelector('.profile__change-avatar-button');

const avatarPopup = document.querySelector('#avatarPopup');
const inputAvatar = document.querySelector('.popup__input_type_avatar');

const deletePopup = document.querySelector('#deletePopup');

// Place Form
const placeOpenButton = document.querySelector('.profile__add-button');

const placePopup = document.querySelector('#place');

const placeName = document.querySelector('.popup__input_type_place');
const placeLink = document.querySelector('.popup__input_type_link');

const binButton = document.querySelector('.card__bin-button');

// Попап с картинкой
const pictureOpen = new PopupWithImage(imgPopup);
pictureOpen.setEventListeners();

// Profile Form
const profileFormPopup = new PopupWithForm (formPopup, submitProfileForm);
profileFormPopup.setEventListeners();

// Place Form
const placeFormPopup = new PopupWithForm (placePopup, placeSubmitHandler);
placeFormPopup.setEventListeners();

const avatarFormPopup = new PopupWithForm (avatarPopup, avatarSubmitHandler);
avatarFormPopup.setEventListeners();

const deleteFormPopup = new Popup (deletePopup);
deleteFormPopup.setEventListeners();

// Создание карточки
const createCard = (data) => {
  const card = new Card(data, '#card', handleCardClick, { handleBinButton: () => {
    if (card.getId() === userId()) {
      binButton.addEventListener('click', deleteOpenPopup);
      return true;
    }
    return false;
  }});

  return card.generateCard();

}

// Создание разметки
const cardsList = new Section({
 renderer: (item) => {
   cardsList.addItem(createCard(item));
 }
}, '.gallery-grid');

// Добавление карточек в разметку
function addCard(cardElement) {
  cardsList.addItem(cardElement, true);
}

api.getInitialCards()
.then((res) => {
    cardsList.rendererItems(res);

    for (let i = 0; i < res.length; i++) {
      const likeCount = document.querySelector('.card__like-count');
      likeCount.textContent = res[i].likes.length; 
  }

})
.catch(err => console.log('Ошибка при получении карточек'));;

api.putLike('600c297994f85602e8779acd')
.then(res => {
  res.likes.length += 1;
})
.catch(err => console.log('Ошибка: не ставит лайк'));

api.removeLike('600c297994f85602e8779acd')
.then(res => {
  res.likes.length -= 1;
})
.catch(err => console.log('Ошибка: не удаляет лайк'));

function placeSubmitHandler() {
  const cardElement = createCard({name: placeName.value, link: placeLink.value});
  addCard(cardElement);

  api.addNewCard({name: placeName.value, link: placeLink.value});

  renderLoading(true);

  placeFormPopup.close();
}

function handleCardClick(link, name) {
  pictureOpen.open(link, name);
}

// Данные пользователя
api.getUserInformation()
.then(res => {
  userInformation.setUserInfo(res.name, res.about);
  avatar.src = res.avatar;
})
.catch(err => console.log('Ошибка при получении данных пользователя'));

function userId () {
  api.getUserInformation()
  .then(res => {
    return res._id;
  })
  .catch(err => console.log('Ошибка при получении id пользователя'));;
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

function deleteOpenPopup() {
  deleteFormPopup.open();
}

function avatarOpenPopup() {
  avatarFormPopup.open();
}

function avatarSubmitHandler() {
  avatar.src = inputAvatar.value;
  api.changeUserAvatar(`${inputAvatar.value}`);
  renderLoading(true);
}

function submitProfileForm() {
  userInformation.setUserInfo(inputName.value, inputProfession.value);

  api.changeUserInformation(inputName.value, inputProfession.value);

  renderLoading(true);

  profileFormPopup.close();
}

// Place Form
function placeOpenPopup() {
  placeFormPopup.open();

  placeFormValidation.enableValidation();
}

function renderLoading (isLoading) {
  if (isLoading) {
    const button = document.querySelector('.popup__save-button');
    button.textContent = 'Сохранение...';
  }
}

// Profile Form
profileOpenButton.addEventListener('click', profileOpenPopup);

// Place Form
placeOpenButton.addEventListener('click', placeOpenPopup);

//
avatarOpenButton.addEventListener('click', avatarOpenPopup);

// Валидация форм
placeFormValidation.enableValidation();
profileFormValidation.enableValidation();
avatarFormValidation.enableValidation();
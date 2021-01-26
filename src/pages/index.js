import './../pages/index.css';

import Card from '../scripts/Card.js';
import Section from '../scripts/Section.js';
import Popup from '../scripts/Popup.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupConfirm from '../scripts/PopupConfirm.js';

import UserInfo from '../scripts/UserInfo.js';

import { validationConfig } from '../scripts/validate.js';
import FormValidator from '../scripts/FormValidator.js';

import { imgPopup } from '../scripts/constants.js';

import Api from '../scripts/Api.js';

const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1',
  token: '6df26ad6-4b0b-4694-ac83-2ab40c0d09c7',
  groupId: 'cohort-19'
}); 

Promise.all([
  api.getUserInformation(),
  api.getInitialCards()
])
.then((values) => { 
  const [userData, initialCards] = values;
  userInformation.setUserInfo(userData);
  cardsList.rendererItems(initialCards);
})
.catch(err => console.log('Ошибка загрузки страницы'));


// Валидация форм
const placeEdit = document.querySelector('#placeContainer');
const placeFormValidation = new FormValidator(validationConfig, placeEdit);

const profileEdit = document.querySelector('#profileContainer');
const profileFormValidation = new FormValidator(validationConfig, profileEdit);

const avatarEdit = document.querySelector('#avatarPopupContainer');
const avatarFormValidation = new FormValidator(validationConfig, avatarEdit);


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


// Аватар
const avatarOpenButton = document.querySelector('.profile__change-avatar-button');

const avatarPopup = document.querySelector('#avatarPopup');
const inputAvatar = document.querySelector('.popup__input_type_avatar');

// Удаление
const deleteConfirm = document.querySelector('#confirmContainer')
const deletePopup = document.querySelector('#deletePopup');


// Попап с картинкой
const pictureOpen = new PopupWithImage(imgPopup, '#bigger-img');
pictureOpen.setEventListeners();

// Profile Form
const profileFormPopup = new PopupWithForm (formPopup, submitProfileForm);
profileFormPopup.setEventListeners();

// Place Form
const placeFormPopup = new PopupWithForm (placePopup, placeSubmitHandler);
placeFormPopup.setEventListeners();

const avatarFormPopup = new PopupWithForm (avatarPopup, avatarSubmitHandler);
avatarFormPopup.setEventListeners();

// Создание карточки
const createCard = (data) => {
  const card = new Card(data, myId(), '#card', handleCardClick,
    {
    handleLikeClick: (evt) => {

      if (!card.wasLiked()) {
        api.putLike(card.getCardId())
        .then((res) => {
          card.putLikeButton(evt);
          card.updateLike(res.likes);
        })
        .catch(() => console.log('Ошибка: поставить лайк'));
      } else {
        api.removeLike(card.getCardId())
        .then((res) => {
          card.deleteLikeButton(evt);
          card.updateLike(res.likes);
        })
        .catch(() => console.log('Ошибка: убрать лайк'));
      }
 
    }, 
    handleDeleteCard: () => {

      const deleteFormPopup = new PopupConfirm (deletePopup, deleteSubmit);
      deleteFormPopup.setEventListeners();
      deleteFormPopup.open();

     function deleteSubmit() {
       api.deleteCard(card.getCardId())
       .then(() => {
        card.deleteCard();
        deleteFormPopup.close();
       })
       .catch(err => console.log('Ошибка при удалении карточки'))
       .finally(() => {
        renderLoading(deleteConfirm);
       });
      }

    }
  });

  return card.generateCard();
}

function myId () {
  return userInformation.getUserId();
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

function placeSubmitHandler() {
  api.addNewCard({name: placeName.value, link: placeLink.value})
  .then((data) => {
    const cardElement = createCard(data);
    addCard(cardElement);
    placeFormPopup.close();
  })
  .finally(() => {
    renderLoading(placeEdit);
  });
}

function handleCardClick(link, name) {
  pictureOpen.open(link, name);
}

// Profile Form
const userInformation = new UserInfo({
  name: profileName,
  profession: profileProfession,
}, '.profile__avatar');

function profileOpenPopup() {
  profileFormPopup.open();

  inputName.value = userInformation.getUserInfo().name.textContent;
  inputProfession.value = userInformation.getUserInfo().profession.textContent;
}

function submitProfileForm() {
  api.changeUserInformation(inputName.value, inputProfession.value)
  .then((res) => {
    profileFormPopup.close();
    userInformation.setUserInfo(res);
  })
  .finally(() => {
    renderLoading(profileEdit);
  });
}

// Place Form
function placeOpenPopup() {
  placeFormPopup.open();

  placeFormValidation.enableValidation();
}

function renderLoading (popup) {
  const button = popup.querySelector('.popup__save-button');
  button.textContent = 'Сохранение...';
}

// Avatar Form 
function avatarOpenPopup() {
  avatarFormPopup.open();
}

function avatarSubmitHandler() {
  api.changeUserAvatar(`${inputAvatar.value}`)
  .then((res) => {
    userInformation.setUserInfo(res);
    userInformation.getUserInfo(res);
    avatarFormPopup.close();
  }) 
  .catch(err => console.log(`При изменении аватара пользователя: ${err}`))
  .finally(() => {
    renderLoading(avatarEdit);
  });
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
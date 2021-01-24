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
  const card = new Card(data, '#card', handleCardClick, {
    handleLikeClick: (card) => {
      const cardLikeButton = document.querySelector('.card__like-button');

      if (cardLikeButton.classList.contains('card__like-button_active')) {
        api.putLike(card.getCardId())
        .then(res => {
          res.likes.length += 1;
        })
        .catch(err => console.log('Ошибка: не ставит лайк'));
      } else {
        api.removeLike(card.getCardId())
        .then(res => {
          res.likes.length -= 1;
        })
        .catch(err => console.log('Ошибка: не удаляет лайк'));
      }
      
    }, 
    handleDeleteCard: () => {
      if (card.getOwner()._id !== myId()){

        const deleteFormPopup = new PopupConfirm (deletePopup, handleDelete);
        deleteFormPopup.setEventListeners();

        deleteFormPopup.open();

        function handleDelete() {
          api.deleteCard(card.getCardId())
          .then(() => card.deleteCard())
          .catch(err => console.log('Ошибка при удалении'))
        }

      }

    }
  });

  return card.generateCard();
}

function myId () {
  userInformation.getUserId();
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

Promise.all([
  api.getUserInformation(),
  api.getInitialCards()
])    
.then((values) => { 
  const [userData, initialCards] = values;
})
.catch(err => console.log('Ошибка загрузки страницы'));;


api.getInitialCards()
.then((res) => {
    cardsList.rendererItems(res);
})
.catch(err => console.log('Ошибка при получении карточек'));;


function placeSubmitHandler() {
  const cardElement = createCard({name: placeName.value, link: placeLink.value});
  addCard(cardElement);

  api.addNewCard({name: placeName.value, link: placeLink.value})
  .then(() => {
    placeFormPopup.close();
  })
  .finally(() => {
    renderLoading(placeEdit);
  });
}

function handleCardClick(link, name) {
  pictureOpen.open(link, name);
}

// Данные пользователя
api.getUserInformation()
.then(res => {
  userInformation.setUserInfo(res);
})
.catch(err => console.log('Ошибка при получении данных пользователя'));


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



function avatarOpenPopup() {
  avatarFormPopup.open();
}

function avatarSubmitHandler() {
  avatar.src = inputAvatar.value;
  api.changeUserAvatar(`${inputAvatar.value}`)
  .then((info) => {
    userInfo.setUserInfo({
    userAvatar: info.avatar,
    })
  })
  .then(() => {
    avatarFormPopup.close();
  })
  .catch(err => console.log(`При изменении аватара пользователя: ${err}`))
  .finally(() => {
    renderLoading(avatarEdit);
  });
}

function submitProfileForm() {
  const newData = {
    name: inputName.value,
    about: inputProfession.value
  }

  userInformation.setUserInfo(newData);

  api.changeUserInformation(inputName.value, inputProfession.value)
  .then(() => {
    profileFormPopup.close();
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
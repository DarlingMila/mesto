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

function createCard(name, link) {
  const element = document.querySelector('#card').content.cloneNode(true);

  const elementImg = element.querySelector('.card__img');
  elementImg.src = link;
  elementImg.alt = name;

  element.querySelector('.card__title').textContent = name;


  element.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });

  element.querySelector('.card__bin-button').addEventListener('click', function (evt) {
    const item = evt.target.closest('.card');
   
    if (item) {
       item.remove();
    }
  })

  elementImg.addEventListener('click', function () {
    openPopup(imgPopup);  
      
    imgPopupPicture.src = link;
    imgPopupTitle.textContent = name;

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

// Добавление карточек из массива
initialCards.forEach(function (item) {
  gallery.append(createCard(item.name, item.link));
});

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
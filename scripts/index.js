let openButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

let formElement = document.querySelector('.popup__container');
let popup = document.querySelector('.popup');

let profileName = document.querySelector('.profile__name'); 
let profileProfession = document.querySelector('.profile__profession');
let inputName = document.querySelector('.popup__input_type_name'); 
let inputProfession = document.querySelector('.popup__input_type_profession');


function openPopup() {
  popup.classList.add('popup_opened');

  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(event) {
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;

  closePopup();
}

openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);
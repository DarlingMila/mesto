let openButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__save-button');
let popup = document.querySelector('.popup');

function openPopup() {
  popup.classList.remove('popup_opened');
}

function closePopup() {
  popup.classList.add('popup_opened');
}

openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

function formSubmitHandler(event) {
  event.preventDefault();

  let profileName = document.querySelector('.profile__name'); 
  let profileProfession = document.querySelector('.profile__profession');
  let inputName = document.querySelector('.popup__name'); 
  let inputProfession = document.querySelector('.popup__profession');

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;

  closePopup();
}

formElement.addEventListener('click', formSubmitHandler);
formElement.addEventListener('submit', formSubmitHandler);
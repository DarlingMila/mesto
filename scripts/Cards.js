export default class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__img');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;

    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', this._handleLikeButton);

    this._element.querySelector('.card__bin-button').addEventListener('click', this._handleBinButton);

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });
  }

  _handleLikeButton(evt) { 
    evt.target.classList.toggle('card__like-button_active');
  }

  _handleBinButton(evt) { 
    const item = evt.target.closest('.card');
   
     if (item) {
        item.remove();
    }
  }

}
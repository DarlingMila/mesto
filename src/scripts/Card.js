export default class Card {
  constructor(data, templateSelector, handleCardClick, {handleBinButton}) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;

    this._handleBinButton = handleBinButton;
  }

  getId() {
    return this._id;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);

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

    if (this._handleBinButton) {
      this._element.querySelector('.card__bin-button').addEventListener('click', this._handleBinButton.bind(this));
    } else {
      this._element.querySelector('.card__like-button').remove();
    }

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });

  }

  _handleLikeButton(evt) { 
    evt.target.classList.toggle('card__like-button_active');
  }

  _handleBinButton() { 
    this._element.remove();
    this._element = null;
  }

}
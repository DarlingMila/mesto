export default class Card {
  constructor(data, myId, templateSelector, handleCardClick, {handleLikeClick, handleDeleteCard}) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._owner = data.owner;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;

    this._likes = data.likes;

    this._handleLikeClick = handleLikeClick;

    this._handleDeleteCard = handleDeleteCard;

    this._myId = myId;
  }

  getCardId() {
    return this._id;
  }

  getOwner() {
    return this._owner;
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

    if (this._likes) {
      this._element.querySelector('.card__like-count').textContent = this._likes.length;
    }

    this._setEventListeners();
    this._checkLikes();

    return this._element;
  }

  likeCount() {
    this._element.querySelector('.card__like-count').textContent = this._likes.length;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', this._handleLikeClick);

    if (this._myId === this.getOwner()._id) {
      this._element.querySelector('.card__bin-button').addEventListener('click', this._handleDeleteCard.bind(this));
    } else {
      this._element.querySelector('.card__bin-button').remove();
    }

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });

  }

  _handleLikeButton(evt) { 
    evt.target.classList.toggle('card__like-button_active');
    console.log('пуньк');
  }

  deleteCard() { 
    this._element.remove();
    this._element = null;
  }

  _checkLikes() {
    if(this._likes.includes(this._myId) === true) {
      this._element.querySelector('.card__like-button').classList.add('.card__like-button_active')
    } else {
      this._element.querySelector('.card__like-button').classList.remove('.card__like-button_active')
    }

  }

}
export default class Card {
  constructor(data, myId, templateSelector, handleCardClick, {handleLikeClick, handleDeleteCard}) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._owner = data.owner;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;

    this._likes = data.likes;
    this._isLiked = false;

    this._handleLikeClick = handleLikeClick;

    this._handleDeleteCard = handleDeleteCard;

    this._myId = myId;
  }

  _checkForMyLike() {
    this._likes.forEach((item) => {
      if (item._id === this._myId) {
         this._element.querySelector('.card__like-button').classList.add('card__like-button_active');
         this._isLiked = true;
      }
    })
  }

  wasLiked() {
    if (this._isLiked === true) {
      return true;
    } else {
      return false;
    }
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
      this._likeCount();
      this._checkForMyLike();
    }

    this._setEventListeners();

    return this._element;
  }

  _likeCount() {
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

  putLikeButton(evt) { 
    evt.target.classList.add('card__like-button_active');

    this._isLiked = true;
  }

  deleteLikeButton(evt) { 
    evt.target.classList.remove('card__like-button_active');

    this._isLiked = false;
  }

  deleteCard() { 
    this._element.remove();
    this._element = null;
  }

  updateLike(likes){
    this._element.querySelector('.card__like-count').textContent = likes.length;
  }

}
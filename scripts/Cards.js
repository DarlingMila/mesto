export default class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const cardElement = document.querySelector('#card').content.cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__img').src = this._link;
    this._element.querySelector('.card__img').alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', this._handleLikeButton);

    this._element.querySelector('.card__bin-button').addEventListener('click', this._binButton);

    this._element.querySelector('.card__img').addEventListener('click', this._openBigPicture);

    document.querySelector('#imgCloseButton').addEventListener('click', this._closeBigPicture);

    document.addEventListener('keydown', this._escClose);
  }

  _handleLikeButton(evt) { 
    evt.target.classList.toggle('card__like-button_active');
  }

  _binButton(evt) { 
    const item = evt.target.closest('.card');
   
     if (item) {
        item.remove();
    }
  }

  _openBigPicture(evt) {
    const pic = document.querySelector('#bigger-img');
    pic.classList.add('popup_opened');

    pic.querySelector('.popup__img').src = evt.target.getAttribute('src');
    pic.querySelector('.popup__img-title').textContent = evt.target.getAttribute('alt');
  }

  _closeBigPicture(evt) {
    evt.target.classList.add('popup_opened');

    document.removeEventListener('keydown', this._escClose);
  }

  _escClose(evt) {
    if (evt.key === 'Escape') {
      document.querySelector('.popup_opened').classList.remove('popup_opened');
    }
  }

}

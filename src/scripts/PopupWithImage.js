import Popup from "./../scripts/Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup, imgPopup) {
    super(popup);

    this._imgPopup = document.querySelector(imgPopup);

    this._imgPopupPicture = this._imgPopup.querySelector('.popup__img');
    this._imgPopupTitle = this._imgPopup.querySelector('.popup__img-title');
  }

  open(link, name) {
    super.open();

    this._imgPopupPicture.src = link;
    this._imgPopupTitle.textContent = name;
  }
}
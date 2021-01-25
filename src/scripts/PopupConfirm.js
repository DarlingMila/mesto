import Popup from "./../scripts/Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, deleteSubmit) {
    super(popup);

    this._deleteSubmit = deleteSubmit;
  }

  setEventListeners () {
    super.setEventListeners();

    this._submitButton = this._popup.querySelector('.popup__container');
    this._submitButton.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._deleteSubmit();
    });
  }

}
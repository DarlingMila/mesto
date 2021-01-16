import Popup from "./../scripts/Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, handleFormSubmit) {
    super(popup);

    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    super.close();

    this._submitButton.reset();
  }

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  setEventListeners () {
    super.setEventListeners();

    this._submitButton = this._popup.querySelector('.popup__container');
    this._submitButton.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
}
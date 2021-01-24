import { ESC_KEY } from "./constants.js";

export default class Popup {
  constructor(popup) {
    this._popup = popup;

    this._escClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._escClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._escClose);
  }

  _handleEscClose(evt) {
    if (evt.key === ESC_KEY) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if ((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('popup__close-button'))) {
        this.close();
      }
    });
  }
}
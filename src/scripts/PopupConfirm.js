import Popup from "./../scripts/Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, handleDelete) {
    super(popup);

    this._handleDelete =  handleDelete;
  }
}
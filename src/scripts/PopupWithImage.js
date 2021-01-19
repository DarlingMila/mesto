import Popup from "./../scripts/Popup.js";
import { imgPopup } from "./constants.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  }

  open(link, name) {
    super.open();

    const imgPopupPicture = imgPopup.querySelector('.popup__img');
    const imgPopupTitle = imgPopup.querySelector('.popup__img-title');

    imgPopupPicture.src = link;
    imgPopupTitle.textContent = name;
  }
}
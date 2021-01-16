import Popup from "./../scripts/Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  }

  open(link, name) {
    super.open();

    const imgPopup = document.querySelector('#bigger-img');
    const imgPopupPicture = imgPopup.querySelector('.popup__img');
    const imgPopupTitle = imgPopup.querySelector('.popup__img-title');

    imgPopupPicture.src = link;
    imgPopupTitle.textContent = name;
  }
}
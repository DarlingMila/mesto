export default class UserInfo {
  constructor ({name, profession}) {
    this._name = name;
    this._profession = profession;
  }

  getUserInfo() {
    const userInfo = {
      name: this._name,
      profession: this._profession,
    };
    return userInfo;
  }

  setUserInfo() {
    const profileName = document.querySelector('.profile__name'); 
    const profileProfession = document.querySelector('.profile__profession');

    const inputName = document.querySelector('.popup__input_type_name'); 
    const inputProfession = document.querySelector('.popup__input_type_profession');

    profileName.textContent = inputName.value;
    profileProfession.textContent = inputProfession.value;
  }
}
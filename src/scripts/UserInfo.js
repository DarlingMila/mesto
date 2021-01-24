export default class UserInfo {
  constructor ({name, profession}, avatar) {
    this._name = name;
    this._profession = profession;

    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    const userInfo = {
      name: this._name,
      profession: this._profession,
    };

    return userInfo;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._profession.textContent = data.about;
    this._avatar.src = data.avatar;

    this._id = data._id;
  }

  getUserId() {
    return this._id;
  }
}
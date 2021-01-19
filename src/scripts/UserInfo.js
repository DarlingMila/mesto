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

  setUserInfo(name, profession) {
    this._name = name;
    this._profession = profession;
  }
}
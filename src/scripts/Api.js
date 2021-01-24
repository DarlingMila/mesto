export default class Api {
  constructor ({address, token, groupId}) {
    this._address = address;
    this._token = token;
    this._groupId = groupId;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
  }

  getInitialCards() {
    return fetch(`${this._address}/${this._groupId}/cards`, {
      headers: {
        authorization: this._token,
      }
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  addNewCard({name, link}) {
    return fetch(`${this._address}/${this._groupId}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link

      })
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  deleteCard(cardId) {
    return fetch (`${this._address}/${this._groupId}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  getUserInformation() {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      headers: {
        authorization: this._token,
      }
    })
    .then(res => {
        return this._getResponseData(res);
    })
  }

  changeUserInformation(name, about) {
    return fetch (`${this._address}/${this._groupId}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about, 
      })
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  changeUserAvatar(avatar) {
    return fetch (`${this._address}/${this._groupId}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar 
      })
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  putLike(cardId) {
    return fetch (`${this._address}/${this._groupId}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }

  removeLike(cardId) {
    return fetch (`${this._address}/${this._groupId}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return this._getResponseData(res);
    })
  }


}
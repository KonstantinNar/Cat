const configApi = {
  url: 'https://cats.petiteweb.dev/api/single/etoya',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
};

class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _onRes(res) {
    return res.ok ? res.json() : Promise.reject({ ...res, message: 'erroe' })
  }
  getAllCats() {
    return fetch(`${this._url}/show`, {
      method: 'GET',
    }).then(this._onRes);
  }
  getAllCatsId() {
    return fetch(`${this._url}/ids`, {
      method: 'GET',
    }).then(this._onRes);;
  }
  getCatById(id) {
    return fetch(`${this._url}/show/${id}`, {
      method: 'GET',
    }).then(this._onRes);;
  }
  addNewCat(body) {
    return fetch(`${this._url}/add`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._onRes);;
  }
  updateCatById(id, data) {
    return fetch(`${this._url}/update/${id}`, {
      method: 'PUT',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._onRes);;
  }
  deleteCatById(id) {
    return fetch(`${this._url}/delete/${id}`, {
      method: 'DELETE',
    }).then(this._onRes);;
  }
}

const api = new Api(configApi);
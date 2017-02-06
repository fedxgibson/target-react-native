import humps from 'humps'

export default class API {

  static get API_URL () {
    return 'https://target-mvd-api.herokuapp.com/api/v1/';
  }

  static get HEADERS () {
    let headers =  {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    if (this.API_TOKEN) {
      headers['X-USER-TOKEN'] = this.API_TOKEN;
    }
    return headers;
  }

  static set API_TOKEN (token) {
    this.token = token;
  }

  static get API_TOKEN () {
    return this.token;
  }

  static post(url, data, options) {
    return this.fetchJSON(this.request('POST', url, data));
  }

  static request(method, url, data = {}) {
    data = humps.decamelizeKeys(data);
    return new Request(
      `${this.API_URL}${url}`,
      {
        method: method,
        body: JSON.stringify(data),
        headers: this.HEADERS
      }
    );
  }

  static fetchJSON(req) {
    return fetch(req)
            .then(response => response.json(),
                  error => {
                    console.log(error)
                    throw error;
                  })
  }
}

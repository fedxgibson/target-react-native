export default class API {

  static get API_URL () {
    return 'http://target-mvd-api.herokuapp.com/api/v1/';
  }

  static get HEADERS () {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  static post(url, data, options) {
    return this.fetchJSON(this.request('POST', url, data));
  }

  static request(method, url, data = {}) {
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

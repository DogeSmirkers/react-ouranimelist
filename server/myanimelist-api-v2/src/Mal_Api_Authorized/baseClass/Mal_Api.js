const axios = require("axios");
module.exports = class MAL_API {
  http = axios.default.create();
  #urlBase = "https://api.myanimelist.net/v2";

  constructor(client_id) {
    this.http.defaults.baseURL = this.#urlBase;
    this.http.defaults.headers["X-MAL-CLIENT-ID"] = client_id;
  }
};

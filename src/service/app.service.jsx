import axios from "axios";

class CountryService {
  _URL = "https://restcountries.com/v3.1";
  async getByID(name) {
    return await axios.get(`${this._URL}/name/${name}`);
  }

  async getCountry() {
    return await axios.get(`${this._URL}/all`);
  }
}
export default new CountryService();

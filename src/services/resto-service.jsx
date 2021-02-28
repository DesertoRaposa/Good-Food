export default class RestoService {
  _apiBase = 'http://localhost:3000';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    const result = await res.json();
    return result;
  }

  async getMenuItems() {
    const res = await this.getResource('/menu/');
    return res;
  }
}

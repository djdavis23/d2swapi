import SwapiController from "./components/swapi-controller.js";

class App {
  constructor() {
    this.controllers = {
      swapi: new SwapiController
    }
  }
}
//@ts-ignore
window.app = new App()
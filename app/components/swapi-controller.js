import SwapiService from "./swapi-service";

const swapiService = new SwapiService
const btnDiv = document.getElementById("buttons")

function drawButtons() {
  btnDiv.innerHTML = `
    <button onclick="app.controllers.swapi.test()>TEST</button>
  `
}

export default class SwapiController {

  test() {
    console.log("SWAPI CONTROLLER HERE")
    swapiService.test()
  }
}
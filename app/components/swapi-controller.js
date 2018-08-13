import SwapiService from "./swapi-service.js";

const swapiService = new SwapiService
const btnDiv = document.getElementById("buttons")
const errDiv = document.getElementById("error-msg")
const charDiv = document.getElementById("characters")
const filmDiv = document.getElementById("films")
const vehicleDiv = document.getElementById("vehicles")
const starshipDiv = document.getElementById("starships")

function drawButtons() {
  btnDiv.innerHTML = `
    <button class="btn-primary" onclick="app.controllers.swapi.getCharacters()">Get Characters</button>
    <button class="btn-primary" onclick="app.conroller.swapi.getFilms()">Get Films</button>
    <button class="btn-primary" onclick="app.conroller.swapi.getVehicles()">Get Vehicles</button>
    <button class="btn-primary" onclick="app.conroller.swapi.getStarships()">Get Starships</button>
  `
}

function drawError(error) {
  console.log(error)
  errDiv.innerText = error.message
}

function drawCharacters(characters) {
  let template = ''
  characters.forEach(character => {
    template += `
      <p>Name: ${character.name}</p>
    `
  })
  charDiv.innerHTML = template;
}

function drawFilms(films) {
  //complete this
}

function drawVehicles(vehicles) {
  //complete this
}

function drawStarships(starships) {
  //complete this
}



export default class SwapiController {

  constructor() {
    drawButtons()
  }

  getCharacters() {
    swapiService.getCharacters(drawCharacters, drawError)
  }

  getFilms() {
    swapiService.getFilms(drawFilms, drawError)
  }

  getVehicles() {
    swapiService.getVehicles(drawVehicles, drawError)
  }

  getStarships() {
    swapiService.getStarships(drawStarships, drawError)
  }

  test() {
    console.log("SWAPI CONTROLLER HERE")
    swapiService.test()
  }
}
import SwapiService from "./swapi-service.js";

const swapiService = new SwapiService
const btnDiv = document.getElementById("buttons")
const errDiv = document.getElementById("error-msg")
const charDiv = document.getElementById("characters")
const filmDiv = document.getElementById("films")
const vehicleDiv = document.getElementById("vehicles")
const starshipDiv = document.getElementById("starships")

let charTemplate = '<h4>Characters:</h4>'
let filmTemplate = '<h4>Films:</h4>'
let vehicleTemplate = '<h4>Vehicles:</h4>'
let starshipTemplate = '<h4>Starships:</h4>'

function drawButtons() {
  btnDiv.innerHTML = `
    <button class="btn-primary" onclick="app.controllers.swapi.getCharacters()">Get Characters</button>
    <button class="btn-primary" onclick="app.controllers.swapi.getFilms()">Get Films</button>
    <button class="btn-primary" onclick="app.controllers.swapi.getVehicles()">Get Vehicles</button>
    <button class="btn-primary" onclick="app.controllers.swapi.getStarships()">Get Starships</button>
  `
}

function drawError(error) {
  console.log(error)
  errDiv.innerText = error.message
}

function drawCharacters(characters) {
  Object.keys(characters).map(c => characters[c]).forEach(character => {
    charTemplate += `
      <p>${character.name}</p>
    `
  })
  charDiv.innerHTML = charTemplate;
}

function drawFilms(films) {
  Object.keys(films).forEach(id => {
    filmTemplate += `
      <p>${films[id].title}</p>
    `
  })
  filmDiv.innerHTML = filmTemplate;
}

function drawVehicles(vehicles) {
  Object.keys(vehicles).forEach(id => {
    vehicleTemplate += `
      <p>${vehicles[id].name}</p>
    `
  })
  vehicleDiv.innerHTML = vehicleTemplate
}

function drawStarships(starships) {
  Object.keys(starships).forEach(id => {
    starshipTemplate += `
      <p>${starships[id].name}</p>
    `
  })
  starshipDiv.innerHTML = starshipTemplate
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
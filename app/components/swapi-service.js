import Person from "../models/Person.js";
import Film from "../models/Film.js";
import Vehicle from "../models/Vehicle.js";
import Starship from "../models/Starship.js";

let characters = []
let films = []
let vehicles = []
let starships = []

export default class SwapiService {

  getCharacters(drawCharacters, drawError, link) {
    console.log("getting characters")
    let url = link || 'https://swapi.co/api/people'
    fetch(url)
      .then(res => res.json())
      .then(data => {
        data.results.map(c => {
          characters.push(new Person(c))
        })
        drawCharacters(characters)
        if (data.next) {
          this.getCharacters(drawCharacters, drawError, data.next)
        }
      })
      .catch(drawError)
  }

  getFilms(drawFilms, drawError, link) {
    console.log("getting films")
    let url = link || "https://swapi.co/api/films"
    fetch(url)
      .then(result => result.json())
      .then(data => {
        data.results.map(f => {
          films.push(new Film(f))
        })
        drawFilms(films)
        if (data.next) {
          this.getFilms(drawFilms, drawError, data.next)
        }
      })
      .catch(drawError)
  }

  getVehicles(drawVehicles, drawError, link) {
    console.log("getting vehicles")
    let url = link || "https://swapi.co/api/vehicles"
    fetch(url)
      .then(result => result.json())
      .then(data => {
        console.log(data)
        data.results.map(v => {
          vehicles.push(new Vehicle(v))
        })
        drawVehicles(vehicles)
        if (data.next) {
          this.getVehicles(drawVehicles, drawError, data.next)
        }
      })
      .catch(drawError)
  }

  getStarships(drawStarships, drawError, link) {
    console.log("getting starships")
    let url = link || "https://swapi.co/api/starships"
    fetch(url)
      .then(results => results.json())
      .then(data => {
        console.log(data)
        data.results.map(s => {
          starships.push(new Starship(s))
        })
        drawStarships(starships)
        if (data.next) {
          this.getStarships(drawStarships, drawError, data.next)
        }
      })
      .catch(drawError)
  }

  test() {
    console.log("SWAPI SERVICE HERE")
  }
}
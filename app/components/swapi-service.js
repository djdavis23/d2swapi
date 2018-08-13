import Person from "../models/Person.js";
let characters = []
export default class SwapiService {

  getCharacters(drawCharacters, drawError, link) {
    let url = link || 'https://swapi.co/api/people'
    fetch(url)
      .then(res => res.json())
      .then(data => {
        data.results.map(c => {
          characters.push(new Person(c))
        })
        console.log(characters)
        console.log(data)
        drawCharacters(characters)
        if (data.next) {
          this.getCharacters(drawCharacters, drawError, data.next)
        }
      })
      .catch(drawError)
  }

  getFilms(drawFilms, drawError, link) {
    console.log("getting films")
    //code this
  }

  getVehicles(drawVehicles, drawError, link) {
    console.log("getting vehicles")
    //code this
  }

  getStarships(drawStarships, drawError, link) {
    console.log("getting starships")
    //code this
  }

  test() {
    console.log("SWAPI SERVICE HERE")
  }
}
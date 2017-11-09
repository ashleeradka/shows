class Season {
  constructor(json){
    this.season = json.number
    this.numOfEpisodes = json.episodeOrder
    this.premiered = json.premiereDate
    if (json.summary){
      this.summary = json.summary
    } else {
      this.summary = "Summary coming soon!"
    }
    if (json.image){
      this.imageMd = json.image.medium
      this.imageLg = json.image.original
    } else {
      this.imageMd = "http://static.tvmaze.com/uploads/images/medium_portrait/65/163515.jpg"
    }
    store.seasons.push(this)
  }

  renderSeason() {
    const seasonColumns = document.getElementById('seasons')
    let element = document.createElement("DIV");
    element.setAttribute("id", `${this.season}`)
    element.setAttribute("class", "row")
    element.setAttribute("onclick", `getEpisodes(${this.season})`)
    seasonColumns.appendChild(element)
    const thisSeasonColumn = document.getElementById(`${this.season}`)
    thisSeasonColumn.innerHTML = `
          <div class="column-1">
            <img src='${this.imageMd}'></img>
          </div>
          <div class="column-2">
            <h3>Season ${this.season}</h3>
            <p>${this.summary}</p>
          </div>
        `

  }

}


// <div class="column"></div>

class Show {
  constructor(json){
    this.name = json.name
    this.genres = json.genres
    this.imageMd = json.image.medium
    this.imageLg = json.image.original
    this.network = json.network.name
    this.url = json.officialSite
    this.premiered = json.premiered
    this.rating = json.rating.average
    this.summary = json.summary
    this.day = json.schedule.days
    this.time = json.schedule.time
    store.shows.push(this)
  }

  renderShow() {
    const image = document.getElementById('image')
    const banner = document.getElementById('banner')

    image.innerHTML = `
      <img src='${this.imageMd}'></img>
      `
    banner.innerHTML = `
      <h1>${this.name}</h1>
      <div class="center">
      <h3>Rating: ${this.rating}</h3>
      </div>
      <p>${this.summary}</p>
      <p class="center"><a href='${this.url}'>Official Website</a><br>${this.day[0]}s on ${this.network}</p>
      `
  }

}

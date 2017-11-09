let store = {shows: [], seasons: []}

document.addEventListener("DOMContentLoaded", function(){
  getShow();
  getSeasons();
})

function getShow() {
  fetch('http://api.tvmaze.com/singlesearch/shows?q=mr-robot').then(res => res.json()).then(json => createShow(json))
}

function createShow(json){
  let newShow = new Show(json)
  newShow.renderShow()
}

function getSeasons() {
  fetch('http://api.tvmaze.com/singlesearch/shows?q=mr-robot&embed=seasons').then(res => res.json()).then(json => createSeason(json._embedded.seasons))
}

function createSeason(json){
  json.forEach(function(season){
    let newSeason = new Season(season)
    newSeason.renderSeason()
  })
}

function getEpisodes(season) {
  debugger
  fetch(`http://api.tvmaze.com/singlesearch/shows?q=mr-robot&embed=episodes&season=${season}`).then(res => res.json()).then(json => console.log(json))
}

function createEpisode(json){
  json.forEach(function(season){
    let newSeason = new Season(season)
    newSeason.renderSeason()
  })
}

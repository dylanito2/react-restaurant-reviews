import React from 'react';
import GifBox from './GifBox'
import Form from './Form'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: 'yips',
      location: '10002',
      searchTerm: '',
      gifUrl: 'img/blackthing.png'
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault()
    this.queryApis()
  }

  generateSearchTerm(score) {
    console.log("Score Is: " + score)
    let wordbank
    if (score < 3 ) {
      wordbank = ['bad', 'gross', 'unpleasant', 'gross food',
      'tastes bad', 'shitty food', 'danger', 'stinky',
      'horrible', 'awful']
    }
    else if (score === 3) {
      wordbank =['eh', 'meh']
    }
    else if (score > 3) {
      wordbank = ['yum', 'nomnomnom', 'fantastic', 'delicious',
      'so good', 'gourmet shit', 'yummy', 'scrumptious',
      'nom', 'nom nom', 'nom nom nom']
    }
    else {
      wordbank = ['fail']
    }
    let word = wordbank[Math.floor(Math.random() * wordbank.length)]
    console.log("Search word is: " + word)
    return word
  }

  queryApis() {
    let yelpUrl = 'http://localhost:4000/?term=' + this.state.name + '&location=' + this.state.location
    fetch(yelpUrl)
    .then((resp) => {
      return resp.json()
    })
    .then((parsed) => {
      let rating = parsed['businesses'][0]['rating']
      let searchTerm = this.generateSearchTerm(rating)
      this.queryGiphy(searchTerm)
    })
  }

  queryGiphy(searchTerm) {
    let giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC"
    fetch(giphyUrl)
    .then((gifResp) => {
      return gifResp.json()
    })
    .then((gifs) => {
      console.log(gifs.data);
      let collection = gifs.data.map(function(element) {
        return element['images']['fixed_height']['url']
      })
      this.getLinkFromCollection(collection)
    })
  }

  getLinkFromCollection(collection) {
    let arrayValue = Math.floor(Math.random() * collection.length)
    this.setState({
      gifUrl: collection[arrayValue]
    })
  }


  render() {
    return (
      <div className="App">
        <GifBox gifUrl={this.state.gifUrl} />
        <Form onSubmit={this.handleSubmit} onChange={this.handleInputChange} name={this.state.name} location={this.state.location} />
      </div>
    );
  }
}

export default App;

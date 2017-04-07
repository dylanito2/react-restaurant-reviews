import React from 'react'

export default class GifBox extends React.Component {
  render() {
    return (
      <div className="col-md-8 col-md-offset-2" id='showGif'>
        <img src={this.props.gifUrl} alt='review-gif' className='giphy-box' />
      </div>
    )
  }
}

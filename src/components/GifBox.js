import React from 'react'

const GifBox = ( props ) => (
  <div className="col-md-8 col-md-offset-2" id='showGif'>
    <img src={props.gifUrl} alt='review-gif' className='giphy-box' />
  </div>
)

export default GifBox

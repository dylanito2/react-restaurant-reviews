import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div className="col-md-6 col-md-offset-3 form-container">
        <form onSubmit={this.props.onSubmit}>
          <label>Restaurant Name</label><br />
          <input type='text' value={this.props.name} name='name' onChange={this.props.onChange} className='form-control form-fields' /><br />
          <label>Zip Code</label><br />
          <input type='text' value={this.props.location} name='location' onChange={this.props.onChange} className='form-control form-fields' /><br />
          <input type='submit' className='btn btn-lg btn-classic'/>
        </form>
      </div>
    )
  }
}

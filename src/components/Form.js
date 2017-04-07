import React from 'react'

const Form = ( props ) => (
  <div className="col-md-6 col-md-offset-3 form-container">
    <form onSubmit={props.onSubmit}>
      <label>Restaurant Name</label><br />
      <input type='text' value={props.name} name='name' onChange={props.onChange} className='form-control form-fields' /><br />
      <label>Zip Code</label><br />
      <input type='text' value={props.location} name='location' onChange={props.onChange} className='form-control form-fields' /><br />
      <input type='submit' className='btn btn-lg btn-classic'/>
    </form>
  </div>
)

export default Form

import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({ 
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault() 
    this.props.addTodo(this.state)  // i.e. text, since only item in the state object
  }


  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}> 
          <p>
            <label>add todo </label>
            <input type="text" onChange={ event => this.handleChange(event)} 
            value={this.state.text} // make a controlled form 
            /> 
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}
  
let mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}
      // form value captured in local form input and thus value in the local state
      // want this to add to the Redux store
      // action goes in the dispatch




export default connect(null, mapDispatchToProps)(CreateTodo)
// only dispatching an action here, and the component doesn't take any state - so keep this as null in furst argument 


// ALTERNATIVE WAY: 
// if not given any arguments, connect will return dispatch as a prop to the component we're wrapping with connect. 
// So an alternative way to write the CreateTodo component could be:

// export default connect()(CreateTodo);

import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = { 
      firstName: this.state.firstName, 
      lastName: this.state.lastName 
    }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map((data, index) => {
      return (
        <div key={`${data.firstName}-${data.lastName}-${index}-wrapper`}>
        <span key={`${data.firstName}-${data.lastName}-${index}`}>{data.firstName} {data.lastName}</span>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="firstName" key={this.state.firstName}
            onChange={event => this.handleFirstNameChange(event)}
            value={this.state.firstName}
          />
          <input 
            type="text" 
            key={this.state.lastName}
            onChange={event => this.handleLastNameChange(event)}
            value={this.state.lastName}
          />
          <input type="submit" key="submit-button"/>
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;
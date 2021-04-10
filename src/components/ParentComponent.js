import React from 'react';
import DisplayData from './DisplayData';
import Form from './Form'

class ParentComponent extends React.Component{
  state = {
    firstName: "",
    lastName: ""
  }
  
  handleChange = event => {
    this.setState({
      [event.state.name]: event.target.value
    })
  }

  render(){
    return (
      <div>
        <Form
          formData ={this.state}
          handleChange={this.handleChange}/>
        <DisplayData formData={this.state}/>
      </div>
    )

}
}

export default ParentComponent;
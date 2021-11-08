// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component
{
  state = {
    data: [
      {
        "name" : "Manasa",
        "Location" : "Hyderabad"
      },
      {
        "name" : "Preeti",
        "Location" : "Hyderabad"
      },
      {
        "name" : "Vasanth",
        "Location" : "Hyderabad"
      },
      {
        "name" : "Sailesh",
        "Location" : "Hyderabad"
      },
      {
        "name" : "Aishwarya",
        "Location" : "Hyderabad"
      }

    ]
  }

  render()
  {
    var tableStyle = {
      
      "border": "1px solid black",
      "color": "red",
      // "padding-top": "20px",
      // "padding-bottom": "20px",
      "padding": "20px 40px",
      "background-color":"lightgrey",
      "width": "40%",
      "border-collapse":"collapse"
     
    };

    // var tdStyle = {
    //   color: "yellow"
    // }

    return(

      // <style>{"table{border:1px solid black;}"}</style>

      <div>
        <Employee Details />
        <table border="1" style={tableStyle} align="center">
          <tr>
            <th>Name</th>
            <th>Location</th>
          </tr>
          {
            this.state.data.map(item => <List data = {item}/>)
          }
        </table>
      </div>
    )
  }
}

class List extends Component
{
  render()
  {
    var tdStyle = {
      "color": "blue",
      "text-align":"center"
    }
    return(
      <tr>
        <td style={tdStyle}>{this.props.data.name}</td>
        <td style={tdStyle}>{this.props.data.Location}</td>
      </tr>
    )
  }
}

class Employee extends Component
{
  render()
  {
    return(
      <div align="center">
        <h1>Employee Name Details</h1>
      </div>
    )
    
  }
}


export default App;


/* NOTE: Above code is styling with jsx concept for the below unstyled code
import './App.css';
import { Component } from 'react';
class App extends Component
{
  state = {
    data: [
      {
        "name" : "Manasa",
        "Location" : "Tenali"
      },
      {
        "name" : "Preeti",
        "Location" : "Hyderabad"
      },
      {
        "name" : "Vasanth",
        "Location" : "Hyderabad"
      },
      {
        "name" : "Sailesh",
        "Location" : "Hyderabad"
      },
      {
        "name" : "Aishwarya",
        "Location" : "Hyderabad"
      }

    ]
  }

  render()
  {
    return(
      <div>
        <Employee Details/>
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Location</th>
          </tr>
          {
            this.state.data.map(item => <List data = {item}/>)
          }
        </table>
      </div>
    )
  }
}

class List extends Component
{
  render()
  {
    return(
      <tr>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.Location}</td>
      </tr>
    )
  }
}

class Employee extends Component
{
  render()
  {
    return(
      <div>
        <h1>Employee Name Details</h1>
      </div>
    )
  }
}

export default App; 
*/
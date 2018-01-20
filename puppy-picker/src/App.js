import React, { Component } from 'react';
import './App.css';
import Dog from './Dog/Dog';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class App extends Component {
  state = {
    selectorDropdown:[]
  }
  componentDidMount(){

    fetch('https://dog.ceo/api/breeds/list').then((results) => {
      return results.json();
    }).then((data) => {
      // console.log(data.message);
      let allBreedArray = data.message;
      let allBreedObject = {};
      for (let i=0; i<allBreedArray.length; i++){
        allBreedObject[i] = allBreedArray[i];
      }
      let newBreedArray = [];
      newBreedArray=Object.entries(allBreedObject);
      let selectorDropdown = newBreedArray.map((dog) => ({value:dog[1],label:dog[1]}))
      // console.log(newBreedArray);
      // console.log(selectorDropdown[0]);
      this.setState({selectorDropdown:selectorDropdown});
      // console.log(this.state.selectorDropdown);
    })
  }
  render() {
    return (
      <div className="App">
        <Select
          options={this.state.selectorDropdown}/>
      </div>
    );
  }
}

export default App;

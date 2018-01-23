import React, { Component } from 'react';
import './App.css';
import Dog from './Dog/Dog';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class App extends Component {
  state = {
    selectorDropdown:[],
    selectedDogs:[],
    whereMyDogsAt: [],
    dogPictures:[]
  }

  handleChange = (dog, index) => {
    // console.log(dog.label);
    fetch(`https://dog.ceo/api/breed/${dog.value}/images`).then(
      (results) => {
        return results.json()
      }).then(
        (data) => {
          // console.log(data.message[0]);
          let picture = data.message[0];
          let dogPictures = []
          let dogHash = {}
          dogHash = {dog:dog.value, picture:picture}
          dogPictures = [...this.state.dogPictures,dogHash];
          this.setState({
            dogPictures:dogPictures
          })
          // console.log(dogPictures);
          const selectedDogs = this.state.dogPictures.map(
            (dogObject, index) => {
              return(
                <Dog
                name={dogObject.dog}
                picture={dogObject.picture}
                key={index}/>
              )
            }
          )
          this.setState({selectedDogs:selectedDogs})
        })
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
        const { selectedOption } = this.state.selectedDogs;
        const value = selectedOption && selectedOption.value;
        return (
          <div className="App">
          <Select
          options={this.state.selectorDropdown}
          value={value}
          onChange={this.handleChange}
          />
          {this.state.selectedDogs}
          </div>
        );
      }
    }

    export default App;

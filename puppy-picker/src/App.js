import React, { Component } from 'react';
import './App.css';
import Dog from './Dog/Dog';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class App extends Component {
  state = {
    selectorDropdown:[],
    selectedDogs:[],
    dogPictures:[]
  }

  handleChange = (dog, index) => {
    fetch(`https://dog.ceo/api/breed/${dog.value}/images`).then(
      (results) => {
        return results.json()
      }).then(
        (data) => {
          let picture = data.message[0];
          let dogPictures = []
          let dogHash = {}
          dogHash = {dog:dog.value, picture:picture}
          dogPictures = [dogHash,...this.state.dogPictures];
          const selectedDogs = [dogPictures.map(
            (dogObject, index) => {
              return(
                <Dog
                name={dogObject.dog}
                picture={dogObject.picture}
                clicked={() => this.deleteHandler(index)}
                key={index}/>
              )
            }
          ),...this.state.selectedDogs]
          this.setState({selectedDogs:selectedDogs})
        })
      }

      deleteHandler = (dogIndex) => {
        console.log(dogIndex);
        const dogs = [...this.state.selectedDogs];
        dogs.splice(dogIndex, 1);
        console.log(dogs);
        this.setState({selectedDogs: dogs});
      }

      randomBreedGenerator = () => {
        console.log('random dog')
        const randomDogs = [...this.state.selectorDropdown]
        let aRandomDog = Math.floor(Math.random()*randomDogs.length)
        aRandomDog = randomDogs[aRandomDog].value
        console.log(aRandomDog)
        fetch(`https://dog.ceo/api/breed/${aRandomDog}/images`).then((results) => {
          return results.json();
        }).then((data) => {
          let picture = data.message[0]
          console.log(picture)
          let dogPictures = []
          let dogHash = {}
          dogHash = {dog:aRandomDog, picture:picture}
          console.log(dogHash);
          dogPictures = [dogHash,...this.state.dogPictures];
          const selectedDogs = [dogPictures.map( (dogObject, index) => {
            return (
              <Dog
              name={dogObject.dog}
              picture={dogObject.picture}
              clicked={() => this.deleteHandler(index)}
              key={index}/>
            )
          }),...this.state.selectedDogs]
          this.setState({selectedDogs:selectedDogs})
        })
      }

      componentDidMount(){

        fetch('https://dog.ceo/api/breeds/list').then((results) => {
          return results.json();
        }).then((data) => {
          let allBreedArray = data.message;
          let allBreedObject = {};
          for (let i=0; i<allBreedArray.length; i++){
            allBreedObject[i] = allBreedArray[i];
          }
          let newBreedArray = [];
          newBreedArray=Object.entries(allBreedObject);
          let selectorDropdown = newBreedArray.map((dog) => ({value:dog[1],label:dog[1]}))
          this.setState({selectorDropdown:selectorDropdown});
        })
      }
      render() {
        const { selectedOption } = this.state.selectedDogs;
        const value = selectedOption && selectedOption.value;
        return (
          <div className="App">
          <h1>Dog Catcher</h1>
          <Select
          options={this.state.selectorDropdown}
          value={value}
          onChange={this.handleChange}
          />
          <h3>Caught Breeds</h3>
          <button
          onClick={() => this.randomBreedGenerator()}
          className="randombutton"
          >
            Catch a Random Breed
          </button>
          {this.state.selectedDogs}
          </div>
        );
      }
    }

    export default App;

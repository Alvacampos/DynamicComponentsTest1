import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id: 'asd1', name: 'Gonzalo', age: '28', job: 'Web Dev' },
      {id: 'qwe2', name: 'Nicole', age: '25', job: 'Ing.' },
      {id: 'zxc3', name: 'Juan', age: '35', job: 'Slave'}
    ],
    showPersons: false,    
   }

  inputHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.job = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deleteHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  switchName = (txt) => {
    let persons = [...this.state.persons];
    persons = persons.map((element) => {
      if(element.id === 'asd1' ){
        return { id: 'asd1', name: 'Gonzalo', age: '28', job: txt }
      }
      else{
        return element;
      }
    });
    this.setState({persons: persons});   
  }

  addPerson = () => {
    const persons = [...this.state.persons];
    let person = { id: Math.floor(Math.random()*6666), name: prompt('Enter Name'), age: prompt('Enter age'), job: prompt('Enter Job')}
    persons.push(person);
    this.setState({persons: persons});
  }

  togglePersons = () => {
    let flag = !this.state.showPersons;
    this.setState({showPersons: flag})
  }

  render() {       
    //       Styles       //
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      borderRadius: '5px',
      cursor: 'pointer', 
      margin: '5px'
    }

    const styleTurn = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '5px'
    }

    const styleButton = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '5px'
    }
    const styleName = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '5px'
    } 
    //--------------------//
    let component = null; 
    if(this.state.showPersons){
      component = (
        <div className="person">
          {this.state.persons.map( (person,index) => {
            return (
              <Person
                key = { person.id } 
                name = { person.name } 
                age = { person.age } 
                job = { person.job }
                changed = { (event) => this.inputHandler(event, person.id) }
                click = { () => this.deleteHandler(index) }
              />  
              );
          })}            
        </div>       
      );      
    } 
    
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button 
          onClick = {() => this.switchName('Ruby Dev?')}
          style = {(this.state.persons.find( element => element.job === 'Web Dev') ? style : styleName)} 
        >
          Switch Name
        </button>
        <button
          onClick = {this.togglePersons}
          style = {(component !== null)? styleTurn : style}
        >
          Turn on
        </button>
        <button
          onClick = {this.addPerson}
          style = {(this.state.persons.length <= 2)? styleButton : style}
        >
          Add Person
        </button>      
        {component}                    
      </div>
    );
  }
}

export default App;

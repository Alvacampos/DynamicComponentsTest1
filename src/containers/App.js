import React, { Component } from 'react';
import Persons from './Persons';
import Display from './Display';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons: [
        {id: 'asd1', name: 'Gonzalo', age: '28', job: 'Web Dev' },
        {id: 'qwe2', name: 'Nicole', age: '25', job: 'Ing.' },
        {id: 'zxc3', name: 'Juan', age: '35', job: 'Slave'}
      ],
      showPersons: false,    
    };
  } 

  componentWillMount(){
    console.log('Test of componentWillMount');
  }
  componentDidMount(){
    console.log('The app componen did mount')    ;
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
        if(element.job !== 'Ruby Dev?'){
          return { id: 'asd1', name: 'Gonzalo', age: '28', job: txt }
        }
        else{
          return { id: 'asd1', name: 'Gonzalo', age: '28', job: 'Web Dev' }
        }
      }
      else{
        return element;
      }
    });
    this.setState({persons: persons});   
  }

  addPerson = () => {
    const persons = [...this.state.persons];
    let person = { 
      id: Math.floor(Math.random()*6666), 
      name: prompt('Enter Name'), 
      age: prompt('Enter age'), 
      job: prompt('Enter Job')
    }
    persons.push(person);
    this.setState({persons: persons});
  }

  togglePersons = () => {
    let flag = !this.state.showPersons;
    this.setState({showPersons: flag})
  }

  render() {       
    let component = null; 
    if(this.state.showPersons){      
      component = (
        <div className="person">          
          <Persons 
            persons = { this.state.persons }
            changed = { this.inputHandler }
            clicked = { this.deleteHandler }
          />
        </div>       
      );      
    }

    return (
      <div className="App">
        <Display
          persons = { this.state.persons }
          name = { this.switchName }
          toggle = { this.togglePersons }
          add = { this.addPerson }
          component = { component }
        />
        {component}                    
      </div>
    );
  }
}

export default App;
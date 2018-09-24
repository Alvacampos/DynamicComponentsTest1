import React, { Component } from 'react';
import Person from '../components/Person/Person';

class Persons extends Component{
	constructor(props){
		super(props);
	}

  componentDidMount(){
    console.log( 'The persons componen did mount' );
  }
  
  componentWillReceiveProps(nextProps){
		console.log('Props: ', nextProps);
	}

	render(){
		return this.props.persons.map( (person,index) => {
		  return (
		    <Person
		      key = { person.id } 
		      name = { person.name }
		      age = { person.age } 
		      job = { person.job }
		      changed = { (event) => this.props.changed(event, person.id) }
		      click = { () => this.props.clicked(index) }
		    />  
		  );
		});
	}
}

export default Persons;
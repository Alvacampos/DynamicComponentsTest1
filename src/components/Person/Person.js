import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import './Person.css';

class Person extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
    console.log( 'The person componen did mount' );
  }

  componentWillUnmount() {    
    console.log( 'The person componen was removed ');
	}

	componentWillReceiveProps(nextProps){
		console.log('Props: ', nextProps);
	}
	
	render(){
		return(
			<Auxiliary>			
				<p> Name: { this.props.name }, Age: { this.props.age }, Job: { this.props.job }</p>
				<p>{this.props.children}</p>
				<input type="text" onChange = { this.props.changed } value = { this.props.job }/>
				<br/>
				<button onClick = { this.props.click }>Delete</button>
			</Auxiliary>
		);
	}	
}

export default Person;
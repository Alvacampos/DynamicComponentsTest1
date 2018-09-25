import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import './Person.css';

class Person extends Component{
	constructor(props){
		super(props);
		this.inputElement = React.createRef();
	}

	componentDidMount(){
    console.log( 'The person componen did mount' );
    if(this.props.position === 0){
    	this.inputElement.current.focus();	
    }    
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
				<p> 
					Name: { this.props.name }, 
					Age: { this.props.age }, 
					Job: { this.props.job }
				</p>
				<p>{this.props.children}</p>
				<input 
					type="text" 					 
					value = { this.props.job }
					onChange = { this.props.changed }
					ref = { this.inputElement }
				/>
				<br/>
				<button onClick = { this.props.click }>Delete</button>
			</Auxiliary>
		);
	}	
}

export default Person;
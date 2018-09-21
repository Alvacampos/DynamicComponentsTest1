import React from 'react';
import './Person.css';

const Person = ( props ) => {
	return(
		<div>			
			<p> Name: {props.name}, Age: {props.age}, Job: {props.job}</p>
			<p>{props.children}</p>
			<input type="text" onChange = {props.changed} value = {props.job}/>
			<br/>
			<button onClick={props.click}>Delete</button>
		</div>
	);
}

export default Person;
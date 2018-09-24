import React from 'react';
import Auxiliary from '../hoc/Auxiliary';

const Display = ( props ) => {
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
    //--------------------/
	return (
		<Auxiliary>
			<h1>Hello World</h1>
        <button 
          onClick = {() => props.name('Ruby Dev?')}
          style = {(props.persons.find( element => element.job === 'Web Dev') ? style : styleName)} 
        >
          Switch Name
        </button>
        <button
          onClick = {props.toggle}
          style = {(props.component !== null)? styleTurn : style}
        >
          Turn on
        </button>
        <button
          onClick = {props.add}
          style = {(props.persons.length <= 2)? styleButton : style}
        >
          Add Person
        </button>
		</Auxiliary>
	);
}

export default Display;
import React from 'react';

const Validation = (props) => {
	let powerString = null;
	if(props.power >= 6){
		powerString = (
			<p>The force is strong with you!</p>
		);
	}else if(props.power > 0 && props.power < 6){
		powerString = (
			<p>Weak you are lift you must...</p>
		);
	}
	return (
		<div>
			<p>TEST YOUR POWER!!!</p>
			{props.children}
			{powerString}
		</div>
	);
}

export default Validation;
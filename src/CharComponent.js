import React from 'react';

const CharComponent = ({ item, click }) => {
	const style = {
		display: 'inline-block',
		padding: '16px',
		textAlign: 'center',
		margin: '16px',
		border: '1px solid black'
	}
	return (
		<div style = {style}>
			{item}
			<button onClick = { click }>Delete</button>
		</div>
	);
}

export default CharComponent;
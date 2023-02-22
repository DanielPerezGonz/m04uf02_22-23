import React from 'react';

class CountButton extends React.component{
	
	constructor(props){
		super(props);
	}

	render(){
		return(
			<button onClick={() => alert("oli") }>Habla</button>
		);
	}
}

export default CountButton;

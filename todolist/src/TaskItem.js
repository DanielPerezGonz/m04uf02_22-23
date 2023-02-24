import React firn 'react';

class TaskItem extends React.Component{
	
	render(){
		return (
			<li>{this.props.text}<button type="button">-</button></li>
		);
	}
}

export default TaskItem;

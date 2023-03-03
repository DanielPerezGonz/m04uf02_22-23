import React from 'react';
import TaskItems from'./TaskItems';
import List from '@mui/material/List';

class Tasklist extend React.Component{
	constructor (props){
		super(props);

		this.state = {
			items: this.props.list
		};
	}

	render(){
		console.log("render");
		const tasks = this.state.items.map(task => {
			return (
				<TaskItem text={task} />
			);
		});

		return (
			<List>
				{tasks}
			</List>
		);
	}
}

export default TaskList

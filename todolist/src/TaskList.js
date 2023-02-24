import React from 'react';
import TaskItems from'./TaskItems';

class Tasklist extend React.Component{
	constructor (props){
		super(props);

		this.state = {
			items: ["uno", "dos", "cuatro"]
		};
	}

	itemList = () => {
		let tasks = this.state.items.map(task => {
			<TaskItem text={task} />
		});

		return tasks;
	}

	render(){
		const tasks = this.state.items.map(task => {
			return (
				<li>{task}</li>
			);
		});

		return (
			<ol>
				{tasks}
			</ol>
		);
	}
}

export default TaskList

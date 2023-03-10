import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

import './TODO.css';

class App extends React.Component {
	constructor (props){
		super(props);

		this.state ={
			TaskList: ["Listen 1", "Listen 2"]
		};
	}
	addTask = (task) =>{
		console.log(task);

		this.state.tasktist.unshift(task);

		this.setState({
			tasktist: this.state.tasklist
		});
	}
	removeTask = (task_num) =>{
		this.state.tasklist.splice(task_num,1);
		
		this.setTate({
			tasklist: this.state.tasklist
		});
	}
	render(){
	  return (
	    <Box
		sx={{
			display:'flex',
			justifyContent:'center',
			alignItems:'center',
			height:'100%',
			background:'linear-gradient(to right bottom, #260089, #95eeb2'
		}}>
	
			<Paper elevation={3}
					sx={{
						padding:'15px'
					}}>
				<Title text="TO-DO-App" id="title" />

				<TaskForm onAddTask={this.addTask} />
				<TaskList list={this.state.tasklist} onRemoveTask={this.removeTask} />
	
				<p>you have <strong>{this.state.tasklist.length}</strong> pending tasks</p>
			</Paper>
		</Box>
  		);
	}
}

export default App;

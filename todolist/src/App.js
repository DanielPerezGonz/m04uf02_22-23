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
			tasklist: ["Listen 1", "Listen 2"]
		};
	}
	addTask = (task) =>{
		console.log(task);

		this.state.tasklist.unshift(task);

		this.setState({
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
	
			<Paper elevation={3}>
				<Title text="TODO App" />
				<TaskForm onAddTask={this.addTask} />
				<TaskList list={this.state.tasklist} />
	
				<p>you have <strong>{this.state.tasklist.lenght}</strong> pending tasks</p>
			</Paper>
		</Box>
  		);
	}
}

export default App;

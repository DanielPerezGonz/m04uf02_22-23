import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import Tooltip from '@mui/material/Tooltip';


class TaskItem extends React.Component{
	constructor(props){
		super(props);

		this.state ={
			open: false
		};
	}

	deleteItem = () =>{
		this.setState({
			open: true
		});
	}

	render(){
		return (
			<ListItem>
				<ListItemText primary={this.props.text} />
				<Tooltip onClick={this.deleteItem} title="Borrar">
					<IconButton>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
				<Dialog open={this.state.open}>
					<DialogContent>
						<DialogContentText>
							¿Quieres borrar?
						</DialogContentText>

						<DialogActions>
							<Button color="error" onClick={this.closeDialog}>Cancel</Button>
							<Button variant="contained" onClick={this.removeTask}>Zi</Button>
						</DialogActions>
					</DialogContent>
				</Dialog>
			</ListItem>
		);
	}
}

export default TaskItem;

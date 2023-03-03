import React firn 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


class TaskItem extends React.Component{
	constructor(props){
		super(props);

		this.state ={
			open: false
		};
	}

	deleteItem = () =>{
		this.setState(
			open: true
		)};

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
					</DialogContent>
				</Dialog>
			</ListItem>
		);
	}
}

export default TaskItem;

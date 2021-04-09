import React,{useState} from "react";
import {useDispatch} from 'react-redux';
import {addTodo} from '../../actions';
import cuid from 'cuid';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));


const AddTodo = () => {

    const classes = useStyles();

    const [tasks,setTasks] = useState('');
    const dispatch = useDispatch();

    function handleInputChange(e){
        setTasks(e.target.value);
    }

    function handleFormSubmit(e){
        e.preventDefault();
        dispatch(addTodo({task:tasks,id:cuid()}));
        e.target.userInput.value = "";
    }
    return(
        // <div>
        //     <form onSubmit={handleFormSubmit}>
        //         <input type="text" name="userInput" onChange={(e)=>handleInputChange(e)}/>
        //         <button type="submit">Add</button>
        //     </form>
        // </div>

        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleFormSubmit} style={{display:"flex",justifyContent:"space-between"}}>
            <Input placeholder="Add Todos" inputProps={{ 'aria-label': 'description' }} variant="outlined" name="userInput" onChange={(e)=>handleInputChange(e)}/>
            <Button variant="contained" color="primary" type="submit">Add</Button>
            </form>
        </div>


    )
}

export default AddTodo
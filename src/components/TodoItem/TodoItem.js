import React, { useState,useRef } from 'react';
import {useDispatch} from 'react-redux';
import {deleteTodo,updateTodo} from "../../actions";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
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

const TodoItem = ({task}) => {

    const classes = useStyles();

    const [isUpdate,setIsUpdate] = useState(false);
    const[val,setval]=useState(task.task)
    const dispatch = useDispatch();
    const textRef = useRef(null)

    function editItemToState(e){
        e.preventDefault();
        console.log(val)
        dispatch(updateTodo({message: val,id:task.id}));
        setIsUpdate(false);
        textRef.current = null;
    }

    const renderForm = () => {
        return(
            // <form onSubmit={editItemToState}>
            //     <input ref={textRef} type="text" defaultValue={task.task}/>
            //     <button type="submit">Edit todo</button>
            // </form>
            <div>
                <form className={classes.root}  onSubmit={editItemToState}>
                <Input  type="text" onChange={(e)=>setval(e.target.value)} defaultValue={task.task} />
                <Button variant="contained" type="submit">Edit todo</Button>
                </form>
            </div>
        )
    }

    const renderItem = () => {
        return(
            <>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                {task.task}

                   <div >
                    <IconButton aria-label="edit" onClick={()=>setIsUpdate(true)}><EditIcon /></IconButton>

                    <IconButton aria-label="delete" onClick={()=>dispatch(deleteTodo(task.id))} ><DeleteIcon /></IconButton>
                   </div>
                </div>
            </>
        )
    }
    return(
        <>
            <p></p>
            <div>{isUpdate ? renderForm() : renderItem()}</div>
        </>
    )
}

export default TodoItem

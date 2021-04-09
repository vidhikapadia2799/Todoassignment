import React from "react";
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function App() {
  return (
    <div>
      <Grid container justify='center' style={{ marginTop: '1rem'}}>
        <Grid item xs={11} md={8} lg={4} >
          <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
            <h1 style={{textAlign:"center"}}>Todo List</h1>
            <AddTodo />
            <TodoList/>
          </Paper>
        </Grid>
      </Grid>
    </div>
 );
}

export default App;

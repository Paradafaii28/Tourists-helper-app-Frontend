import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '45ch',
      backgroundColor: "white",
      display: "flex",
    },
  },
  btnSubmit: {
    backgroundColor: "white",
    marginLeft: "10px"
  }
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Title"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          id="outlined-textarea"
          label="Author"
          placeholder="Author"
          multiline
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          placeholder="Description"
          multiline
          rows={4}
        //   defaultValue=""
          variant="outlined"
        />
        <Button className={classes.btnSubmit}variant="outlined">submit</Button>
      </div>
    </form>
  );
}

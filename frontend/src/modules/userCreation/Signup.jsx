import React, { useState } from 'react';
import { TextField, Input, IconButton, InputAdornment, Button } from '@material-ui/core';
import Axios from 'axios';

import useStyles from './styles';

export const Signup = () => {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
           Axios.post("http://localhost:5000/create", {username, phone, password})
           .then(response => {
               console.log(response)
           })
           } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className={classes.signupBody}>
            <form onSubmit={onSubmitForm}>
            <div className={classes.signupBody}>
                <h1>Opret en bruger her</h1>
                <TextField onChange={username => setUsername(username)} className={classes.input} id="standard-basic" label="Brugernavn" variant="standard" />
                <TextField onChange={phone => setPhone(phone)} className={classes.input} id="standard-basic" label="Telefon nummer" variant="standard" />
                <TextField onChange={password => setPassword(password)} className={classes.input} id="standard-basic" label="Kodeord" type="password" variant="standard" /><br/>
            </div>
            <Button className={classes.button} value="submit" type="submit" variant="outlined">Opret nu</Button>
            </form>
        </div>
    )
}


import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";

// Styles
import useStylesInput from "./style";


export default function Input(props) {

    const classes = useStylesInput();

    const { addItem } = props;
    const [item, setItem] = useState({
        text: ' ',
        key: uuidv4(),
        rating: false,
        done: false,
        edit: false
    })

    const newItem = (e) => {
        e.preventDefault();
        if (item.text) {
            addItem(item)
            setItem({
                ...item,
                key: uuidv4(),
                text: '',
            })
        }
    };

    const onChange = (e) => (
        e.target.value.length < 50 && setItem({...item, key: uuidv4(), text: e.target.value,})
    )

    return (
        <Paper component="form" onSubmit={newItem} className={classes.root}>
            <InputBase className={classes.input} fullWidth placeholder=" Name..." onChange={onChange} value={item.text}/>
            <Button type="submit">Add item</Button></Paper>
    )
}
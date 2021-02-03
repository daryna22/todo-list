import React from 'react';
import Button from '@material-ui/core/Button';

// Style
import useStylesClear from './style';


export default function ClearAll(props) {
    const classes = useStylesClear();
    const { clearAll } = props;

    return (
        <div className={classes.root}>
        <Button onClick={clearAll}>Clear All</Button>
        </div>
    );
}

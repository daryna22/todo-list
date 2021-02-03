import React from 'react';

// Parts
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import CreateIcon from '@material-ui/icons/Create';
import CancelIcon from '@material-ui/icons/Cancel';

// Styles
import useStylesList from "./style";


export default function Items(props) {
    const classes = useStylesList()

    const {items, onChangeItem} = props;


    return (
        <ul className={classes.root}>
            {items.map(item => {
                return (
                    <li key={item.key} className={classes.item}>
                        <Typography className={classes.root}> {item.text} </Typography>
                        <div>
                            <IconButton onClick={() => onChangeItem(item.key, 'rating')}>
                                {item.rating ? <StarIcon className={classes.rating}/>: <StarBorderIcon className={classes.rating}/>} </IconButton>
                            <IconButton onClick={() => onChangeItem(item.key, 'done')}>
                                {item.done ? <CheckCircleOutlineIcon className={classes.round}/> : <RadioButtonUncheckedIcon className={classes.round}/>} </IconButton>
                            <IconButton> {item.edit ? <BorderColorIcon className={classes.edit}/> : <CreateIcon className={classes.edit}/>} </IconButton>
                            <IconButton> <CancelIcon className={classes.clear}/> </IconButton>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
}

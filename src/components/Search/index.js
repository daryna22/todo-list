import React from 'react';

// Parts
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search"

// Styles
import useStylesSearch from "./style";

export default function Search(props) {
    const classes = useStylesSearch()

    const { onSearch } = props;

    return (
        <div className={classes.root}>
            <InputBase  placeholder="Search…" onChange={(e) => onSearch(e.target.value)}/>
                <SearchIcon className={classes.search} /></div>
    );
}

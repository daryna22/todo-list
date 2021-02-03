import React, {useState} from 'react';
import 'normalize.css/normalize.css'

// Parts 
import Search from "../components/Search";
import Input from "../components/Input";
import ClearAll from "../components/ClearAll";
import Items from "../components/List";
import sortBy from 'lodash/sortBy';
import filter from 'lodash/filter';
import {Typography} from '@material-ui/core';

// Style
import useStylesApp from "./style";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#e0e0e0',
        },
        secondary: {
            main: '#69f0ae',
        },
    },
    overrides: {
        MuiButton: {
            label: {
                color: "#00e676",
            },
            root: {
                backgroundColor: "#e0e0e0",
                border: "1px solid #00e676"
            }
        }
    }
});


export default function App() {
    const classes = useStylesApp()

    const [searchTask, setSearchTask] = useState();
    const [list, setList] = useState([
    ]);

    const addItem = (value) => {
        setList([...list, value])
    }

    const onSearch = (searchValue) => {
        setSearchTask(searchValue);
    }

    const onChangeItem = (key, mode, value) => {
        const newArray = list.map(item => {
                if (item.key === key) {
                    item[mode] = value || !item[mode];
                }
                return item;
            })

        setList(newArray)
    }

    const clearAll = () => setList([]);

    const ratedList = searchTask ? filter(list, item => item.text.includes(searchTask)) : list;

    return (
        <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
              <header className={classes.header}>
                <Typography className={classes.name} align="center" > To Do List</Typography>
                <Search onSearch={onSearch} className={classes.search} />
                </header>
                    <Input addItem={addItem}/>
                    <Items items={(sortBy(ratedList, item => item.rating === false))}  onChangeItem={onChangeItem}/>
                    <ClearAll clearAll ={clearAll}/>
        </div>
        </MuiThemeProvider>)
}

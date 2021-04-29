import React, { useState } from 'react'
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import I18n from '../plugins/I18n';

const CustomInput = withStyles((theme) =>
    createStyles({
        input: {
            borderRadius: 10,
            position: 'relative',
            backgroundColor: theme.palette.common.white,
            border: '1px solid lightgrey',
            width: '150px',
            padding: '10px 12px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            fontFamily: 'sans-serif',
            '&:focus': {
                borderColor: theme.palette.primary.main,
                borderRadius: 10,
            },
        },
    }),
)(InputBase);

const useStyles = makeStyles((theme) =>
    ({
        root: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        formControl: {
            zIndex: 1,
            border: 'none',
            minWidth: 150,
            padding: '20px ',
        },
        selectEmpty: {
            border: '1px solid lightgrey',
            borderRadius: 10,
            marginTop: 45,
            minWidth: '195px !important',
            boxShadow: 'none',
        },
        menuItem: {
            display: 'flex',
            padding: '5px',
            borderBottom: '1px solid lightgrey',
            background: 'transparent',
            transition: '.2s ease',
            width: '95%',
            margin: '0 auto',
            '&:hover': {
                borderColor: theme.palette.primary.main,
            },
        },
    }),
);

const SelectLanguge = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        value: 'Engilsh',
        name: '',
    });

    const handleChange = (event) => {
        const {name} = event.target
        const {value} = event.target
        setState({
            ...state,
            [name]: event.target.value,
        });
        I18n.changeLanguage(!value ? 'en' : value);
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <Select
                value={state.value}
                onChange={handleChange}
                inputProps={{
                    name: 'value',
                }}
                renderValue={(value) => `${value}`}
                input={<CustomInput/>}
                MenuProps={{ classes: { paper: classes.selectEmpty } }}
            >
                <MenuItem className={classes.menuItem} value="English">{I18n.t('language.english')}</MenuItem>
                <MenuItem className={classes.menuItem} value="Russian">{I18n.t('language.russian')}</MenuItem>

            </Select>
        </FormControl>
    )
}

export default SelectLanguge;

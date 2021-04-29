import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import I18n from '../../../plugins/I18n';

const theme = createMuiTheme({
    overrides: {
        MuiTableRow: {
            root: {
                "& > .MuiTableCell-body": {
                    fontSize: 16,
                },
                "& > .MuiTableCell-body:nth-child(1)": {
                    fontSize: 16,
                    fontWeight: 700,
                    textAlign: 'center',
                    padding: 15
                },
            }
        },

    }
});

const useStyles = makeStyles({
    root: {
        boxShadow: 'none',
        overflowX: 'hidden',
        overflow: 'auto',
        height: '70vh',
    },
    table: {
        width: ' 100%',
        marginTop: 16,
        overflowX: 'hidden',
        overflow: 'auto',
        height: '70vh',
    },
    padding: {
        paddingBottom: 0,
        borderBottom: 0,
        fontSize: 16,
        fontWeight: 700
    },
    alignCenter: {
        paddingRight: 16,
        fontSize: 16,

    },
    padding_right: {
        paddingRight: 20,
        fontSize: 16,
    },
    padding_top: {
        paddingTop: 0,
        fontSize: 12,
        fontWeight: 500,
        color: "#666666"
    }
});

function createData(age, chest_inches, waist_inches, hips__inches) {
    return { age, chest_inches, waist_inches, hips__inches };
}

const rows = [
    createData(I18n.t("kids.tinyBabe"), '16-17', '16-17', '16-17'),
    createData(I18n.t("kids.newborn"), '17-17.7', '17-17.7', '17-17.7'),
    createData('0-3m', '17.7-18.5', '17.7-18.5', '17.7-18.5'),
    createData('3-6m', '18.5-19.3', '18-19', '18.5-19.3'),
    createData('6-9m', '19.3-20' ,'18.5-19.3', '19.3-20'),
    createData('9-12m', '20-21', '19-19.7', '20-21'),
    createData('12-18m', '20.5-21.3', '19.3-20', '21-22'),
    createData('18-24m', '21-21.7', '19.7-20.5', '21-22'),
];

export default function BasicTable() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper} className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableCell className={classes.padding} align="center">{I18n.t("kids.age")}</TableCell>
                        <TableCell className={classes.padding} align="center">{I18n.t("chest")}</TableCell>
                        <TableCell className={classes.padding} align="center">{I18n.t("waist")}</TableCell>
                        <TableCell className={classes.padding} align="center">{I18n.t("hips")}</TableCell>
                        <TableRow>
                            <TableCell className={classes.padding_top} ></TableCell>
                            <TableCell className={classes.padding_top} align="center">{I18n.t("inches")}</TableCell>
                            <TableCell className={classes.padding_top} align="center">{I18n.t("inches")}</TableCell>
                            <TableCell className={classes.padding_top} align="center">{I18n.t("inches")}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.age}>
                                <TableCell component="th" scope="row">{row.age}</TableCell>
                                <TableCell className={classes.alignCenter} align="center">{row.chest_inches}</TableCell>
                                <TableCell className={classes.padding_right} align="center">{row.waist_inches}</TableCell>
                                <TableCell align="center">{row.hips__inches}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}
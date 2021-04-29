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
                "& > .MuiTableCell-body:nth-child(1)": {
                    fontSize: 16,
                    fontWeight: 500,
                    textAlign: 'center',
                    padding: 15
                },
            }
        }
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
        width: ' 75%',
        margin: '16px auto',
        overflow: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    tableHead: {
        fontWeight: 700,
        fontSize: 16,
    }
});

function createData(size, uk, uk1) {
    return { size, uk, uk1 };
}

const rows = [
    createData(39, 7, 5),
    createData(39.5, 7.5, 5.5),
    createData(40, 8, 6),
    createData(40.5, 8.5, 6.5),
    createData(41, 9, 7),
    createData(41.5, 9.5, 7.5),
    createData(42, 10, 8),
    createData(42.5, 10.5, 8.5),
    createData(43, 11, 9),
    createData(43.5, 11.5, 9.5),
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper} className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableCell className={classes.tableHead} align='center'>{I18n.t("size")}</TableCell>
                        <TableCell className={classes.tableHead} align="center">UK</TableCell>
                        <TableCell className={classes.tableHead} align="center">UK</TableCell>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.size}>
                                <TableCell component="th" scope="row">{row.size}</TableCell>
                                <TableCell align="center">{row.uk}</TableCell>
                                <TableCell align="center">{row.uk1}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}
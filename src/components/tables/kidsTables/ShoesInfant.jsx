import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";

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
        overflowX: 'hidden'
    },
    table: {
        width: ' 75%',
        margin: '16px auto',
        overflow: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    tableHead: {
        fontWeight: 700,
        fontSize: 16,
    }
});

function createData(eu, uk, uk1) {
    return { eu, uk, uk1 };
}

const rows = [
    createData(16, 0.5, 0.5),
    createData(16.5, 1, 0.5),
    createData(17, 1.5, 1),
    createData(17.5, 2, 1),
    createData(18, 2.5, 1.5),
    createData(18.5, 3, 2),
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper} className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableCell className={classes.tableHead} align='center'>EU</TableCell>
                        <TableCell className={classes.tableHead} align="center">UK</TableCell>
                        <TableCell className={classes.tableHead} align="center">UK</TableCell>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.eu}>
                                <TableCell component="th" scope="row">{row.eu}</TableCell>
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
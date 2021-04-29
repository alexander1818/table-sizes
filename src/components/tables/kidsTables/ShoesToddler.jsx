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
                "& > .MuiTableBody-root": {
                    height: '51vh',
                    overflow: 'auto'
                },
            }
        },
        MuiTableBody: {
            root: {
                height: '65vh',
                overflow: 'hidden auto'
            }
        }
    }
});

const useStyles = makeStyles({
    root: {
        boxShadow: 'none',
        overflowX: 'hidden',
        height: '70vh',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            width: '5px',
        },
        '&:hover::-webkit-scrollbar-track': {
            background: '#f1f1f1'
        },
        '&:hover::-webkit-scrollbar-thumb': {
            background: '#888'
        },
        [theme.breakpoints.down('sm')]: {
            height: '70vh',
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                width: '5px',
            },
            '&:hover::-webkit-scrollbar-track': {
                background: '#f1f1f1'
            },
            '&:hover::-webkit-scrollbar-thumb': {
                background: '#888'
            }
        }
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
        borderBottom: 'none',
    }
});

function createData(eu, uk, uk1) {
    return { eu, uk, uk1 };
}

const rows = [
    createData(19, 3.5, 2.5),
    createData(19.5, 4, 3),
    createData(20, 4.5, 3.5),
    createData(20.5, 5, 4),
    createData(21, 5.5, 4.5),
    createData(22, 6, 5),
    createData(22.5, 6.5, 5.5),
    createData(23, 7, 6),
    createData(23.5, 7.5, 6.5),
    createData(24, 8, 7),
    createData(25, 8.5, 7.5),
    createData(25.5, 9, 8),
    createData(26, 9.5, 8.5),
    createData(27, 10, 9),
    createData(27.5, 10.5, 9.5),
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
                    <TableBody style={{ height: '65vh', overflowY: 'auto' }}>
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
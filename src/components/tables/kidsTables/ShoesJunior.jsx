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
            },
            MuiTableHead: {
                root: {
                    position: 'fixed',
                    width: '60%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    background: '#fff',
                    boxShadow: '-20px 2px 20px 4px #ffff',
                    zIndex: 5,
                    transform: 'translateY(-16px)',
                    '@media (max-width: 600px)': {
                        width: '100%',
                    }
                }
            },
            MuiTableBody: {
                root: {
                    transform: 'translateY(30px)'
                }
            },
            MuiTableContainer: {
                root: {
                    overflowX: 'hidden'
                }
            }
        }
    }
});

const useStyles = makeStyles({
    root: {
        boxShadow: 'none',
        overflowX: 'hidden',
        height: '70vh'
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

function createData(eu, us,) {
    return { eu, us, };
}

const rows = [
    createData(27.5, 9.5),
    createData(28, 10),
    createData(29, 10.5),
    createData(30, 11),
    createData(30.5, 11.5),
    createData(31, 12),
    createData(31.5, 12.5),
    createData(32, 13),
    createData(33, 13.5),
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper} className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableCell className={classes.tableHead} align='center'>EU</TableCell>
                        <TableCell className={classes.tableHead} align="center">US</TableCell>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.eu}>
                                <TableCell component="th" scope="row">{row.eu}</TableCell>
                                <TableCell align="center">{row.us}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}
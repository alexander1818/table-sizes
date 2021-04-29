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
                "& > .MuiTableCell-body:nth-child(2)": {
                    fontSize: 16,
                    textAlign: 'left',
                    padding: '16px 18px 13px 16px',
                    '@media (max-width: 600px)': {
                        textAlign: 'center',
                    },
                    '@media (max-width: 960px)': {
                        textAlign: 'center',
                    }
                },
                "& > .MuiTableCell-body:nth-child(1)": {
                    fontSize: 16,
                    fontWeight: 500,
                    textAlign: 'left',
                    paddingLeft: 36,
                    '@media (max-width: 600px)': {
                        textAlign: 'center',
                        paddingLeft: 0
                    },
                    '@media (max-width: 960px)': {
                        textAlign: 'center',
                        paddingLeft: 16,
                    }
                },
            }
        }
    }
});

const useStyles = makeStyles({
    root: {
        boxShadow: 'none',
        overflowX: 'hidden',
        height: '70vh',
        fontSize: 16,
    },
    table: {
        width: '65%',
        margin: '16px auto',
        overflow: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    tableHead: {
        fontWeight: 700,
        fontSize: 16,
        paddingBottom: 32,
        "&:nth-child(1)": {
            fontWeight: 700,
            textAlign: 'left',
            padding: '16px 16px 32px 34px',
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
                paddingLeft: 16
            }
        },
        "&:nth-child(2)": {
            fontWeight: 700,
            textAlign: 'left',
            padding: '16px 16px 32px 13px',
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
            }
        },
    }
});

function createData(size, uk, uk1) {
    return { size, uk, uk1 };
}

const rows = [
    createData(35, 5, 2.5),
    createData(35.5, 5.5, 2.5),
    createData(36, 6, 3.5),
    createData(37, 6.5, 4),
    createData(37.5, 7, 4.5),
    createData(38, 7.5, 5),
    createData(39, 8, 5.5),
    createData(39.5, 8.5, 6),
    createData(40, 9, 6.5),
    createData(40.5, 9.5, 7),
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
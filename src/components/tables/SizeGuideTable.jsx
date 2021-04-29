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
                    fontWeight: 700,
                    textAlign: 'center',
                    borderBottom: 0,
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
        width: ' 100%',
        marginTop: 16,
    },
    padding: {
        paddingLeft: 0,
        paddingBottom: 0,
        borderBottom: 0,
        fontSize: 16,
        fontWeight: 700
    },
    alignCenter: {
        paddingRight: 28,
        paddingTop: '0px',
        borderBottom: 0,
    },
    padding_right: {
        paddingRight: 20,
        borderBottom: 0,
    },
    padding_top: {
        paddingTop: 0,
        paddingBottom: 0,
        fontSize: 12,
        fontWeight: 500,
        borderBottom: 0,
        color: "#666666"
    },
    borderBottom: {
        borderBottom: 0,
    }
});

function createData(size, uk, bust_inches, bust_cm, waist_inches, waist_cm, hips__inches, hips_cm,) {
    return { size, uk, bust_inches, bust_cm, waist_inches, waist_cm, hips__inches, hips_cm, };
}

const rows = [
    createData('XS', 6, 31, 78.5, 23.75, 60.5, 33.75, 86),
    createData('S', 8, 32, 81, 24.75, 63, 34.75, 88.5),
    createData('M', 10, 34, 86, 26.75, 68, 36.75, 93.5),
    createData('L', 10, 36, 91, 28.75, 73, 38.75, 98.5),
    createData('XL', 14, 38, 96, 30.75, 78, 40.75, 103.5),
    createData('2XL', 16, 40, 101, 32.75, 83, 42.75, 108.5),
    createData('3XL', 18, 42, 106, 34.75, 88, 44.75, 113.5),
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper} className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableCell style={{ borderBottom: 0, paddingBottom: 0, fontWeight: 700, fontSize: 16 }} align="center">Size</TableCell>
                        <TableCell style={{ borderBottom: 0, paddingBottom: 0, fontWeight: 700, fontSize: 16 }} align="center">UK</TableCell>
                        <TableCell className={classes.padding} align="right"></TableCell>
                        <TableCell className={classes.padding} align="left">Bust</TableCell>
                        <TableCell className={classes.padding} align="right"></TableCell>
                        <TableCell className={classes.padding} align="left">Waist</TableCell>
                        <TableCell className={classes.padding} align="right"></TableCell>
                        <TableCell className={classes.padding} align="left">Hips</TableCell>

                        <TableRow >
                            <TableCell className={classes.padding_top} ></TableCell>
                            <TableCell className={classes.padding_top} align="right"></TableCell>
                            <TableCell className={classes.padding_top} align="right">Inches</TableCell>
                            <TableCell className={classes.padding_top} align="right">CM</TableCell>
                            <TableCell className={classes.padding_top} align="right">Inches</TableCell>
                            <TableCell className={classes.padding_top} align="right">CM</TableCell>
                            <TableCell className={classes.padding_top} align="right">Inches</TableCell>
                            <TableCell className={classes.padding_top} align="right">CM</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.size}>
                                <TableCell component="th" scope="row">{row.size}</TableCell>
                                <TableCell className={classes.borderBottom} align="center">{row.uk}</TableCell>
                                <TableCell className={classes.alignCenter} align="right">{row.bust_inches}</TableCell>
                                <TableCell className={classes.borderBottom} align="right">{row.bust_cm}</TableCell>
                                <TableCell className={classes.padding_right} align="right">{row.waist_inches}</TableCell>
                                <TableCell className={classes.borderBottom} align="right">{row.waist_cm}</TableCell>
                                <TableCell className={classes.borderBottom} align="right">{row.hips__inches}</TableCell>
                                <TableCell className={classes.borderBottom} align="right">{row.hips_cm}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}
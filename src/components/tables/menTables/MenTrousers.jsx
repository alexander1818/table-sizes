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
                    fontWeight: 700,
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
        width: ' 100%',
        marginTop: 16,
    },
    padding: {
        paddingLeft: 0,
        paddingBottom: 0,
        borderBottom: 0,
        fontSize: 16,
        fontWeight: 700,
        [theme.breakpoints.down('sm')]: {
            transform: 'translateX(-15px)'
        }
    },
    padding_top: {
        paddingTop: 0,
        fontSize: 12,
        fontWeight: 500,
        color: "#666666"
    }
});

function createData(size, waist_inches, waist_cm) {
    return { size, waist_inches, waist_cm };
}

const rows = [
    createData('26"', '26', '66'),
    createData('28"', '28', '77'),
    createData('30"', '30', '76'),
    createData('31"', '31', '78.5'),
    createData('32"', '32', '81'),
    createData('33"', '33', '82.5'),
    createData('34"', '34', '86'),
    createData('36"', '36', '91'),
    createData('38"', '38', '96'),
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper} className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableCell style={{ borderBottom: 0, paddingBottom: 0, fontWeight: 700, fontSize: 16 }} align="center">{I18n.t("size")}</TableCell>
                        <TableCell className={classes.padding} align="right"></TableCell>
                        <TableCell className={classes.padding} align="left">{I18n.t("waist")}</TableCell>
                        <TableRow>
                            <TableCell className={classes.padding_top} ></TableCell>
                            <TableCell style={{ paddingRight: 0 }} className={classes.padding_top} align="right">{I18n.t("inches")}</TableCell>
                            <TableCell className={classes.padding_top} align="center">CM</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.size}>
                                <TableCell component="th" scope="row">{row.size}</TableCell>
                                <TableCell style={{ paddingRight: 0 }} align="right">{row.waist_inches}</TableCell>
                                <TableCell align="center">{row.waist_cm}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}
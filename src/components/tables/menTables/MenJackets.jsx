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

function createData(size, chest_inches, chest_cm) {
    return { size, chest_inches, chest_cm };
}

const rows = [
    createData('XXS', '32-34', '81-68'),
    createData('XS', '34-36', '86-91'),
    createData('S', '36-38', '91-96'),
    createData('M', '40-42', '96-101'),
    createData('L', '42-44', '101-106'),
    createData('XL', '46-48', '111-116'),
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
                        <TableCell className={classes.padding} align="left">{I18n.t("chest")}</TableCell>
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
                                <TableCell style={{ paddingRight: 0 }} align="right">{row.chest_inches}</TableCell>
                                <TableCell align="center">{row.chest_cm}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}
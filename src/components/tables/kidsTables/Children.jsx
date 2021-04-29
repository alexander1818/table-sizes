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
        paddingBottom: 0,
        borderBottom: 0,
        fontSize: 16,
        fontWeight: 700
    },
    alignCenter: {
        paddingRight: 16
    },
    padding_right: {
        paddingRight: 20,
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
    createData('2-3y', '21.3-22', '20-21', '21.7-22.8'),
    createData('3-4y', '21.7-22.4', '20.5-21.3', '22.5-23.6'),
    createData('4-5y', '22-22.8', '21-21.7', '23.2-24.5'),
    createData('5-6y', '22.4-23.2', '21.3-22', '24-25.2'),
    createData('6-7y', '22.8-24.4', '21.7-22.8', '24.8-26.4'),
    createData('7-8y', '24-25.6', '22.5-23.2', '26-27.6'),
    createData('8-9y', '25.2-26.8', '22.8-24', '27.2-28.7'),
    createData('9-10y', '26.4-28', '23.6-24.5', '28.3-30'),
    createData('27.6-29', '24-25.2', '19.7-20.5', '29.5-31'),
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
                            <TableCell className={classes.padding_top}></TableCell>
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
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
    createData('11-12y', '28.7-30.3', '24.8-25.6', '30.7-32.3'),
    createData('12-13y', '30-31.5', '26-27.2', '31.9-33.5'),
    createData('13-14y', '31-32.7', '26.8-28', '33.1-34.6'),
    createData('14-15y', '32.3-34', '27.6-28.7', '34.3-35.8'),
    createData('15-16y', '33.5-35', '29.1-30.7', '35.4-37'),
    createData('From 16y', '34.6-36.2', '29.1-30.7', '36.6-38.2'),
    createData('From 17y', '35.8-37.4', '30.3-31.9', '37.8-39.4'),
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper} className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableCell style={{ borderBottom: 0, paddingBottom: 0, paddingRight: 20, fontWeight: 700, fontSize: 16 }} align="center">{I18n.t("kids.age")}</TableCell>
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
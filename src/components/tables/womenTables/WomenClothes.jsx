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
                    padding: '16px 18px 13px 0px',
                    '@media (max-width: 600px)': {
                        fontSize: 14,
                        padding: '15px 0',
                    }
                },
                "& > .MuiTableCell-root": {
                    '@media (max-width: 600px)': {
                        padding: '0px 4px',
                        textAlign: 'center',
                        borderRight: '1px solid #d3d3d3',
                        '&:last-child': {
                            borderRight: 'none'
                        }
                    }
                }
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
        marginTop: 11,
    },
    tableHead: {
        borderBottom: 0,
        paddingBottom: 0,
        fontWeight: 700,
        fontSize: 17,
        paddingLeft: '3px',
        paddingTop: '20px',
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
            padding: '6px 0',
            textAlign: 'center',
        }
    },
    tableHeadUK: {
        borderBottom: 0,
        paddingBottom: 0,
        fontWeight: 700,
        fontSize: 17,
        paddingLeft: '18px',
        paddingRight: '0px',
        paddingTop: '20px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
            padding: '6px 0'
        }
    },
    tableRow: {
        fontWeight: 700,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            padding: 4,
        }
    },
    padding: {
        paddingLeft: 2,
        paddingBottom: 0,
        paddingTop: 20,
        borderBottom: 0,
        fontSize: 16,
        fontWeight: 700,
        transform: 'translateX(-18px)',
        [theme.breakpoints.down('lg')]: {
            "&:nth-child(3)": {
                display: 'block'
            },
        },
        [theme.breakpoints.down('md')]: {
            "&:nth-child(3)": {
                display: 'none'
            },
        },
        [theme.breakpoints.up('md')]: {
            "&:nth-child(3)": {
                display: 'block'
            },
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
            padding: '0px 0',
            transform: 'translateX(-15px)'
        }

    },
    alignCenter: {
        textAlign: 'center',
        fontSize: 16,
        padding: '15px 15px 15px 21px',
        [theme.breakpoints.down('sm')]: {
            padding: '4px 4px',
            textAlign: 'center'
        }
    },
    alignCenterUK: {
        textAlign: 'center',
        fontSize: 16,
        padding: '13px 15px 15px 25px',
        [theme.breakpoints.down('sm')]: {
            padding: '4px 4px',
            textAlign: 'center'
        }
    },
    padding_right: {
        paddingRight: 20,
        [theme.breakpoints.down('sm')]: {
            paddingRight: 4,
        }
    },
    padding_top: {
        paddingTop: 0,
        fontSize: 12,
        fontWeight: 500,
        color: "#666666",
        borderBottom: 0,
        "&:nth-child(7)": {
            paddingRight: 7
        },
        "&:nth-child(3)": {
            display: 'block'
        },
        [theme.breakpoints.down('sm')]: {
            "&:nth-child(3)": {
                display: 'none'
            },
        }
    },
    padding_top_inches: {
        fontSize: 12,
        fontWeight: 500,
        color: "#666666",
        padding: '0 5px 16px 0',
        textAlign: 'right',
        borderBottom: 0
    },
    waistInches: {
        padding: '14px 0px 15px 36px',
         fontSize: 16,
        [theme.breakpoints.down('sm')]: {
            padding: '4px 4px',
            textAlign: 'center'
        }
    },
    waistCM: {
        padding: '14px 0px 15px 31px',
         fontSize: 16,
        [theme.breakpoints.down('sm')]: {
            padding: '4px 4px',
            textAlign: 'center'
        }
    },
    hipsInches: {
        padding: '14px 0px 15px 44px',
         fontSize: 16,
        [theme.breakpoints.down('sm')]: {
            padding: '4px 4px',
            textAlign: 'center'
        }
    },
    hipsCM: {
        padding: '14px 16px 15px 31px',
         fontSize: 16,
        [theme.breakpoints.down('sm')]: {
            padding: '4px 4px',
            textAlign: 'center'
        }
    },
    cellForDesctop: {

        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    }
});

function createData(size, uk, bust_inches, bust_cm, waist_inches, waist_cm, hips__inches, hips_cm,) {
    return { size, uk, bust_inches, bust_cm, waist_inches, waist_cm, hips__inches, hips_cm, };
}

const rows = [
    createData('XS', 6, 31, 78.5, 23.75, 60.5, 33.75, 86),
    createData('S', 8, 32, 81, 24.75, 63, 34.75, 88.5),
    createData('M', 10, 34, 86, 26.75, 68, 36.75, 93.5),
    createData('L', 12, 36, 91, 28.75, 73, 38.75, 98.5),
    createData('XL', 14, 38, 96, 30.75, 78, 40.75, 103.5),
    createData('XXL', 16, 40, 101, 32.75, 83, 42.75, 108.5),
    createData('XXXL', 18, 42, 106, 34.75, 88, 44.75, 113.5),
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper} className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                            <TableCell className={classes.tableHead} style={{ borderRight: 'none' }} align="center">{I18n.t("size")}</TableCell>
                            
                            <TableCell className={classes.tableHeadUK} align="center">UK</TableCell>
                            <TableCell className={classes.padding} align="right"></TableCell>
                            <TableCell className={classes.padding} align="right"></TableCell>
                            <TableCell className={classes.padding} align="left">{I18n.t("bust")}</TableCell>
                            <TableCell className={classes.padding} align="right"></TableCell>
                            <TableCell className={classes.padding} align="left">{I18n.t("waist")}</TableCell>
                            <TableCell className={classes.padding} align="right"></TableCell>
                            <TableCell className={classes.padding} align="left">{I18n.t("hips")}</TableCell>

                            <TableRow>
                                <TableCell className={classes.padding_top} ></TableCell>
                                <TableCell className={classes.padding_top} align="center"></TableCell>
                                <TableCell className={classes.padding_top} align="center"></TableCell>
                                <TableCell className={classes.padding_top_inches} align="center">{I18n.t("inches")}</TableCell>
                                <TableCell className={classes.padding_top} align="center">CM</TableCell>
                                <TableCell className={classes.padding_top_inches} align="center">{I18n.t("inches")}</TableCell>
                                <TableCell className={classes.padding_top} align="center">CM</TableCell>
                                <TableCell className={classes.padding_top_inches} align="center">{I18n.t("inches")}</TableCell>
                                <TableCell className={classes.padding_top} align="center">CM</TableCell>
                            </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.size}>
                                <TableCell className={classes.tableRow} component="th" scope="row">{row.size}</TableCell>
                                <TableCell className={classes.alignCenterUK} align="center">{row.uk}</TableCell>
                                <TableCell className={classes.cellForDesctop} align="center"></TableCell>
                                <TableCell className={classes.alignCenter} align="center">{row.bust_inches}</TableCell>
                                <TableCell className={classes.alignCenter} align="center">{row.bust_cm}</TableCell>
                                <TableCell className={classes.waistInches}  align="center">{row.waist_inches}</TableCell>
                                <TableCell className={classes.waistCM} align="center">{row.waist_cm}</TableCell>
                                <TableCell className={classes.hipsInches}  align="center">{row.hips__inches}</TableCell>
                                <TableCell className={classes.hipsCM} align="center">{row.hips_cm}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}
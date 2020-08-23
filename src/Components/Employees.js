import React, { useState, useEffect } from 'react';
import  { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import EmployeesDataService from "../Services/EmployeesDataService";


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    table: {
        minWidth: 650,
    },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);


const boton0 ={
    background:"#0D3EF4",
    width: "100%",
    height :"100%"
};

export default function TableEmployees() {
    const [newsF, setNewsF] = useState([]);
    const classes = useStyles();

    function handleVolver(e) {
        setNewsF ([])
        e.preventDefault();
        window.location.replace("/employeeRegistration");
    }
    useEffect(() => {
        console.log(newsF)
        EmployeesDataService.getAllEmployees().then(response => {

            setNewsF(response.data);

        })
            .catch(error => console.log("Error retrieving  " + error));
    });
    return (
        <TableContainer component={Paper}>
            <AppBar position="relative"  color='primary'>
                <Toolbar >
                    <Typography variant="h6" color="inherit" noWrap>
                        Employees Information
                    </Typography>
                </Toolbar>
                <Button variant="contained" style={boton0} color="secondary" onClick={handleVolver}  >
                    Employee Registration
                </Button>
            </AppBar>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center" >ID </StyledTableCell>
                        <StyledTableCell align="center" >Full Name</StyledTableCell>
                        <StyledTableCell align="center">Function</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {newsF.map((user,idx) => (

                        <StyledTableRow user={user} >
                            <StyledTableCell align="center">{user.id}</StyledTableCell>
                            <StyledTableCell component="th" scope="row" align="center">
                                {user.fullname}
                            </StyledTableCell>
                            <StyledTableCell align="center">{user.function}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}
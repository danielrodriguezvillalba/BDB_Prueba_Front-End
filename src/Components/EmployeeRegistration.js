import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Toolbar from "@material-ui/core/Toolbar";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import EmployeesDataService from "../Services/EmployeesDataService";
import { colors } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import Alert from '@material-ui/lab/Alert';
import {makeStyles} from "@material-ui/core/styles";


export default function EmployeeForm() {
    const employee={
        "id":null,
        "fullname":null,
        "function":null,
        "boss": false
    };
    const [fullname,setFullname]=useState(0);
    const [funcion,setFuncion]=useState(0);
    const [id,setId]=useState(0);
    const [boss,setBoss]=useState('');
    const handleName = (event) => {
        setFullname(event.target.value);
    };
    const handleFuncion = (event) => {
        setFuncion(event.target.value);
    };
    const handleBoss = (event) => {
        setBoss(event.target.value);
    };
    function createEmployee() {
        EmployeesDataService.CreateEmployee(employee).then(
            function(response){
                alert("Employee created succesfully!")
            }).catch(function (error ) {
                if (error.message === "Request failed with status code 500"){
                    alert("Revise los datos e intente de nuevo.")

                }

            })
    }
    const handleId = (event) => {
        setId(event.target.value);
    };

    function handleVolver(e) {
        e.preventDefault();
        //<TableEmployees/>
        window.location.replace("/");
    }
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


    const handleNext = () => {
        try{
            employee.id = id;
            employee.fullname=fullname;
            employee.function=funcion;
            employee.boss=boss;
            createEmployee(employee);
            console.log(employee);

            //window.location.replace("/");
        }
        catch (e){
            alert(e.message())
        }
    };

    const boton0 ={
        background:"#0D3EF4",
        width: "100%",
        height :"100%"
    };
    const typografia={
        fontweight: "bold",
        fontFamily: "cursive",
    };
    const prueba={
        left:15,
        color:" #EBF4FA" ,
        fontweight: "bold",
        fontFamily: "cursive",
    }
    const botonEnv={
        left:15,

    }
    return (
        <React.Fragment >
            <CssBaseline />
            <AppBar position="relative" >
                <Toolbar >
                    <Typography variant="h6" color="inherit" noWrap>
                        EMPLOYEE REGISTER
                    </Typography>
                </Toolbar>
                <Button variant="contained"  onClick={handleVolver} style={boton0} >
                    BACK
                </Button>
            </AppBar>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} style={prueba}>
                    <TextField onChange={handleId} type="number" required id="id" label=" Employee ID" fullWidth style={prueba} />
                </Grid>
                <Grid item xs={12} md={6} style={prueba}>
                    <TextField onChange={handleName} required id="name" label=" Employee full name " fullWidth style={prueba} />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField required onChange={handleFuncion} id="funcion" label="Function" fullWidth style={prueba}/>
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        id="boss"
                        onChange={handleBoss}
                        label="Boss"
                        helperText="Name of immediate boss"
                        style={prueba}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        id="register"
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        style={botonEnv}
                    >
                        Register
                    </Button>
                </Grid>
            </Grid>

        </React.Fragment>
    );
}
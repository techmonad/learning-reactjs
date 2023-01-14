import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button, Grid, InputLabel} from "@mui/material";

export default function EmployeeForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [address, setAddress] = useState("")

    const formSubmit = () => {
        const requestJson = {name, email, companyName, address}
        // call rest service to send the data
        console.log(requestJson)
    }

    return (
        <Grid container spacing={2} padding={2} style={{width: '450px', border: 'blue solid'}}>
            <Grid item xs={10}>
                <InputLabel htmlFor="emp-name" style={{textAlign: 'left'}}>Name</InputLabel>
                <TextField
                    fullWidth
                    id="emp-name"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>
            <Grid item xs={10}>
                <InputLabel htmlFor="emp-email" style={{textAlign: 'left'}}>Email</InputLabel>
                <TextField
                    fullWidth
                    id="emp-email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item xs={10}>
                <InputLabel htmlFor="emp-companyName" style={{textAlign: 'left'}}>Company Name</InputLabel>
                <TextField
                    fullWidth
                    id="emp-companyName"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                />
            </Grid>

            <Grid item xs={10}>
                <InputLabel htmlFor="emp-address" style={{textAlign: 'left'}}>Address</InputLabel>
                <TextField
                    fullWidth
                    id="emp-address"
                    placeholder="Address"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
            </Grid>
            <Grid item xs={10}>
                <Button type="submit" variant="contained" color="primary" onClick={formSubmit}>
                    Submit
                </Button>
            </Grid>
        </Grid>
    );
}

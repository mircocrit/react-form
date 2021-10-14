import React, { Component } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
          <Dialog open fullWidth  maxWidth='sm'>
            <AppBar title="Enter User Details" />
            <TextField placeholder="Enter Your First Name" label="First Name" margin="normal" fullWidth
              defaultValue={values.firstName} onChange={handleChange('firstName')} />
            <br />
            <TextField placeholder="Enter Your Last Name" label="Last Name" margin="normal" fullWidth
              defaultValue={values.lastName} onChange={handleChange('lastName')} />
            <br />
            <TextField placeholder="Enter Your Email" label="Email" margin="normal" fullWidth
              defaultValue={values.email} onChange={handleChange('email')} />
            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>Continue</Button>
          </Dialog>
    );
  }
}

export default FormUserDetails;

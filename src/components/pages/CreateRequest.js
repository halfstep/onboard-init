import React, {useState, useEffect } from 'react';
import '../../App.css';
import PropTypes from 'prop-types';
import { listDataTypes } from '../../graphql/queries';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import validator from 'validator';

import NativeSelect from '@material-ui/core/NativeSelect';

import Amplify, {API, graphqlOperation} from 'aws-amplify';
//import CreateDataRequest from './CreateDataRequest';

function CreateRequest() {
    const [state, setState] = React.useState({
        dataType: '',
        dataLabel: '',
        firstName: '',
        lastName: '',
        emailAddress: '',
        ownerEmailAddress: '',        
        requestedData: []
      });
    
      const [dataTypes, setDataTypes] = React.useState([]);
    
      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
    useEffect(() => {
        fetchDataTypes();
      }, [])
    
    const fetchDataTypes = async () => {
        try {
            const dataTypeData = await API.graphql(graphqlOperation(listDataTypes));
            const dataTypeList = dataTypeData.data.listDataTypes.items;
            console.log('datatype list', dataTypeList);
            setDataTypes(dataTypeList);
        } catch (error) {
            console.log('error on fetching songs', error);
        }
    };

    const validateEmail = (e) => { 
        var email = e.target.value 
      
        /*if (validator.isEmail(email)) { 
          setEmailError('Valid Email :)') 
        } else { 
          setEmailError('Enter valid Email!') 
        } */
      }; 
    
    return (
        <>
            <h1 className='create-request'>Create New Request</h1>
            <Container maxWidth="sm"><form className="createRequestForm" autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <FormControl className="firstName">
                            <TextField required label="First Name" variant="outlined" native type="email" value={state.firstName} onChange={handleChange} inputProps={{
                                name: 'firstName',
                                id: 'firstName'
                            }}/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl className="lastName">                            
                            <TextField required label="Last Name" variant="outlined" native value={state.lastName} onChange={handleChange} inputProps={{
                                name: 'lastName',
                                id: 'lastName-native-simple'
                            }}/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl className="emailAddress">                            
                            <TextField required label="Email Address" variant="outlined" native value={state.emailAddress} onChange={handleChange} inputProps={{
                                name: 'emailAddress',
                                id: 'emailAddress-native-simple'
                            }}/>
                        </FormControl>
                    </Grid>
                    <Divider className='divider' />
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary">Add Data Element</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl required className="dataTypeForm" variant="outlined">  
                            <InputLabel htmlFor="dataType-native-simple">Data Type</InputLabel>
                            <Select native value={state.dataType} onChange={handleChange} inputProps={{
                                name: 'dataType',
                                id: 'dataType-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                { dataTypes.map(item => {
                                    return (
                                        <option value={item.id}>{item.key} - {item.version}</option>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={8}>
                        <FormControl className="dataLabel">                            
                            <TextField required label="Data Label" variant="outlined" native value={state.dataLabel} onChange={handleChange} inputProps={{
                                name: 'dataLabel',
                                id: 'dataLabel-native-simple'
                            }}/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary">Submit</Button>
                    </Grid>                    
                </Grid></form>
            </Container>                
            
        </>
    )
}

export default CreateRequest;



import React, {useState, useEffect, Fragment } from 'react';
import '../../App.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import validator from 'validator';

import Amplify, {API, graphqlOperation, Auth} from 'aws-amplify';
import Lambda from 'aws-sdk/clients/lambda'; // npm install aws-sdk
import { listDataTypes, listDataRequests } from '../../graphql/queries';
import { createDataRequest, createDataElement } from '../../graphql/mutations';

function CreateRequest() {
    const [state, setState] = React.useState({                
        firstName: '',
        lastName: '',
        emailAddress: '',
        ownerEmailAddress: '',        
        requestedData: [{
            dataType: '',
            dataLabel: '',
        }]
      });
    
    const [dataTypes, setDataTypes] = React.useState([]);

    const handleChange = (event) => {
    const name = event.target.name;
    setState({
        ...state,
        [name]: event.target.value,
    });
    };

    const handleNestedChange = (event) => {
        const id = event.target.id;        
        const split = id.split("-");
        const idx = split[1];
        const field = split[0];        
        const requestedData = state.requestedData;      
        const element = requestedData[idx];
        element[field] = event.target.value;       
        setState({
            ...state,
            "requestedData": requestedData 
        })
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
            console.log('error on fetching dataTypes', error);
        }
    };

    const submitDataElement = async(element) => {              
        const newDataElement = await API.graphql(graphqlOperation(createDataElement, {input: element}));   
    }

    const submitCreateDataRequest = async() => {
        console.log('create new data request');
        try {
            const requestDetails = {
                firstName: state.firstName,
                lastName: state.lastName,
                emailAddress: state.emailAddress,
                ownerEmailAddress: Auth.user.attributes.email,
                createTimestamp: Math.floor(Date.now() / 1000),
                status: 'PENDINGRESPONSE',               
              };              
            const newDataRequest = await API.graphql(graphqlOperation(createDataRequest, {input: requestDetails}));   
            const elements = [];
            state.requestedData.map(element => {
                const elementDetails = {
                    label: element.dataLabel,
                    key: dataTypes.find(item => {return item.id == element.dataType}).key,
                    datarequestID: newDataRequest.data.createDataRequest.id,
                    dataElementDataTypeId: element.dataType
                };  
                elements.push(elementDetails);           
            });    
            console.log(elements);            
            elements.forEach(submitDataElement);
            Auth.currentCredentials()
            .then(credentials => {
                const lambda = new Lambda({
                credentials: Auth.essentialCredentials(credentials)
                });
                return lambda.invoke({
                FunctionName: 'onboard_send_email',
                Payload: JSON.stringify({ "email": state.emailAddress, "uuid": newDataRequest.data.createDataRequest.id}),
                });
            });
        } catch (error) {
            console.log('error on creating request', error);
        }
    };

    const addDataElement = (event) => {
        var dataElements = state.requestedData;
        dataElements.push({
            dataType: '',
            dataLabel: '',
        });
        setState({
            ...state,
            "requestedData": dataElements 
        })
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
                        <Button variant="contained" color="secondary" onClick={addDataElement}>Add Data Element</Button>
                    </Grid>
                {
                    state.requestedData.map(function(element, index) {
                        return (
                            <Fragment>                                
                                <Grid item xs={4}>
                                    <FormControl required className="dataTypeForm" variant="outlined">  
                                        <InputLabel htmlFor={'dataType-' + index}>Data Type</InputLabel>
                                        <Select native value={element.dataType} onChange={handleNestedChange} inputProps={{
                                            name: 'dataType-' + index,
                                            id: 'dataType-' + index,
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
                                        <TextField required label="Data Label" variant="outlined" native value={element.dataLabel} onChange={handleNestedChange} inputProps={{
                                            name: 'dataLabel-' + index,
                                            id: 'dataLabel-' + index
                                        }}/>
                                    </FormControl>
                                </Grid>
                            </Fragment> 
                        )    
                    })
                }                                            
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={submitCreateDataRequest}>Submit</Button>
                    </Grid>                    
                </Grid></form>
            </Container>                
            
        </>
    )
}

export default CreateRequest;



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
import {BrowserRouter as Router,Switch, Route, useParams} from 'react-router-dom';

import Amplify, {API, graphqlOperation, Auth} from 'aws-amplify';
import { listDataElements, getDataRequest } from '../../graphql/queries';
import { updateDataRequest, updateDataElement } from '../../graphql/mutations';

function GetRequest() {
    let { id } = useParams();

    const [state, setState] = React.useState({                        
        requestId: id,
        firstName: '',
        lastName: '',
        emailAddress: '',
        ownerEmailAddress: '',        
      });

      const [dataElements, setDataElements] = React.useState([{dataType: '',dataLabel: '',}]);

      const handleChange = (event) => {
        const name = event.target.name;
        console.log('handleChange: name - ' + name + ', value: ' + event.target.value );
        setState({
            ...state,
            [name]: event.target.value,
        });
      };

      const fetchRequest = async () => {
        try {        
            const requestResponse = await API.graphql(graphqlOperation(getDataRequest, { id: id }));
            const requestedData = requestResponse.data.getDataRequest;
            setState({
                ...state,
                "firstName": requestedData.firstName,
                "lastName": requestedData.lastName,
                "emailAddress": requestedData.emailAddress,
                "ownerEmailAddress": requestedData.ownerEmailAddress
            });
            fetchDataElements(requestedData.id);
            
        } catch (error) {
            console.log('error on fetching dataTypes', error);
        }
    };

    const fetchDataElements = async(id) => {
        try {
            const dataElement = await API.graphql(graphqlOperation(listDataElements, {
                filter:{
                    datarequestID: {
                        eq: id 
                    }
                }
            }));
            const dataElementsList = dataElement.data.listDataElements.items;
            setDataElements(dataElementsList);
        } catch (error) {
            console.log('error on fetching data response', error);
        }
    };

    const submitDataElements = async() => {
        console.log('Submitting Data Elements');
        try {
            const requestDetails = {
                id: state.requestId,                
                status: 'PENDINGRETRIEVAL',               
              };              
            const updatedDataRequest = await API.graphql(graphqlOperation(updateDataRequest, {input: requestDetails}));   
            const elements = [];
            dataElements.map(element => {
                const elementDetails = {                 
                    dataValue: element.dataValue,
                    id:element.id
                };  
                elements.push(elementDetails);           
            });    
            console.log(elements);            
            elements.forEach(updateDataElements);
        } catch (error) {
            console.log('error on creating request', error);
        }
    };

    const updateDataElements = async(element) => {       
        console.log('updating element');
        console.log(element);
        try {
            const newDataElement = await API.graphql(graphqlOperation(updateDataElement, {input: element}));   
        } catch (error) {
            console.log('error updating data element');
            console.log(error);
            console.log(element);
        }
    }

    const handleNestedChange = (event) => {
        
        const id = event.target.id;        
        const split = id.split("-");
        const idx = split[1];
        const field = split[0];        
        const submitElements = dataElements;      
        const element = submitElements[idx];
        element[field] = event.target.value;       
        console.log('handleNestedChange: idx: ' + idx + 'element: ' + element + ', element[field]: ' + element[field] + ', value: ' + event.target.value);
        setDataElements(submitElements);
    };

    useEffect(() => {
        fetchRequest();
      }, []);

      return (
        <>
        <div>
  
          <h3>ID: {id}</h3>
        
        </div>
        <Container maxWidth="sm"><form className="createRequestForm" autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <FormControl className="firstName">
                            <TextField label="First Name" variant="outlined" native type="email" value={state.firstName} inputProps={{
                                name: 'firstName',
                                id: 'firstName',
                                readOnly:true
                            }}/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl className="lastName">                            
                            <TextField label="Last Name" variant="outlined" native value={state.lastName} inputProps={{
                                name: 'lastName',
                                id: 'lastName-native-simple',
                                readOnly:true
                            }}/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl className="emailAddress">                            
                            <TextField label="Email Address" variant="outlined" native value={state.emailAddress} inputProps={{
                                name: 'emailAddress',
                                id: 'emailAddress-native-simple',
                                readOnly:true
                            }}/>
                        </FormControl>
                    </Grid>
                   
                { 
                    dataElements.map(function(element, index) {
                        return (
                            <Fragment key={index}>                                       
                                <Grid item xs={6}>
                                    <FormControl className="dataLabel">
                                        <TextField variant="outlined" value={element.label} onChange={handleNestedChange}
                                            inputProps={{name: 'dataLabel-' + index, id: 'dataLabel-' + index, readOnly:true}}/>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl className="dataValue">
                                        <TextField required label="Data Value" variant="outlined" value={element.dataValue} onChange={handleNestedChange}
                                            inputProps={{name: 'dataValue-' + index, id: 'dataValue-' + index, readOnly:false}}/>
                                    </FormControl>
                                </Grid>                                 
                            </Fragment> 
                        )    
                    })
                
                }                                            
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={submitDataElements}>Submit</Button>
                    </Grid>                    
                </Grid></form>
            </Container>
        </>
      );
}

export default GetRequest;
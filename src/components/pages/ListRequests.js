import React, {useState, useEffect, Fragment} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {listDataRequests, listDataElements } from '../../graphql/queries';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import '../../App.css';

function ListRequest() {
    const [state, setState] = React.useState({                
        firstName: '',
        lastName: '',
        emailAddress: '',
        ownerEmailAddress: '',    
        responseData: [{
            id: '',
            key: '',
            label: '',
            dataValue: ''
        }]
      });
    const [open, setOpen] = React.useState(false);
    
    const [requestData, setRequestData] = React.useState([]);
    const [dataElements, setDataElements] = React.useState([]);

    const requestColumns = [
        
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'emailAddress', headerName: 'Email Address', width: 250, },       
        { field: 'status', headerName: 'Status', width: 200 },
        { field: 'createTimestamp', headerName: 'Created On', type: 'date', width:150 },
        { field: 'id', headerName: 'Action', width:300, renderCell: (params) => (
              <Button variant="contained" color="primary" size="small" onClick = {() => handleClickOpen(params.value) }>
                View Data
              </Button>
          )
        }
    ];

    useEffect(() => {
        fetchRequests();
        setOpen(false);
      }, [])

    const fetchRequests = async () => {
        try {        
            console.log('fetching data');    
            const requestData = await API.graphql(graphqlOperation(listDataRequests));
            const requestList = requestData.data.listDataRequests.items;
            console.log('request list', requestList);
            setRequestData(requestList);
            
        } catch (error) {
            console.log('error on fetching dataTypes', error);
        }
    };

    const fetchDataElements = async(id) => {
        try {
            const dataElements = await API.graphql(graphqlOperation(listDataElements, {
                filter:{
                    datarequestID: {
                        eq: id 
                    }
                }
            }));
            const dataElementsList = dataElements.data.listDataElements.items;
            console.log('dataElementsList:');
            console.log(dataElementsList);
            setDataElements(dataElementsList);
            setState({
                ...state,
                "responseData": dataElementsList 
            });
        } catch (error) {
            console.log('error on fetching data response', error);
        }
    };

    const handleClickOpen = (id) => {
        console.log('handleClickOpen - id: ' + id);
        fetchDataElements(id);
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
        <h1 className='list-requests'>List Request</h1>
        <Container >
            <Grid container spacing={3}> 
                <Grid item xs={12}>
                    <DataGrid rows={requestData} columns={requestColumns} pageSize={15} autoHeight="true"  />
                </Grid>
            </Grid>
        </Container>

        <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose} aria-labelledby="response-data-title">
        <DialogTitle id="response-data-title">Response Data</DialogTitle>
        <DialogContent>
            <form noValidate>               
                {
                    state.responseData.map(function(element, index) {
                        return (
                            <Fragment key={element.id}>     
                             <Container maxWidth="sm">
                             <Grid container spacing={3}>
                                <Grid item xs={4} >
                                    <FormControl required className="dataTypeForm" variant="outlined">  
                                        <TextField label="Data Type" variant="outlined" 
                                            native value={element.key} 
                                            inputProps={{name: 'dataType-' + index,id: 'dataType-' + index, readOnly:true}}/>                                  
                                    </FormControl>
                                </Grid> 
                                <Grid item xs={4}>
                                    <FormControl className="dataLabel">
                                        <TextField label="Data Label" variant="outlined" native value={element.label} 
                                            inputProps={{name: 'dataLabel-' + index,id: 'dataLabel-' + index, readOnly:true}}/>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControl className="dataLabel">
                                        <TextField label="Data Value" variant="outlined" native value={element.dataValue} 
                                            inputProps={{name: 'dataValue-' + index,id: 'dataValue-' + index, readOnly:true}}/>
                                    </FormControl>
                                </Grid>
                                </Grid>    
                             </Container>                              
                            </Fragment> 
                        )    
                    })
                }     
            </form>                 
        </DialogContent>
        <DialogActions>
          <Button  color="primary" onClick={handleClose}>
            Mark Complete
          </Button>
          <Button  color="primary" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

        </>
    );    
}

export default ListRequest;
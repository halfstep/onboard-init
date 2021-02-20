import './App.css';
import React, {useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Paper from '@material-ui/core/Paper';

import Amplify, {API, graphqlOperation} from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import ListRequests from './components/pages/ListRequests';
import CreateRequest from './components/pages/CreateRequest';
import GetRequest from './components/pages/GetRequest';
import {BrowserRouter as Router,Switch, Route, useParams} from 'react-router-dom';

Amplify.configure(awsconfig);


function App() {
  
  const [state, setState] = React.useState({
    dataType: ''
  });

  const [dataTypes, setDataTypes] = React.useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/createRequest' exact component={CreateRequest} />
        <Route path='/listRequests' exact component={ListRequests} />
        <Route path='/getRequest/:id' exact component={GetRequest} />
      </Switch>
    </Router>    
    </>  

    /*useEffect(() => {
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
    }; // render
    <div className="dataTypeList">
                <FormControl className="dataTypeForm">  
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
            </div>  */
      
  );
}

export default withAuthenticator(App);

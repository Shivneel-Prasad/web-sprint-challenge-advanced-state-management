import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';

 const SmurfList = (state) => {
    
    if (state.isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="listContainer">
          {state.smurfsArray.map((smurf) => (
              <Smurf key={smurf.id} smurf={smurf}/>
          ))}
            
        </div>
    );
}

const mapState = (state) => {
    return ({
        smurfsArray: state.smurfsArray,
        isLoading: state.isLoading
    })
}

export default connect(mapState, {fetchSmurfs})(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { errorUpdate, addNewSmurf } from '../actions';

const AddForm = (props) => {
    const [state, setState] = useState({
        name:"",
        position:"",
        nickname:"",
        description:""
    });

    const handleChange = e => {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]:value,
            [e.target.position]:value,
            [e.target.nickname]:value,
            [e.target.description]:value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (state.name === "" || state.position === "" || state.nickname === "") {
            //dispatch a custom error action
            return props.errorUpdate('Name, position and nickname fields are required.')
        } else {
            //dispatch an addSmurf action
            props.addNewSmurf({
                ...state,
                name: state.name,
                position: state.position,
                nickname: state.nickname,
                description: state.description
            })
        }
    }

    const { name, position, nickname, description } = state
    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={description} name="description" id="description" />
            </div>
            {
                props.error && 
                    <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {props.error}
                    </div>
            }
            <button>Submit Smurf</button>
        </form>
    </section>);
}

const mapState = (state) => {
    return ({
        error: state.error,
    })
}

const mapAction = { errorUpdate, addNewSmurf}

export default connect(mapState, mapAction)(AddForm);

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
//2. Replace all instances of the errorMessage static variable with your error message state value. 
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.
import React from 'react';
import axios from 'axios';
import {produce} from 'immer';


class AddPerson extends React.Component{
state = {
    firstName: '',
    lastName: '',
    age : ''
}

onTextChange = e =>{
    const nexState = produce(this.state, draft => {
        draft[e.target.name] = e.target.value;
    });
    this.setState(nexState);
} 

onSubmitClick = async () => {
    await axios.post('/api/home/addperson', this.state);
    this.props.history.push('/');
}

render(){
    const{firstName, lastName, age} = this.state;
    return(
        <div className="row">
            <div className="col-md-6 offsett-md-3 card card-body bg-light">
                <h2>Add Person</h2>
                <input type="text" className='form-control' name="firstName" value={firstName} onChange={this.onTextChange} placeholder="First Name"/>
                <br/>
<input type="text" className='form-control' name="lastName" value={lastName} onChange={this.onTextChange} placeholder="Last Name"/>
<br/>
<input type="text" className="form-control" name="age" value={age} onChange={this.onTextChange} placeholder="Age"/>
<br/>
<button className="btn btn-primary" onClick={this.onSubmitClick}>Submit</button>
            </div>
        </div>
    )
}

}
export default AddPerson;
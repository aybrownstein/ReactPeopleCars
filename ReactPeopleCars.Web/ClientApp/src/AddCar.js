import React from 'react';
import axios from 'axios';
import {produce} from 'immer';

class AddCar extends React.Component{
    state = {
        make: '',
        model: '',
        year: '',
        person: {
            firstName: '',
            lastName: ''
        }
    }

    componentDidMount = async () => {
const {personId} = this.props.match.params;
const {data} = await axios.get(`/api/home/getperson?id=${personId}`);
this.setState({person: data});
    }

    onTextChange = e => {
const nextState = produce(this.state, draft => {
    draft[e.target.name] = e.target.value;
});
this.setState(nextState);
    }

    onSubmitClick = async () => {
        const {personId} = this.props.match.params;
        const {make, model, year} = this.state;
        await axios.post('/api/home/addcar', {make, model, year, personId});
        this.props.history.push('/');
    }

    render(){
        const {make, model, year} = this.state;
        const {firstName, lastName} = this.state.person;
        return(
            <div className="row">
                <div className="col-md-6 offsett-md-3 card card-body bg-light">
                    {firstName && <h2>Add a car for {firstName} {lastName}</h2>}
                    <input type="text" className="form-control" name="make" value={make} onTextChange={this.onTextChange} placeholder="Make"/>
                    <br/>
                    <input type="text" className="form-control" name="model" value={model} onTextChange={this.onTextChange} placeholder="Model"/>
                    <br/>
                    <input type="text" className="form-control" name="year" value={year} onTextChange={this.onTextChange} placeholder="Year"/>
                    <br/>
                    <button className="btn btn-primary btn-block" onClick={this.onSubmitClick}>Submit</button>
                </div>
            </div>
        )
    }
}
export default AddCar;
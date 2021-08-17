import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import PersonRow from './PersonRow';

class Home extends React.Component{
    state = {
        people: []
    }

componentDidMount = async () => {
    const {data} = await axios.get('/api/home/getall');
    this.setState({people: data});
}

    render(){
    return(
        <>
<Link to='/addperson'>
    <button className="btn btn-success btn-lg btn-block">Add Person</button>
</Link>
<table className="table table-striped table-bordered">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Car Count</th>
            <th>Add Car</th>
            <th>Delete Car</th>
        </tr>
    </thead>
    <tbody>
{this.state.people.map(p => <PersonRow Person={p} key={p.id}/>)}
    </tbody>
</table>
        </>
    )
}
}
export default Home;
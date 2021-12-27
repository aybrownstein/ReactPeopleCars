import React from 'react';
import axios from 'axios';
import CarRow from './CarRow';
import {Link} from 'react-router-dom';

class DeleteCars extends React.Component{
    state = {
        cars: []
    }

    componentDidMount = async () => {
const {personId} = this.props.match.params;
const {data} = await axios.get(`/api/home/getcars?personId=${personId}`);
this.setState({cars: data});
    }

    onDeleteClick = async () => {
        const {personId} = this.props.match.params;
        await axios.post('/api/home/deletecars', {personId});
        this.props.history.push('/'); 
    }

    render(){
        return(
          <div style={{backgroundColor: 'white', minHeight: 1000, paddingTop: 10}}>
              <div className="row mt-5">
                  <div className="col-md-12">
                      <table className="table table-striped table-bordered">
                          <thead>
                              <tr>
                                  <th>Make</th>
                                  <th>Model</th>
                                  <th>Year</th>
                              </tr>
                          </thead>
                          <tbody>
                              {this.state.cars.map(c => <CarRow car={c} key={c.id}/>)}
                          </tbody>
                      </table>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      <h3>Are You Sure You Want to Delete All Your Cars?</h3>
                  </div>
                 <div className="col-md-6" style={{marginTop: 20}}>
                     <Link to='/' style={{textDecoration: 'none'}}>
                         <button className="btn btn-primary btn-block">Cancel</button>
                     </Link>
                     </div> 
                     <div className="col-md-6" style={{marginTop: 20}}>
                         <button className="btn btn-danger btn-block" onClick={this.onDeleteClick}>Yes</button>
                     </div>
              </div>
          </div>  
        )
    }
}
export default DeleteCars;
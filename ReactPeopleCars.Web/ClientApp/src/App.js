import React, { Component } from 'react';
import { Route } from 'react-router';
import AddCar from './AddCar';
import AddPerson from './AddPerson';
import DeleteCars from './DeleteCars';
import Home from './HomePage';
import Layout from './Layout';


export default class App extends Component {
 

  render () {
    return (
      <Layout>
<Route exact path='/' component={Home}/>
<Route exact path='/addperson' component={AddPerson}/>
<Route exact path='/addcar/:personId' component={AddCar}/>
<Route exact path='/deletecars/:personId' component={DeleteCars}/>
      </Layout>
    );
  }
}

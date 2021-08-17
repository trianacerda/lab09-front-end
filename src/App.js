import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './Header/Header.js';
import Create from './Create/Create.js';
import AnimalsList from './AnimalsList/AnimalsList.js';
import AnimalsDetails from './AnimalsDetails/AnimalsDetails.js';
class App extends Component {
  render (){
    return (
    <section className="animalsApp">
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={AnimalsList} />
            <Route exact path="/animals/:id" component={AnimalsDetails} />
            <Route exact path="/create" component={Create} />
          </Switch>
      </BrowserRouter>
    </section>
    );
  }
}

export default App;

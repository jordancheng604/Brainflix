import React from 'react';
import Main from './components/Main';
import Home from './components/Main';
import Upload from './pages/Upload';
import { BrowserRouter, Route, Switch, } from "react-router-dom";

class App extends React.Component { 
  render() {
      return (
    <div> 
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Upload' component={Upload}/>
      <Route path='/videos/:id' render={(routeProps)=>{return <Main routeProps={routeProps}/>}}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}    
}
export default App;

import React, {Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen: false});
  };

  render(){
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen){
      sideDrawer = <sideDrawer/>;
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div style={{height:'100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show = {this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop:'64px'}}>
          <p>dnasndnsn</p>
          </main>
      </div>
    );
  }
}

export default App;

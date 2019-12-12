import React from 'react';
import LogoSideDrawer from './logoSideDrawer.png';
import './SideDrawer.css';
/* import drawerToggleButton from './DrawerToggleButton'; */

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <div className="sideDrawer_logo"><a href="/"><img src={LogoSideDrawer} alt=""website logo/></a></div>
            <ul>
                <li><a href="/">PROJECTS</a></li>
                <li><a href="/">SERVICES</a></li>
                <li><a href="/">CONTACT</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;
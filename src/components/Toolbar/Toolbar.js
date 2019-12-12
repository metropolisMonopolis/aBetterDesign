import React from 'react';
/* import Logo from "./logo.png"; */
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/"><h1>ButtrDesigns</h1>{/* <img src={Logo} alt=""website logo/> */}</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">SERVICES</a></li>
                    <li><a href="/">PROJECTS</a></li>
                    <li><a href="/">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
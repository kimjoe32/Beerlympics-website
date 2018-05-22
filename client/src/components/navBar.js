import React, { Component } from 'react';
import { Navbar, Dropdown, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import '../css/navBar.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class NavBar extends Component {
    render() {
        return (
            <Navbar brand='Beerlympics' right>
                <Dropdown trigger={
                    <a><Icon right>keyboard_arrow_down</Icon>Teams</a>
                } 
                
                options={{constrainWidth: false,
                    hover: true, 
                    belowOrigin: true, 
                    alignment:'right'}}
                >
                    
                    <Link to="/add_team" >
                        <Icon left>add</Icon>Add a Team
                    </Link>
                        
                    <div className="divider"></div>
                    <Link to="/add_team" >
                        <Icon left>edit</Icon>Edit a Team
                    </Link>
                </Dropdown>
            </Navbar>
        );
    }
}

export default NavBar;
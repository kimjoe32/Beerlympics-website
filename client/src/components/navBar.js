import React, { Component } from 'react';
import { Dropdown, Icon} from 'react-materialize';
import { Link } from 'react-router-dom';
import '../css/navBar.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

const dropDownOptions= {
    constrainWidth: false,
    hover: true, 
    belowOrigin: true, 
    alignment:'right'
};

class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Beerlympics</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/start_game"> 
                                <div>Start Game</div>
                            </Link> 
                        </li>
                        <li>
                            <Dropdown trigger={
                                <a><Icon right>keyboard_arrow_down</Icon>Teams</a>
                            } 
                            options={dropDownOptions}
                            >
                                <Link to="/add_team" >
                                    <Icon left>add</Icon>Add a Team
                                </Link>
                                    
                                <div className="divider"></div>

                                <Link to="/add_team" >
                                    <Icon left>edit</Icon>Edit a Team
                                </Link>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
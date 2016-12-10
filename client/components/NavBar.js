import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    $.ajax({
      url: '/users/sign_out',
      type: 'DELETE'
    }).done( data => {
      window.location.pathname = "/"
    }).fail( data => {
      console.log(data);
    })
  }

  render() {
    return(
    	<nav>
        <div className="nav-wrapper blue darken-4">
          <Link to='/' className='brand-logo'>DPL Movie Tracker</Link>
          <ul id="nav-mobile" className="right">
            <li> <a href="/" onClick={ () => this.logout() }>Logout</a> </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
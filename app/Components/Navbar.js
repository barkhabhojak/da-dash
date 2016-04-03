import React, { Component, PropTypes } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

class Nav extends Component {

  static propTypes = {
    toggleSideBar: PropTypes.func.isRequired,
    sidebarOpen: PropTypes.bool.isRequired,
  }

  style = () => {
    return {
      navbar: {
        maxWidth: this.props.sidebarOpen ? '75%' : '100%',
      },
    };
  }

  render() {
    const style = this.style();
    return (
      <Navbar className="side-content" style={style.navbar} fluid onToggle={this.props.toggleSideBar}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>Da-Dash</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Nav;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Button } from 'semantic-ui-react';

class AppHeader extends Component {
  logout = () => {
    $.get('/logout')
  }
  render() {
    return (

      <Menu>
        <Link to="/home"><Menu.Item>Dashboard</Menu.Item></Link>
        <Menu.Menu position="right">
          <Dropdown text="Orders" pointing className="link item">
            <Dropdown.Menu>
              <Link to="/createOrder"><Dropdown.Item>Create New Order</Dropdown.Item></Link>
              <Link to="/products"><Dropdown.Item>Pending Orders</Dropdown.Item></Link>
              <Link to="/receivedOrder"><Dropdown.Item>Received Orders</Dropdown.Item></Link>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown text="Internal Dispatch" pointing className="link item">
            <Dropdown.Menu>
              <Link to="/createInternalDispatch"><Dropdown.Item>Create New Dispatch</Dropdown.Item></Link>
              <Link to="/internal"><Dropdown.Item>Pending Dispatches</Dropdown.Item></Link>
              <Link to="/receivedInternalDispatch"><Dropdown.Item>Dispatch Completed</Dropdown.Item></Link>
            </Dropdown.Menu>

          </Dropdown>
          <Dropdown.Item ><Button onClick={this.logout}>Logout</Button></Dropdown.Item>
        </Menu.Menu>
      </Menu>

    );
  }
}

export default AppHeader;

import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    state = {}
    
      handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
      render() {
        const { activeItem } = this.state
    
        return (
          <Menu stackable inverted>
            <Menu.Item as={Link} to="/">
            <Icon name="home" size="large" />
            </Menu.Item>
    
            <Menu.Item
              name='features'
              active={activeItem === 'features'}
              onClick={this.handleItemClick}
            >
              Features
            </Menu.Item>
    
            <Menu.Item
              name='testimonials'
              active={activeItem === 'testimonials'}
              onClick={this.handleItemClick}
            >
              Testimonials
            </Menu.Item>
    
            <Menu.Item
              name='sign-in'
              as={Link}
              active={activeItem === 'sign-in'}
              onClick={this.handleItemClick}
              to="/login"
            >
              Sign-in 
            </Menu.Item>
          </Menu>
        )
    }
}

export default NavBar;
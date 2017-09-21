import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Dropdown, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    renderContent() {
        //console.log("All props", this.props);
        const { activeItem } = this.state
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <Menu.Item
                        key={1}
                        name='sign-in'
                        as={Link}
                        active={activeItem === 'sign-in'}
                        onClick={this.handleItemClick}
                        to="/login"
                    >
                        Sign-in
                        </Menu.Item>
                );
            default:
                return [
                    <Menu.Item
                        key={2}
                        href="/api/logout"
                        name='log-out'
                        active={activeItem === 'log-out'}
                        onClick={this.handleItemClick}
                    >
                        Logout
                        </Menu.Item>
                ]
        }

    }

    render() {
        const { activeItem } = this.state

        return (
            <Menu stackable>
                <Menu.Item key={3} as={Link} to="/">
                    <Icon color="teal" name="home" size="large" />
                </Menu.Item>
                <Menu.Item
                    key={4}
                    name='features'
                    active={activeItem === 'features'}
                    onClick={this.handleItemClick}
                >
                    Features
            </Menu.Item>
                <Dropdown text="Sections" pointing className="link item">
                    <Dropdown.Menu>
                        <Dropdown.Header>Categories</Dropdown.Header>
                        <Dropdown.Item> Arts </Dropdown.Item>
                        <Dropdown.Item> Cinema </Dropdown.Item>
                        <Dropdown.Item> Games </Dropdown.Item>
                        <Dropdown.Item> Music </Dropdown.Item>
                        <Dropdown.Item> TV </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item
                    key={5}
                    name='about'
                    active={activeItem === 'testimonials'}
                    onClick={this.handleItemClick}
                >
                    About us
            </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Input icon="search" placeholder="Search ..." />
                    </Menu.Item>
                    {this.renderContent()}
                </Menu.Menu>
            </Menu>
        );
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(NavBar);
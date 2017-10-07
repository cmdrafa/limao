import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        console.log(this.props);
        const { activeItem } = this.state;

        return (
            <Menu vertical>
                <Menu.Item>
                    <Menu.Header><Icon name="setting" size="big" fitted color="teal" /></Menu.Header>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header> Blog posts </Menu.Header>
                    <Menu.Menu>
                        <Menu.Item name="list"
                            active={activeItem === 'search'}
                            onClick={this.handleItemClick}>
                            My list of posts
                        </Menu.Item>
                        <Menu.Item name='add'
                            as={Link}
                            to="/dashboard/addpost"
                            active={activeItem === 'add'}
                            onClick={this.handleItemClick}>
                            Add new post
                        </Menu.Item>
                        <Menu.Item name='remove'
                            active={activeItem === 'about'}
                            onClick={this.handleItemClick}>
                            Remove a post
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header> Administration </Menu.Header>
                    <Menu.Menu>
                        <Menu.Item name="users"
                            active={activeItem === 'users'}
                            onClick={this.handleItemClick}>
                            Active users
                        </Menu.Item>
                        <Menu.Item name="voucher"
                            active={activeItem === 'voucher'}
                            onClick={this.handleItemClick}>
                            Invite a new user
                        </Menu.Item>
                        <Menu.Item name="fire"
                            active={activeItem === 'fire'}
                            onClick={this.handleItemClick}>
                            Remove a user
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header> Support </Menu.Header>
                    <Menu.Menu>
                        <Menu.Item name="stats"
                            active={activeItem === 'stats'}
                            onClick={this.handleItemClick}>
                            Site statistics
                        </Menu.Item>
                        <Menu.Item name="issue"
                            active={activeItem === 'issue'}
                            onClick={this.handleItemClick}>
                            Report an issue
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}



export default connect(mapStateToProps, null)(Sidebar);
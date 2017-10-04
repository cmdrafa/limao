import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Sidebar, Segment, Menu, Icon, Header, Button } from 'semantic-ui-react';


import DashboardMain from './DashboardMain';
import DashboardAdd from './DashboardAdd';


class Dashboard extends Component {
    state = { visible: false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        const { visible } = this.state
        if (this.props.auth) {
            return (
                <div>
                    <Sidebar.Pushable as={Segment}>
                        <Sidebar as={Menu} animation='push' width='thin' visible={visible}
                            icon='labeled' vertical inverted>
                            <Menu.Item name='archive'>
                                <Icon name='archive' />
                                My posts
                            </Menu.Item>
                            <Menu.Item
                                as={Link}
                                name='newPost'
                                to={`${this.props.match.path}/addpost`}
                            >
                                <Icon name='add circle' />
                                New post
                            </Menu.Item>
                            <Menu.Item name='delete'>
                                <Icon name='recycle' />
                                Delete post
                </Menu.Item>
                        </Sidebar>
                        <Sidebar.Pusher>
                            <Segment basic>
                                <Header as='h3'>
                                    <Switch>
                                        <div style={{ minHeight: '600px' }}> <Button icon> <Icon name="resize horizontal" size="large" onClick={this.toggleVisibility} />  </Button>
                                            <Route exact={true} path={this.props.match.path} component={DashboardMain} />
                                            <Route path={`${this.props.match.path}/addpost`} component={DashboardAdd} />
                                        </div>
                                    </Switch>
                                </Header>
                            </Segment>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            )
        }
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>Forbidden, please login!</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};


export default connect(mapStateToProps, null)(Dashboard);
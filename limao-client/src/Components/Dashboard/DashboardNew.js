import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Container } from 'semantic-ui-react';

import DashboardMain from './DashboardMain';
import DashboardAdd from './DashboardAdd';
import Sidebar from './Sidebar';
import RichEditor from './Posts/RichEditor';

class DashboardNew extends Component {
    render() {
        console.log(this.props);
        if (this.props.auth) {
            return (
                <div>
                    <Grid stackable columns={2}>
                        <Grid.Column textAlign="center" width={3}>
                            <Sidebar />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Switch>
                                <Route exact={true} path='/dashboard' component={DashboardMain} />
                                <Route path="/dashboard/addpost" component={DashboardAdd} />
                                <Route path="/dashboard/rich" component={RichEditor} />
                            </Switch>
                        </Grid.Column>
                    </Grid>
                </div>
            );
        }
        return (
            <Container>
                <h2 style={{ textAlign: 'center' }}>Forbidden, please login!</h2>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps)(DashboardNew);
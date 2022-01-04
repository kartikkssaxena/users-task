import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestUsers, deleteUser, saveUser } from '../redux/action';
import User from './User';

export class UsersContainer extends Component {

    componentDidMount() {
        this.props.onRequestUsers(); //fetching the user data on component load.
    }

    render() {
        const { loading, users } = this.props;
        return (
            <div>
                {loading ? <h3>Loading</h3> : <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Profile</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((user, key) => {
                            return (<User
                                users={users}
                                user={user}
                                key={key}
                                onUserDelete={this.props.onUserDelete}
                                onUserSave={this.props.onUserSave}
                            />)
                        })}
                    </tbody>
                </table>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        loading: state.loading,
        error: state.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestUsers: () => requestUsers(dispatch),
        onUserDelete: (id) => deleteUser(id, dispatch),
        onUserSave: (editedData) => saveUser(editedData, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

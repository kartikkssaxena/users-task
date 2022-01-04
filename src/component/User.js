import React, { Component } from 'react'

export class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isEdited: false,
            id: this.props.user.id,
            avatar: this.props.user.avatar,
            first_name: this.props.user.first_name,
            last_name: this.props.user.last_name,
            email: this.props.user.email,
        }
    }

    handleEdit = () => {
        this.setState({ isEdited: true });
    }

    handleSave = () => {
        this.setState({ isEdited: false });
        let editedUserObj = {
            id: this.state.id,
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            avatar: this.state.avatar,
        }; // creating an obj with edited details
        let allUsers = this.props.users;
        allUsers[this.props.user.id - 1] = editedUserObj;
        this.props.onUserSave(allUsers); //setting the user array with edited details
    }

    handleChange = (event) => {
        switch (event.target.id) {
            case "fname":
                this.setState({ first_name: event.target.value })
                break;
            case "lname":
                this.setState({ last_name: event.target.value })
                break;
            case "email":
                this.setState({ email: event.target.value })
                break;
            default:
                break;
        }
    }

    render() {
        const { user } = this.props;
        const { isEdited } = this.state;
        return (<tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td><img src={user.avatar} alt="Not Available" width="80" height="80"></img></td>
            <td>{isEdited ? <input type="text" id="fname" value={this.state.first_name} onChange={this.handleChange} /> : user.first_name}</td>
            <td>{isEdited ? <input type="text" id="lname" value={this.state.last_name} onChange={this.handleChange} /> : user.last_name}</td>
            <td>{isEdited ? <input type="text" id="email" value={this.state.email} onChange={this.handleChange} /> : user.email}</td>
            <td>
                {isEdited ? <button className="btn btn-success" onClick={this.handleSave} > Save </button>
                    : <button className="btn btn-primary" onClick={this.handleEdit}> Edit </button>}
                <button className="btn btn-danger" onClick={() => { this.props.onUserDelete(user.id) }}> Delete </button>
            </td>
        </tr>)
    }
}

export default User

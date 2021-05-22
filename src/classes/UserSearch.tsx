import React, { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state = {
    name: '',
    user: undefined,
  };

  onButtonClick = () => {
    const foundUser = this.props.users.find(
      (user) => user.name === this.state.name
    );
    this.setState({ user: foundUser });
  };

  render() {
    const { name, user } = this.state;
    return (
      <div>
        <h1>User Search</h1>
        <input
          type="text"
          value={name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button type="button" onClick={this.onButtonClick}>
          Search
        </button>
        <div>{user?.name}</div>
        <div>{user?.age}</div>
      </div>
    );
  }
}

export default UserSearch;

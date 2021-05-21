import React, { useState } from 'react';

const users = [
  { name: 'Iulian', age: 36 },
  { name: 'Aneta', age: 28 },
  { name: 'Oliver', age: 1 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onButtonClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      <h1>User Search</h1>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="button" onClick={onButtonClick}>
        Search
      </button>
      <div>{user?.name}</div>
      <div>{user?.age}</div>
    </div>
  );
};

export default UserSearch;

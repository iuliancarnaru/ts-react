import React, { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Iulian', age: 36 },
  { name: 'Aneta', age: 28 },
  { name: 'Oliver', age: 1 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const onButtonClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      <h1>User Search</h1>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="button" onClick={onButtonClick}>
        Search
      </button>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
};

export default UserSearch;
